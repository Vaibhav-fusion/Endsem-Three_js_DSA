export default function Navbar({ setPage }) {
    return (
      <nav className="bg-white/50 backdrop-blur-md border-b border-gray-100 p-4 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center space-x-3">
          <button
            onClick={() => setPage("home")}
            className="text-2xl font-bold tracking-tight transition-colors group transform hover:scale-105 mx-10"
            style={{ fontFamily: "logofont" }}
          >
            <span className="text-gray-900 group-hover:text-indigo-700 transition-colors duration-300">Dsa</span>
            <span className="text-gray-800 group-hover:text-orange-400 transition-colors duration-300">gon</span>
          </button>
        </div>
  
        <div className="hidden md:flex items-center space-x-8">
          <button onClick={() => setPage("dsa")} className="text-gray-600 hover:text-indigo-600 font-medium transition-colors text-sm uppercase tracking-wider">
            Data Structures
          </button>
          <button onClick={() => setPage("python")} className="text-gray-600 hover:text-indigo-600 font-medium transition-colors text-sm uppercase tracking-wider">
            Python
          </button>
          <button onClick={() => setPage("resources")} className="text-gray-600 hover:text-indigo-600 font-medium transition-colors text-sm uppercase tracking-wider">
            Resources
          </button>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors shadow-sm">
            Leetcode
          </button>
        </div>
      </nav>
    );
  }
  