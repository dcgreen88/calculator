import calculatorKeys from './keyValues';
import Key from './components/Key';
import Display from './components/Display';
import { useState, useEffect, useCallback } from 'react';
import { evaluate } from 'mathjs';

function App() {
  const [input, setInput] = useState('0');
  const [history, setHistory] = useState('');

  const registerKey = useCallback(
    (key) => {
      const validKey = calculatorKeys.some((k) => k.value === key);
      if (!validKey) {
        return;
      }

      if (key === 'AC') {
        setInput('0');
        setHistory([]);
      } else if (key === '=') {
        try {
          const result = evaluate(history);
          setInput(result);
          setHistory(`${history}=${result}`);
        } catch (error) {
          setInput('Error'); // Handle invalid expressions
          setHistory('');
        }
      } else {
        setHistory((prevHistory) => prevHistory + key);
        setInput(key);
      }
    },
    [history]
  );

  useEffect(() => {
    function handleKeyPress(event) {
      registerKey(event.key);
    }

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [registerKey]);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div
        id="calculator-case"
        className="border border-black p-[2px] bg-black"
      >
        <Display history={history} input={input} />
        <div id="calculator-keypad" className="grid grid-cols-4 grid-rows-5">
          {calculatorKeys.map((key) => (
            <Key
              key={key.id}
              value={key.value}
              type={key.type}
              id={key.id}
              onClick={registerKey}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
