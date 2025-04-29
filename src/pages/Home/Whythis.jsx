import React from "react";

function Whythis() {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 shadow-xl font-dragon text-xl" >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl  font-bold text-gray-900 mb-8">
          Why even{" "}
          <span className="text-indigo-600 hover:text-orange-600 transition-colors duration-300 cursor-pointer text-3xl">
            DSAGON
          </span>
          <br />
          <span className="text-orange-500 text-6xl font-dragon hover:text-purple-600 transition-colors duration-500 hover:scale-105 inline-block">
            Matter?
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-xl bg-indigo-50 hover:bg-indigo-100 transition-all duration-300 hover:-translate-y-2 shadow-lg hover:shadow-xl group">
            <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:bg-white group-hover:scale-110 transition-all duration-300">
              <img
                src="/svgs/creative.svg"
                className="w-9 h-9 group-hover:scale-110 transition-transform duration-300"
                alt="Visual Learning"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 font-dragon group-hover:text-indigo-700 transition-colors duration-300">
              Visual Learning
            </h3>
            <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
              Concepts explained through interactive 3D visualizations.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-indigo-50 hover:bg-indigo-100 transition-all duration-300 hover:-translate-y-2 shadow-lg hover:shadow-xl group">
            <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:bg-white group-hover:scale-110 transition-all duration-300">
              <img
                src="/svgs/stuctutue.svg"
                className="w-9 h-9 group-hover:scale-110 transition-transform duration-300"
                alt="Structured Path"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 font-dragon group-hover:text-indigo-700 transition-colors duration-300">
              Structured Path
            </h3>
            <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
              Curated roadmap from basics to advanced topics.
            </p>
          </div>

          <div className="p-6  rounded-xl bg-indigo-50 hover:bg-indigo-100 transition-all duration-300 hover:-translate-y-2 shadow-lg hover:shadow-xl group">
            <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:bg-white group-hover:scale-110 transition-all duration-300">
              <img
                src="/svgs/ques.svg"
                className="w-9 h-9 group-hover:scale-110 transition-transform duration-300"
                alt="Curated Questions"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 font-dragon group-hover:text-indigo-700 transition-colors duration-300">
              Curated Questions
            </h3>
            <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
              Selected well organized leetcode questions!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Whythis;
