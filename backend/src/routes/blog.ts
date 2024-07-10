import { createBlogInput, updateBlogInput } from "@ad1tya.28/common-medium";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { verify } from "hono/jwt";

export const blogRouter = new Hono<{
	Bindings: {
		DATABASE_URL: string;
		JWT_SECRET: string;
	};
	Variables: {
		userId: string;
	};
}>();

blogRouter.use("/*", async (c, next) => {
	const authToken: string = c.req.header("authorization") || "";
	const user = await verify(authToken, c.env.JWT_SECRET);
	try {
		if (user) {
			c.set("userId", user.id as string);
			await next();
		} else {
			c.status(403);
			return c.json({ message: "unauthorized" });
		}
	} catch (e) {
		c.status(403);
		return c.json({ message: "unauthorized" });
	}
});

blogRouter.post("/", async (c) => {
	const body = await c.req.json();
	const userId = c.get("userId");
	const { success } = createBlogInput.safeParse(body);

	if (!success) {
		c.status(411);
		return c.json({
			message: "input not correct",
		});
	}

	const prisma = new PrismaClient({
		datasourceUrl: c.env.DATABASE_URL,
	}).$extends(withAccelerate());

	const blog = await prisma.post.create({
		data: {
			title: body.title,
			content: body.content,
			authorId: userId,
		},
	});

	return c.json({
		id: blog.id,
	});
});

blogRouter.put("/", async (c) => {
	const body = await c.req.json();

	const { success } = updateBlogInput.safeParse(body);

	if (!success) {
		c.status(411);
		return c.json({
			message: "input not correct",
		});
	}

	const prisma = new PrismaClient({
		datasourceUrl: c.env.DATABASE_URL,
	}).$extends(withAccelerate());
	const blog = await prisma.post.update({
		where: {
			id: body.id,
		},
		data: {
			title: body.title,
			content: body.content,
		},
	});

	return c.json({
		id: blog.id,
	});
});

blogRouter.get("/bulk", async (c) => {
	const prisma = new PrismaClient({
		datasourceUrl: c.env.DATABASE_URL,
	}).$extends(withAccelerate());

	const blogs = await prisma.post.findMany({
		select: {
			content: true,
			title: true,
			id: true,
			author: {
				select: {
					name: true,
				},
			},
		},
	});

	return c.json({
		blogs,
	});
});

blogRouter.get("/id/:id", async (c) => {
	const id = c.req.param("id");

	const prisma = new PrismaClient({
		datasourceUrl: c.env.DATABASE_URL,
	}).$extends(withAccelerate());

	const blog = await prisma.post.findFirst({
		where: {
			id: id,
		},
	});

	if (!blog) {
		return c.json({ message: "no blog found" });
	}
	return c.json(blog);
});
