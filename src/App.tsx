import bg from "./assets/pattern-background-desktop.svg";
import hero from "./assets/illustration-hero.svg";
import bgmobile from "./assets/pattern-background-mobile.svg";
import icon from "./assets/icon-music.svg";

function App() {
  return (
    <div className="flex  justify-center items-center h-screen bg-[#e0e8ff]">
      <div className="absolute h-screen">
        <img src={bg} alt="" className="hidden lg:block" />
        <img src={bgmobile} alt="" className="lg:hidden" />
      </div>
      <div className="relative w-[327px] h-[566px] lg:w-[450px] lg:h-[696px] bg-white rounded-3xl drop-shadow-[0px_35px_35px_rgba(56,42,225,0.05)]">
        <img src={hero} alt="" className="rounded-t-3xl" />
        <div className="p-[28px] lg:p-[44px]">
          <h1 className="text-black text-[22px] lg:text-[28px] flex items-center justify-center font-extrabold">
            Order Summary
          </h1>
          <p className="text-gray-500 justify-center text-[15px] lg:text-[16px] text-center pt-[14px] leading-[25px] tracking-[0.35px]">
            You can now listen to millions of songs, audiobooks, and podcasts on
            any device anywhere you like!
          </p>

          <div className="flex justify-between p-3 items-center h-[80px] w-[275px] lg:h-[96px] lg:w-[357px] bg-[#f8f9fe] rounded-xl mt-6">
            <img src={icon} alt="" className="object-scale-down lg:ml-4" />

            <div className="flex flex-col justify-start mr-[24px] lg:pr-[48px]">
              <h1 className="text-black text-[15px] lg:text-[17px] font-extrabold tracking-[0.01px]">
                Annual Plan
              </h1>
              <p className="text-gray-500 text-[14px] lg:text-[17px] ">
                $59.99/year
              </p>
            </div>
            <p className="text-black underline text-sm lg:mr-2 hover:cursor-pointer hover:text-[#766cf1]">Change</p>
          </div>
          <button className="flex justify-center items-center rounded-xl bg-[#382ae1] h-[50px] w-[275px] lg:w-[360px] mt-[25px] lg:mt-[32px] font-extrabold drop-shadow-[0_15px_15px_rgba(56,42,225,0.35)] tracking-[0.001px] hover:bg-[#766cf1]">
            Proceed to Payment
          </button>
          <p className="text-gray-500 text-[15px] text-center pt-[24px] lg:pt-[32px] font-bold hover:text-gray-800 cursor-pointer">
            Cancel Order
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
