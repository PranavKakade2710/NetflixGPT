const Shimmer = ({ count = 15 }) => {
  return (
    <div className="flex flex-wrap gap-5 justify-center m-5">
      {Array(count)
        .fill("")
        .map((_, index) => (
          <div
            key={index}
            className="shimmer-card w-[220px] h-[300px] rounded-lg shadow-md overflow-hidden relative bg-gradient-to-r from-white-200 via-white-300 to-white-200 bg-[length:200%_100%] animate-shimmer"
          >
            {/* Top shimmer detail */}
            <div className="h-[80px] bg-gray-200 rounded-t-lg mb-2"></div>
            {/* Title shimmer detail */}
            <div className="h-[16px] w-[70%] bg-gray-200 rounded mx-4 mb-2"></div>
            {/* Additional shimmer detail */}
            <div className="h-[16px] w-[50%] bg-gray-200 rounded mx-4"></div>
          </div>
        ))}
    </div>
  );
};
export default Shimmer;