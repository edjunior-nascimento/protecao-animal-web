import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <header className="text-center">
        <div className="mb-8">
          {/* Logo placeholder */}
          <div className="w-20 h-20 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
            <span className="text-white font-bold text-2xl">🐾</span>
          </div>
        </div>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Proteção Animal Web
        </h1>
        <p className="text-lg text-gray-600 mb-8 max-w-md">
          Edite o arquivo <code className="bg-gray-200 px-2 py-1 rounded">src/App.tsx</code> e salve para recarregar.
        </p>
        <a
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aprenda React
        </a>
      </header>
    </div>
  );
}

export default App;
