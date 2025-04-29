import React from 'react'

function Hero({ setPage }) {
  return (
    <section className=" px-6 md:px-12 lg:px-24 flex flex-col justify-center items-center mt-5">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight my-5 group">
            Master Coding with <br />
            <span className="text-indigo-600 group-hover:text-orange-400 transition-colors font-dragon hover:scale-105 my-10">
              DSAGON
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            The modern way to learn algorithms, data structures, and Python
            programming.
          </p>
          <div className="flex justify-center space-x-4 pt-4">
            <button
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg text-sm font-medium transition-colors shadow-lg hover:shadow-xl"
              onClick={() => {
                setPage("python");
              }}
            >
              Start Python!
            </button>
            <button
              className="border border-gray-300 hover:border-indigo-300 text-gray-700 hover:text-indigo-600 px-6 py-3 rounded-lg text-sm font-medium transition-colors shadow-sm hover:shadow-md"
              onClick={() => {
                setPage("resources");
              }}
            >
              Explore Resources
            </button>
          </div>
        </div>
      </section>
  )
}

export default Hero