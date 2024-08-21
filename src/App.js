import { useState, useEffect, Profiler } from 'react';

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

  const [isTrashed, setIsTrashed] = useState(false);
  const [isOptimized, setIsOptimized] = useState(false);

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
    setLoading(true);
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then((res) => res.json())
      .then((responseData) => setData(responseData))
      .finally(() => setLoading(false));
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
    styled: (
      <StyledTable
        data={tableData}
        rows={amountRows}
        isOptimized={isOptimized}
        isTrashed={isTrashed}
      />
    ),
    sass: <SassTable data={tableData} rows={amountRows} />,
    modules: <ModuledTable data={tableData} rows={amountRows} />,
  };

  // https://react.dev/reference/react/Profiler
  // Check performance
  function onRender(id, phase, actualDuration, baseDuration, startTime, commitTime) {
    const title = {
      default: 'CSS ->',
      styled: `STYLED-COMPONENTS ${
        isTrashed ? '(Trashed)' : isOptimized ? '(isOptimized)' : '(Regular)'
      }->`,
      modules: 'CSS MODULES ->',
      sass: 'SASS ->',
    };
    console.log(`${title[curButton]} commited cahnges by react:  ${commitTime - startTime}ms`);
  }

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
          <label htmlFor='comments'>Массив данных:</label>
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
          <label htmlFor='rows'>Количество cстолбцов в таблице:</label>
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

        {curButton === 'styled' ? (
          <>
            <label>
              <input
                type='checkbox'
                disabled={isOptimized}
                onInput={() => {
                  setIsOptimized(false);
                  setIsTrashed(!isTrashed);
                }}
                value={isTrashed}
              />
              <span>Засорим таблицу пустышками</span>
            </label>

            <label>
              <input
                type='checkbox'
                disabled={isTrashed}
                onInput={() => {
                  setIsTrashed(false);
                  setIsOptimized(!isOptimized);
                }}
                value={isOptimized}
              />
              <span>Оптимизируем таблицу</span>
            </label>
          </>
        ) : null}
      </div>
      <div className='stat-block'>
        <span className='stat-item'>{`Массив данных: ${tableData.length} сообщений`}</span>
        <span className='stat-item'>{`Ячеек в таблице: ${
          tableData.length * amountRows
        } ячеек`}</span>
      </div>
      {loading ? (
        <div className='loading'>loading...</div>
      ) : data.length ? (
        <Profiler id='Table' onRender={onRender}>
          {tablesMap[curButton]}
        </Profiler>
      ) : null}
    </div>
  );
}

export default App;
