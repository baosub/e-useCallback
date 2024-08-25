import { useState, useCallback } from 'react';

// Componente de botón que recibe una función de callback
const IncrementButton = ({ onIncrement}) => {
  return <button onClick={onIncrement}>Incrementar</button>;
};

// Componente principal
const Counter = () => {
  // Estado local para mantener el conteo
  const [count, setCount] = useState(0);

  // useCallback memoriza la función de incremento
  const handleIncrement = useCallback(() => {
    // Esta función incrementa el contador en uno
    setCount(prevCount => prevCount + 1);
  }, []); // Dependencias vacías significan que esta función no cambiará a menos que el componente se desmonte y se vuelva a montar

  return (
    <div>
      {/* Muestra el contador */}
      <p>Contador: {count}</p>
      {/* Pasa la función de incremento memorizada al botón */}
      <IncrementButton onIncrement={handleIncrement} />
    </div>
  );
};

export default Counter;
