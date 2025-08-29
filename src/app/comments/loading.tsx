export default function Loading() {
  return (
    <div className="container mx-auto px-6 py-10">
      <h2 className="text-3xl text-center mt-[20px] mb-[40px] text-white">
        Loading content...
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[18px]">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="bg-gray-800 w-[300px] h-[440px] rounded-2xl shadow-md p-4 animate-pulse"
          >
            <div className="w-full h-[260px] bg-gray-700 rounded-[12px] mb-4"></div>
            <div className="h-5 bg-gray-700 rounded mb-2 w-3/4"></div>
            <div className="h-4 bg-gray-700 rounded mb-2 w-1/2"></div>
            <div className="h-4 bg-gray-700 rounded w-1/3"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
