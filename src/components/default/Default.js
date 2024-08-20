import './default.css';

import { getHeaders, getDataRows } from './helpers';

export const Default = ({ data, rows }) => {
  return (
    <table class='table'>
      <thead>{getHeaders(rows)}</thead>
      <tbody>
        {data.map((el, num) => {
          return getDataRows(rows, num, el);
        })}
      </tbody>
    </table>
  );
};
