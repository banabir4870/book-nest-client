import { cinzel } from "@/app/fonts";

const Loading = () => {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#fffaf5]">

      <div className="flex flex-col items-center gap-5">


        {/* Book Loader */}
        <div className="relative">

          <div className="w-16 h-20 border-4 border-[#3b1a08] rounded-r-lg rounded-l-sm animate-pulse">
          </div>


          <div className="absolute left-1/2 top-0 h-full w-[2px] bg-[#3b1a08] -translate-x-1/2">
          </div>


        </div>



        {/* Text */}

        <h2
          className={`
          ${cinzel.className}
          text-2xl
          font-bold
          text-[#3b1a08]
          animate-pulse
          `}
        >
          BookNest
        </h2>


        <p className="text-gray-500">
          Opening your reading world...
        </p>


      </div>


    </main>
  );
};


export default Loading;