import React from 'react'

function Python() {
  return (
    <div>Pytho,under Development still</div>
  )
}

export default Python
// import { useState, useRef } from 'react';
// import { motion } from 'framer-motion';
// import { Canvas } from '@react-three/fiber';
// import { OrbitControls, Text3D, Float } from '@react-three/drei';
// import { FaPython, FaCode, FaTerminal } from 'react-icons/fa';

// const Python = () => {
//   const [activeSection, setActiveSection] = useState(null);
//   const sectionRefs = {
//     whatIsPython: useRef(null),
//     print: useRef(null),
//     variables: useRef(null),
//     input: useRef(null),
//     ifElse: useRef(null),
//     loops: useRef(null),
//     list: useRef(null),
//     dictionary: useRef(null),
//     functions: useRef(null)
//   };

//   const scrollToSection = (ref) => {
//     ref.current?.scrollIntoView({ behavior: 'smooth' });
//   };

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-8">
//       {/* 3D Python Header */}
//       <section className="h-96 mb-16 relative">
//         <Canvas>
//           <ambientLight intensity={0.5} />
//           <pointLight position={[10, 10, 10]} />
//           <Float speed={2} rotationIntensity={0.5}>
//             <Text3D
//               font="/fonts/helvetiker_regular.typeface.json"
//               size={1.5}
//               height={0.2}
//               curveSegments={12}
//               bevelEnabled
//               bevelThickness={0.02}
//               bevelSize={0.02}
//               bevelOffset={0}
//               bevelSegments={5}
//               position={[-3.5, 0, 0]}
//             >
//               Python
//               <meshStandardMaterial color="#3776ab" />
//             </Text3D>
//           </Float>
//           <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
//         </Canvas>
//         <div className="absolute bottom-0 left-0 right-0 text-center">
//           <motion.div
//             initial={{ y: 20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ delay: 0.5 }}
//             className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full"
//           >
//             <FaPython size={24} />
//             <span className="text-xl font-bold">Start Learning</span>
//           </motion.div>
//         </div>
//       </section>

//       {/* Why Learn Python */}
//       <section className="mb-16">
//         <motion.h2 
//           initial={{ x: -20, opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           className="text-3xl font-bold mb-6 flex items-center gap-3"
//         >
//           <FaCode className="text-blue-500" /> Why Learn Python?
//         </motion.h2>
//         <div className="grid md:grid-cols-3 gap-6">
//           {[
//             "Easy to learn syntax",
//             "Versatile (Web, Data, AI, etc.)",
//             "Huge community support"
//           ].map((reason, i) => (
//             <motion.div
//               key={i}
//               initial={{ y: 20, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ delay: i * 0.1 + 0.3 }}
//               className="bg-white p-6 rounded-xl shadow-md border border-gray-100"
//             >
//               <h3 className="font-bold text-lg mb-2">{reason}</h3>
//               <p className="text-gray-600">
//                 Python's {reason.toLowerCase()} makes it ideal for beginners and professionals alike.
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* Table of Contents */}
//       <section className="mb-16">
//         <h2 className="text-2xl font-bold mb-6">Table of Contents</h2>
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//           {[
//             { id: 'whatIsPython', title: 'What is Python?', icon: <FaPython /> },
//             { id: 'print', title: 'Print Statements', icon: <FaTerminal /> },
//             { id: 'variables', title: 'Variables', icon: <FaCode /> },
//             { id: 'input', title: 'User Input', icon: <FaTerminal /> },
//             { id: 'ifElse', title: 'If/Else', icon: <FaCode /> },
//             { id: 'loops', title: 'Loops', icon: <FaCode /> },
//             { id: 'list', title: 'Lists', icon: <FaCode /> },
//             { id: 'dictionary', title: 'Dictionaries', icon: <FaCode /> },
//             { id: 'functions', title: 'Functions', icon: <FaCode /> }
//           ].map((item, i) => (
//             <motion.button
//               key={item.id}
//               whileHover={{ y: -3 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={() => scrollToSection(sectionRefs[item.id])}
//               className={`p-4 rounded-lg flex items-center gap-2 ${
//                 activeSection === item.id 
//                   ? 'bg-blue-600 text-white' 
//                   : 'bg-gray-100 hover:bg-gray-200'
//               }`}
//             >
//               <span className="text-lg">{item.icon}</span>
//               <span>{item.title}</span>
//             </motion.button>
//           ))}
//         </div>
//       </section>

//       {/* Content Sections */}
//       <div className="space-y-20">
//         {/* What is Python */}
//         <section 
//           id="whatIsPython" 
//           ref={sectionRefs.whatIsPython}
//           className="pt-4"
//         >
//           <h2 className="text-2xl font-bold mb-4">What is Python?</h2>
//           <div className="bg-gray-800 text-gray-100 p-6 rounded-lg">
//             <pre className="overflow-x-auto">
//               <code>
// {`# Python is a high-level programming language
// print("Hello, World!")  # This is Python code`}
//               </code>
//             </pre>
//           </div>
//           <p className="mt-4 text-gray-700">
//             Python is an interpreted, object-oriented programming language known for its simple syntax.
//           </p>
//         </section>

//         {/* Print Statements */}
//         <section id="print" ref={sectionRefs.print} className="pt-4">
//           <h2 className="text-2xl font-bold mb-4">Print Statements</h2>
//           <div className="bg-gray-800 text-gray-100 p-6 rounded-lg">
//             <pre className="overflow-x-auto">
//               <code>
// {`print("Hello World")  # Basic print
// print(42)             # Prints numbers
// print("Sum:", 2 + 3)  # Multiple items`}
//               </code>
//             </pre>
//           </div>
//         </section>

//         {/* Continue with other sections... */}
//         <section id="variables" ref={sectionRefs.variables} className="pt-4">
//           {/* Variables content */}
//         </section>
        
//         <section id="input" ref={sectionRefs.input} className="pt-4">
//           {/* Input content */}
//         </section>

//         {/* Add remaining sections similarly */}
//       </div>
//     </div>
//   );
// };

// export default Python;