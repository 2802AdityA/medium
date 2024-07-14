export const BlogSkeleton = () => {
    return (
        <div className="animate-pulse">
            <div className="grid lg:grid-cols-12 lg:p-10 m-2 p-4 lg:m-6 gap-8">
                <div className="lg:col-span-9">
                    <div className=" rounded-full h-10 bg-gray-200 w-1/3 mb-8"></div>
                    <div className="rounded-full h-5 bg-gray-200 text-xl w-3/4 mb-5"></div>
                    <div className="rounded-full h-5 bg-gray-200 text-xl w-full mb-5"></div>
                    <div className="rounded-full h-5 bg-gray-200 text-xl w-4/5 mb-5"></div>
                    <div className="rounded-full h-5 bg-gray-200 text-xl w-11/12 mb-5"></div>
                    <div className="rounded-full h-5 bg-gray-200 text-xl w-5/6 mb-5"></div>
                    <div className="rounded-full h-5 bg-gray-200 text-xl w-9/12 mb-5"></div>
                    <div className="rounded-full h-5 bg-gray-200 text-xl w-11/12 mb-5"></div>
                    <div className="rounded-full h-5 bg-gray-200 text-xl w-full mb-5"></div>
                    <div className="rounded-full h-5 bg-gray-200 text-xl w-4/5 mb-5"></div>
                    <div className="rounded-full h-5 bg-gray-200 text-xl w-full mb-5"></div>
                    <div className="rounded-full h-5 bg-gray-200 text-xl w-5/6 mb-5"></div>
                    <div className="rounded-full h-5 bg-gray-200 text-xl w-9/12 mb-5"></div>
                    <div className="rounded-full h-5 bg-gray-200 text-xl w-3/6 mb-5"></div>
                </div>
                <div className="lg:col-span-3">
                    <div className="rounded-full h-5 bg-gray-200 w-1/5 "></div>
                    <div className="inline-flex space-x-4 justify-center items-center my-2">
                        <div
                            className="relative inline-flex items-center justify-center min-w-7 max-w-7 min-h-7 max-h-7 overflow-hidden bg-gray-200 rounded-full ">
                        </div>
                        <div className="flex h-4 bg-gray-200 rounded-full w-2/5 justify-center items-center gap-2 font-light"> </div>
                        <div className="text-2xl rounded-full h-5 bg-gray-200"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}