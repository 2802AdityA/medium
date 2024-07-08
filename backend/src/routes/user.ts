import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { sign } from "hono/jwt";
import { signinInput, signupInput } from "@ad1tya.28/common-medium";

export const userRouter = new Hono<{
	Bindings: {
		DATABASE_URL: string;
		JWT_SECRET: string;
	};
}>();

userRouter.post("/signup", async (c) => {
	const body = await c.req.json();
	const { success } = signupInput.safeParse(body);

	if (!success) {
		c.status(411);
		return c.json({
			message: "input not correct",
		});
	}

	const prisma = new PrismaClient({
		datasourceUrl: c.env.DATABASE_URL,
	}).$extends(withAccelerate());

	try {
		const user = await prisma.user.create({
			data: {
				email: body.email,
				password: body.password,
			},
		});
		const token = await sign({ id: user.id }, c.env.JWT_SECRET);
		return c.json({ jwt: token });
	} catch (e) {
		return c.json({ message: "Unable to add user" });
	}
});

userRouter.post("/signin", async (c) => {
	const body = await c.req.json();

	const { success } = signinInput.safeParse(body);

	if (!success) {
		c.status(411);
		return c.json({
			message: "wrong input",
		});
	}
	const prisma = new PrismaClient({
		datasourceUrl: c.env.DATABASE_URL,
	}).$extends(withAccelerate());

	try {
		const user = await prisma.user.findUnique({
			where: {
				email: body.email,
				password: body.password,
			},
		});
		if (!user) {
			c.status(403);
			return c.json({ message: "wrong credentials" });
		}
		const token = await sign({ id: user.id }, c.env.JWT_SECRET);
		return c.json({ message: token });
	} catch (e) {
		return c.json({ message: e });
	}
});