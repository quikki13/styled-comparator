import { memo } from 'react';
import './default.css';

import { getHeaders, getDataRows } from './helpers';

export const Default = memo(({ data, rows }) => {
  return (
    <table className='table'>
      <thead>{getHeaders(rows)}</thead>
      <tbody>
        {data.map((el, num) => {
          return getDataRows(rows, num, el);
        })}
      </tbody>
    </table>
  );
});
