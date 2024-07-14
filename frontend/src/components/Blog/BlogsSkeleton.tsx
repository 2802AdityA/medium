export const BlogsSkeleton = () => {
    return (
        <div className="flex justify-center mt-6 animate-pulse">
            <div className="flex flex-col md:w-2/5">
                <div className="inline-flex gap-2">
                    <div
                        className="relative inline-flex items-center justify-center min-w-7 max-w-7 min-h-7 max-h-7 overflow-hidden bg-gray-200 rounded-full ">
                    </div>
                    <div className="flex h-4 bg-gray-200 rounded-full w-2/5 justify-center items-center gap-2 font-light"> </div>
                </div>
                <div className="h-4 bg-gray-200 rounded-full w-1/4 font-semibold text-xl mt-4"></div>
                <div className="h-4 bg-gray-200 rounded-full w-2/3 mt-1 line-clamp-2 font-light"></div>
                <div className="h-4 bg-gray-200 rounded-full w-1/2 mt-1 line-clamp-2 font-light"></div>
                <div className="h-4 bg-gray-200 rounded-full mt-1 line-clamp-2 font-light"></div>
                <div className="h-4 bg-gray-200 rounded-full w-1/4 mt-6 text-sm text-slate-500"></div>
                <div className="mt-10 h-0.5 bg-slate-300"></div>

            </div>
        </div>
    )


}