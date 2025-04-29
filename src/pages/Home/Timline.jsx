import React from "react";

const journeySteps = [
  {
    title: "Python Fundamentals",
    description: "Master the basics of Python programming",
    link: "#",
  },
  {
    title: "Data Structures",
    description: "Understand core data structures and their implementations",
    link: "#",
  },
  {
    title: "Algorithms",
    description: "Learn essential algorithms and problem-solving techniques",
    link: "#",
  },
  {
    title: "LeetCode Practice",
    description: "Apply your knowledge to coding challenges",
    link: "#",
  },
];

function Timeline() {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-transparent"> {/* Changed from bg-gray-50 to bg-transparent */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center font-dragon " >
          Your Learning {'\u00A0'}
          <span className="text-5xl font-dragon text-indigo-600 transition-all duration-300 hover:text-orange-500 hover:drop-shadow-md">
            Journey
          </span>
        </h2>

        <div className="space-y-8 relative">
          <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-indigo-200/50 transform -translate-x-1/2"></div> {/* Added opacity to line */}

          {journeySteps.map((item, index) => (
            <div key={index} className="relative pl-10 md:pl-0">
              <div className="md:flex md:items-center md:justify-between md:odd:flex-row-reverse">
                <div className="md:w-5/12">
                  <div className="flex items-center">
                    <div className="absolute left-0 md:left-1/2 w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center transform -translate-x-1/2 -ml-4 md:-ml-4 z-10">
                      <span className="text-white font-bold">{index + 1}</span>
                    </div>
                    <div className="md:hidden ml-6 bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-sm"> {/* Added blur for mobile */}
                      <h3 className="text-xl font-bold text-indigo-600">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">{item.description}</p>
                      <a
                        href={item.link}
                        className="text-indigo-600 hover:text-indigo-800 text-sm font-medium mt-2 inline-block"
                      >
                        Explore →
                      </a>
                    </div>
                  </div>
                </div>
                <div className="hidden md:block md:w-5/12 bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"> {/* Added blur */}
                  <h3 className="text-xl font-bold text-indigo-600 font-dragon">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mt-2">{item.description}</p>
                 
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Timeline;