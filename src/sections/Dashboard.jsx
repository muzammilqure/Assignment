import React from "react";
import { logo, setting } from "../assets";

const Dashboard = () => {
  return (
    <>
      <section className="flex flex-col mx-10 shadow-lg rounded-2xl p-2 gap-4 bg-white mt-5">
        <div className="flex justify-around items-center bg-white">
          <img src={logo} alt="Logo" className="h-52 w-80" />
          <img
            src={setting}
            alt="setting img"
            height={40}
            width={40}
            className="absolute top-10 right-14 cursor-pointer hover:scale-105 transition-all"
          />
        </div>

        <div className="flex justify-evenly items-center gap-6 text-start bg-white">
          <div className="font-palanquin text-xl font-semibold bg-white">
            Pramod Badade
            <div className="text-sm text-slate-500 bg-white">
              Branch Manager
            </div>
          </div>
          <div className="text-lg font-semibold mr-12 text-right bg-white">
            20
          </div>
        </div>

        <div className="flex items-center justify-evenly bg-white gap-32">
          <div className="font-montserrat text-lg font-semibold bg-white pl-5">
            111101
          </div>
          <div className="font-montserrat text-slate-500 pr-10 bg-white">
            Wada
          </div>
        </div>
        <div className="flex justify-center gap-5 bg-slate-100 items-center font-semibold rounded-xl ">
          <div>
            30-Dec-2023: <span className="text-lg">0</span>
          </div>
          <div>Dec Total:1</div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
