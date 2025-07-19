
import React, { useState } from 'react';

function NameForm() {
  // 1. Создаем состояние для хранения того, что введено в input.
  //    Начальное значение - пустая строка.
  const [name, setName] = useState('');

  // 2. Эта функция будет вызываться при КАЖДОМ изменении в поле ввода.
  //    React автоматически передает в нее специальный объект 'event'.
  const handleInputChange = (event) => {
    // У этого объекта есть свойство 'target', которое указывает на сам <input>.
    // А у 'target' есть свойство 'value' - это и есть актуальный текст из поля.
    setName(event.target.value);
  };

  return (
    <>
      <h1>Привет, {name || 'Незнакомец'}!</h1>

      <p>Введите ваше имя:</p>

      {/* 3. Связываем <input> с нашим состоянием */}
      <input
        type="text"
        value={name}         // Значение инпута ВСЕГДА равно тому, что в 'name'
        onChange={handleInputChange} // При любом изменении вызываем нашу функцию
      />
    </>
  );
}

function App() {
  return <NameForm />;
}

export default App;
