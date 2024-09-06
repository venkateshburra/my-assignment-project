import { useState } from "react";
import Post from "./Post";
import TabsContent from "./Tabs";
import GallaryPost from ".//Gallary";

function App() {
  const [item, setItem] = useState('About');

  function handleSelect(selectItem) {
    setItem(selectItem);
  }

  return (
    <section className="pt-8 bg-[#363C43] pb-96">
      {/* container */}
      <div className="flex flex-col md:flex-row space-y-12 md:space-y-0 items-center md:items-start md:space-x-4 lg:space-x-10 mx-5 h-screen">
        {/* Item 1 */}
        <div className="py-48 md:py-0 w-[100%] md:w-[40%] lg:w-[100%] h-screen  md:h-[100%] border"></div>

        {/* Item 2 */}
        <div className="flex flex-col space-y-7 w-[100%] h-[80%]">
          {/* sub Item 1 */}
          <div className="bg-[#2B3036] rounded p-4 pl-6 box-shadow: shadow-[5.67px_5.67px_3.78px_0px_rgba(0,0,0,0.4)]">
            <div className="flex justify-between flex-nowrap whitespace-nowrap md:space-x-2 lg:space-x-4 space-x-2 rounded-3xl bg-black text-white p-2">
              <Post isSelected={handleSelect} bgSelect={item === "About"} component="About" />
              <Post isSelected={handleSelect} bgSelect={item === "Experience"} component="Experience" />
              <Post isSelected={handleSelect} bgSelect={item === "Recommended"} component="Recommended" />
            </div>
            <p className="text-[#969696] mt-3 mx-3">{TabsContent[item]}</p>
          </div>
             {/* images */}
             <GallaryPost />
        </div>
      </div>
    </section>
  );
}

export default App;
