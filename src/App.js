
import React, { useState } from 'react';

function NameForm() {
  const [name, setName] = useState('');
  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  return (
    <>
      <h1>Привет, {name || 'Незнакомец'}!</h1>

      <p>Введите ваше имя:</p>
      <input
        type="text"
        value={name}         
        onChange={handleInputChange} 
      />
    </>
  );
}

function App() {
  return <NameForm />;
}

export default App;
