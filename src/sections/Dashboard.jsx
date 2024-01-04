import React from "react";
import { logo, setting } from "../assets";

const Dashboard = () => {
  return (
    <>
      <section className="flex flex-col m-10 shadow-lg rounded-lg p-2 gap-4">
        <div className="flex justify-around items-center ">
          <img src={logo} alt="Logo" className="h-52 w-80" />
          <img
            src={setting}
            alt="setting img"
            height={40}
            width={40}
            className="absolute top-20 right-20 cursor-pointer hover:scale-105 transition-all"
          />
        </div>
        <div className="flex justify-evenly items-center">
          <div className="font-palanquin text-xl font-semibold">
            Pramod Badade
            <div className="text-sm pl-1 text-slate-500">Branch Manager</div>
          </div>
          <div className="text-lg font-semibold">20</div>
        </div>

        <div className="flex items-center justify-evenly">
          <div className="font-montserrat text-lg font-semibold">111101</div>
          <div className="font-montserrat text-slate-500">Wada</div>
        </div>
        <div className="flex justify-center gap-5 bg-slate-100 items-center font-semibold ">
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
