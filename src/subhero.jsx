import React from "react";

function SubHero() {
  return (
    <div className="flex flex-col items-center justify-center text-black mt-20 text-8xl font-bold max-w-7xl mb-20 mx-auto">
      <img src="src/assets/apple-logo.svg" alt="Logo" className="ml-5 flex justify-center w-12 h-16"/> 
      <p>All Of Your Streams </p>
      <p className="text-6xl mt-5">
        In{" "}
        <span className="bg-gradient-to-r from-red-600 to-purple-600 text-transparent bg-clip-text">
          One
        </span>{" "}
        Place
      </p>
      <button className="bg-black text-white font-normal text-sm mt-5 rounded-full p-2 hover:bg-slate-500">Try Apple One Free*</button>
      <h1 className="text-sm font-bold mt-5 p-5 ml-3">
      Apple One bundles up to six Apple subscriptions for one lower monthly
      price, including up to 2TB of iCloud+ storage. <br className="ml-3"/>And with the Family plan
      or Premier plan, you can invite up to five other people to join — with
      private access on all of their devices. 
      </h1>
  
      <div className="bg-white/5 mt-5 rounded-lg p-3 text-center overflow-hidden">
        <div className="grid grid-cols-8 gap-4 animate-moveLeft">
          {/* Duplicate images to seamlessly loop */}
          <div className="w-full h-24 rounded-lg overflow-hidden group hover:border-blue-300 hover:border-4">
            <img
              src="/src/assets/tedLasso.jpg"
              alt="Ted Lasso"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full h-24 rounded-lg overflow-hidden group hover:border-blue-300 hover:border-4 ">
            <img
              src="/src/assets/blonde.jpg"
              alt="Blonde"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full h-24 rounded-lg overflow-hidden group  hover:border-blue-300 hover:border-4">
            <img
              src="/src/assets/jre.jpg"
              alt="Nightcap"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full h-24 rounded-lg overflow-hidden group  hover:border-blue-300 hover:border-4">
            <img
              src="/src/assets/irishmen.webp"
              alt="Irishmen"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full h-24 rounded-lg overflow-hidden group  hover:border-blue-300 hover:border-4">
          <img src="/src/assets/yves.jpg" alt="Ted Lasso" title="source: imgur.com" />

          </div>
          <div className="w-full h-24 rounded-lg overflow-hidden group  hover:border-blue-300 hover:border-4">
            <img
              src="/src/assets/severance.jpg"
              alt="Blonde"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full h-24 rounded-lg overflow-hidden group  hover:border-blue-300 hover:border-4">
            <img
              src="/src/assets/billie.webp"
              alt="Nightcap"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full h-24 rounded-lg overflow-hidden group  hover:border-blue-300 hover:border-4">
            <img
              src="/src/assets/kenny.jpg"
              alt="Irishmen"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Duplicate images to seamlessly loop */}
        </div>
      </div>
    </div>
  );
}

export default SubHero;
