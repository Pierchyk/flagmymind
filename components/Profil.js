import React from "react";

function Profil() {
  return (
    <div className="h-screen bg-gradient-to-br from-pink-50 to-indigo-100 grid place-items-center">
      <div className="w-6/12 mx-auto rounded border">
        <div className="bg-white p-10 shadow-sm">
          <h1 className="text-lg font-medium text-gray-800">VOS SCORES</h1>
          <div className="h-1 w-full mx-auto border-b my-5"></div>
          <div className="transition hover:bg-indigo-50">
            {/* DIV EUROPE *****************************************************************************/}
            <div className="accordion-header cursor-pointer transition flex space-x-5 px-5 items-center h-16">
              <i className="fas fa-plus"></i>
              <h3>EUROPE</h3>
            </div>

            <div className="accordion-content px-5 pt-0 overflow-hidden max-h-0">
              <p className="leading-6 font-light pl-9 text-justify">Temps :</p>
              <button className="rounded-full bg-indigo-600 text-white font-medium font-lg px-6 py-2 my-5 ml-9">
                Learn more
              </button>
            </div>
          </div>
          {/* ****************************************************************************************** */}
          {/* DIV ASIE********************************************************************************** */}
          <div className="transition hover:bg-indigo-50">
            <div className="accordion-header cursor-pointer transition flex space-x-5 px-5 items-center h-16">
              <i className="fas fa-plus"></i>
              <h3>ASIE</h3>
            </div>

            <div className="accordion-content px-5 pt-0 overflow-hidden max-h-0">
              <p className="leading-6 font-light pl-9 text-justify">Temps:</p>
              <button className="rounded-full bg-indigo-600 text-white font-medium font-lg px-6 py-2 my-5 ml-9">
                Learn more
              </button>
            </div>
          </div>
          {/* ***************************************************************************************** */}
          {/* ***************************************************************************************** */}
          <div className="transition hover:bg-indigo-50">
            <div className="accordion-header cursor-pointer transition flex space-x-5 px-5 items-center h-16">
              <i className="fas fa-plus"></i>
              <h3>AMERIQUE DU NORD</h3>
            </div>

            <div className="accordion-content px-5 pt-0 overflow-hidden max-h-0">
              <p className="leading-6 font-light pl-9 text-justify">Temps:</p>
              <button className="rounded-full bg-indigo-600 text-white font-medium font-lg px-6 py-2 my-5 ml-9">
                Learn more
              </button>
            </div>
          </div>
          {/* ******************************************************************************************** */}

          <div className="transition hover:bg-indigo-50">
            <div className="accordion-header cursor-pointer transition flex space-x-5 px-5 items-center h-16">
              <i className="fas fa-plus"></i>
              <h3>WORLD</h3>
            </div>

            <div className="accordion-content px-5 pt-0 overflow-hidden max-h-0">
              <p className="leading-6 font-light pl-9 text-justify">Temps:</p>
              <button className="rounded-full bg-indigo-600 text-white font-medium font-lg px-6 py-2 my-5 ml-9">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profil;
