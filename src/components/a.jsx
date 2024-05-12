import React, { useState, useEffect } from 'react';

function App() {
  // State to track the current mode
  const [mode, setMode] = useState(() => localStorage.getItem('mode') || 'light');

  // Function to toggle between light and dark mode
  const toggleMode = () => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
    localStorage.setItem('mode', newMode);
  };

//   // Apply the stored mode when the component mounts
//   useEffect(() => {
//     const storedMode = localStorage.getItem('mode');
//     if (storedMode) {
//       setMode(storedMode);
//     }
//   }, []);

  return (
    <div className={mode === 'light' ? 'light-mode' : 'dark-mode'}>
      <button onClick={toggleMode}>Toggle Mode</button>
      <h1>{mode === 'light' ? 'Light Mode' : 'Dark Mode'}</h1>
      {/* Rest of your app */}
    </div>
  );
}

export default App;