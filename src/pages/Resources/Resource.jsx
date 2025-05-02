import { motion } from 'framer-motion';
import { 
  SiReact, 
  SiVite, 
  SiTailwindcss, 
  SiLeetcode, 
  SiGeeksforgeeks,
  SiThreedotjs,
  SiNpm
} from 'react-icons/si';
import { FaCode, FaTools, FaGlobe, FaHardHat } from 'react-icons/fa';

const Resources = () => {
  const libraries = [
    {
      name: "React",
      icon: <SiReact className="text-blue-500" size={24} />,
      description: "JavaScript library for building user interfaces",
      link: "https://react.dev"
    },
    {
      name: "Vite",
      icon: <SiVite className="text-purple-500" size={24} />,
      description: "Next generation frontend tooling",
      link: "https://vitejs.dev"
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-cyan-500" size={24} />,
      description: "Utility-first CSS framework",
      link: "https://tailwindcss.com"
    },
    {
      name: "Framer Motion",
      icon: <FaCode className="text-pink-500" size={24} />,
      description: "Production-ready motion library for React",
      link: "https://www.framer.com/motion/"
    },
    {
      name: "React Three Fiber",
      icon: <SiThreedotjs className="text-gray-800" size={24} />,
      description: "React renderer for Three.js",
      link: "https://docs.pmnd.rs/react-three-fiber"
    },
    {
      name: "Hero Icons",
      icon: <FaTools className="text-indigo-500" size={24} />,
      description: "Beautiful hand-crafted SVG icons",
      link: "https://heroicons.com"
    }
  ];

  const websites = [
    {
      name: "LeetCode",
      icon: <SiLeetcode className="text-orange-500" size={24} />,
      description: "Platform for coding interview preparation",
      link: "https://leetcode.com"
    },
    {
      name: "GeeksforGeeks",
      icon: <SiGeeksforgeeks className="text-green-600" size={24} />,
      description: "Computer science portal for geeks",
      link: "https://www.geeksforgeeks.org"
    },
    {
      name: "npm",
      icon: <SiNpm className="text-red-500" size={24} />,
      description: "Package manager for JavaScript",
      link: "https://www.npmjs.com"
    },
    {
      name: "React Icons",
      icon: <SiReact className="text-blue-500" size={24} />,
      description: "Popular icons for React projects",
      link: "https://react-icons.github.io/react-icons"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-indigo-600 mb-4">Developer Resources</h1>
        <p className="text-lg font-dragon">
          Tools, libraries, and websites that power this project and can help you in your coding journey
        </p>
      </motion.div>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mb-16"
      >
        <div className="flex items-center mb-6">
          <FaTools className="text-indigo-500 mr-2" size={20} />
          <h2 className="text-2xl font-semibold text-gray-800">Technologies Used</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {libraries.map((lib, index) => (
            <motion.div
              key={lib.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="mr-3">
                  {lib.icon}
                </div>
                <h3 className="text-xl font-medium text-gray-800">{lib.name}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{lib.description}</p>
              <a
                href={lib.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 dark:text-indigo-400 hover:underline text-sm font-medium"
              >
                Visit Website →
              </a>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mb-16"
      >
        <div className="flex items-center mb-6">
          <FaGlobe className="text-indigo-500 mr-2" size={20} />
          <h2 className="text-2xl font-semibold text-gray-800 font-dragon">Helpful Websites</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {websites.map((site, index) => (
            <motion.div
              key={site.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index + 0.4 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="mr-3">
                  {site.icon}
                </div>
                <h3 className="text-xl font-medium text-gray-800 dark:text-white">{site.name}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{site.description}</p>
              <a
                href={site.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 dark:text-indigo-400 hover:underline text-sm font-medium"
              >
                Visit Website →
              </a>
            </motion.div>
          ))}
        </div>
      </motion.section>

    
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="bg-indigo-50 dark:bg-indigo-900/30 rounded-xl p-8 border border-indigo-200 dark:border-indigo-800"
      >
        <div className="flex items-center mb-4">
          <FaHardHat className="text-indigo-600 dark:text-indigo-400 mr-2" size={20} />
          <h2 className="text-2xl font-semibold text-indigo-700 dark:text-indigo-300">Development Status</h2>
        </div>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          This website is currently under active development. We're continuously adding new features, improving existing ones, and fixing bugs.
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          Built with React, Vite, and Tailwind CSS, this project showcases modern web development practices. Check back soon for updates!
        </p>
      </motion.section>
    </div>
  );
};

export default Resources;