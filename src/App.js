import { useState, useEffect } from 'react';
import './App.css';

import { Default, StyledTable } from './components';

function App() {
  const [data, setData] = useState([]);
  const [curButton, setCurButton] = useState('default');
  // Добавил небольшой лоадинг, чтобы видеть перерисовку
  const [loading, setLoading] = useState(false);

  const onChange = (key) => {
    setLoading(true);
    setTimeout(function () {
      setCurButton(key);
      setLoading(false);
    }, 150);
  };

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then((res) => res.json())
      .then((responseData) => setData(responseData));
  }, []);

  const buttons = [
    { key: 'default', name: 'css' },
    { key: 'styled', name: 'styled-components' },
    { key: 'modules', name: 'css modules' },
    { key: 'sass', name: 'sass' },
    { key: 'less', name: 'less' },
  ];

  // 1500 comments
  const tableData = [...data, ...data, ...data];

  const tablesMap = {
    default: <Default data={tableData} />,
    styled: <StyledTable data={tableData} />,
  };

  return (
    <div className='App'>
      <div className='buttons-block'>
        {buttons.map((btn) => (
          <button
            key={btn.key}
            onClick={() => onChange(btn.key)}
            className={`btn ${btn.key === curButton ? 'active-btn' : ''}`}
          >
            {btn.name}
          </button>
        ))}
      </div>
      {loading ? 'loading...' : tablesMap[curButton]}
    </div>
  );
}

export default App;
