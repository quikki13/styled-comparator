import { useState, useEffect } from 'react';
import './App.css';

import { Default, StyledTable, SassTable, ModuledTable } from './components';

function App() {
  const [data, setData] = useState([]);
  const [curButton, setCurButton] = useState('default');
  // Добавил небольшой лоадинг, чтобы видеть перерисовку
  const [loading, setLoading] = useState(false);
  // Обновляем таблички с задержкой или без
  const [isDelayed, setIsDelayed] = useState(false);

  const [commentsIndex, setCommentsIndex] = useState(2);
  const [amountRows, setAmountRows] = useState(2);

  const onChange = (key) => {
    if (isDelayed) {
      setLoading(true);
      setTimeout(function () {
        setCurButton(key);
        setLoading(false);
      }, 150);
    } else {
      setCurButton(key);
    }
  };

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then((res) => res.json())
      .then((responseData) => setData(responseData));
  }, []);

  const buttons = [
    { key: 'default', name: 'css', color: 'red' },
    { key: 'styled', name: 'styled-components', color: 'burlywood' },
    { key: 'modules', name: 'css modules', color: 'blue' },
    { key: 'sass', name: 'sass', color: 'yellow' },
  ];

  const tableData = new Array(commentsIndex).fill(data).flat();

  const tablesMap = {
    default: <Default data={tableData} rows={amountRows} />,
    styled: <StyledTable data={tableData} rows={amountRows} />,
    sass: <SassTable data={tableData} rows={amountRows} />,
    modules: <ModuledTable data={tableData} rows={amountRows} />,
  };

  return (
    <div className='App'>
      <div className='buttons-block'>
        {buttons.map((btn) => (
          <button
            key={btn.key}
            onClick={() => onChange(btn.key)}
            className={`btn ${btn.key === curButton ? 'active-btn' : ''} ${`btn-${btn.color}`}`}
          >
            {btn.name}
          </button>
        ))}
      </div>
      <h3>Конструктор данных</h3>
      <div>
        <span className='select-item'>
          <label for='comments'>Массив данных:</label>
          <select
            name='comments'
            id='comments'
            value={commentsIndex}
            onChange={(e) => setCommentsIndex(+e.target.value)}
          >
            <option value='2'>1000</option>
            <option value='6'>3000</option>
            <option value='10'>5000</option>
            <option value='20'>10000</option>
          </select>
        </span>

        <span className='select-item'>
          <label for='rows'>Количество cстолбцов в таблице:</label>
          <select
            name='rows'
            id='rows'
            value={amountRows}
            onChange={(e) => setAmountRows(+e.target.value)}
          >
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
          </select>
        </span>

        <label>
          <input type='checkbox' value={isDelayed} onChange={() => setIsDelayed(!isDelayed)} />
          <span>Обновлять с задержкой</span>
        </label>
      </div>
      <div className='stat-block'>
        <span className='stat-item'>{`Массив данных: ${tableData.length} сообщений`}</span>
        <span className='stat-item'>{`Ячеек в таблице: ${
          tableData.length * amountRows
        } ячеек`}</span>
      </div>
      {loading ? <div className='loading'>loading...</div> : tablesMap[curButton]}
    </div>
  );
}

export default App;
