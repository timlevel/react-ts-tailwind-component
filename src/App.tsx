import React from 'react';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 max-w-2xl w-full">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-2">
          Welcome to Our Application
        </h1>
        <p className="text-gray-600 text-center mb-8">
          A beautifully designed component with React and Tailwind CSS
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {[1, 2, 3].map(item => (
            <div
              key={item}
              className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl p-6 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="text-2xl font-bold mb-2">Feature {item}</div>
              <p className="opacity-90">
                This is a sample feature description that explains the value of
                this feature.
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300">
            Get Started
          </button>
          <button className="border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 font-semibold py-3 px-6 rounded-lg transition-colors duration-300">
            Learn More
          </button>
        </div>
      </div>

      <footer className="mt-8 text-center text-gray-600">
        <p>© 2023 React & Tailwind CSS Component</p>
      </footer>
    </div>
  );
};

export default App;
