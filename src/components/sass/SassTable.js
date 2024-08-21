import './styles.scss';

import { getHeaders, getDataRows } from './helpers';

export const SassTable = ({ data, rows }) => {
  return (
    <table className='table-sass'>
      <thead>{getHeaders(rows)}</thead>
      <tbody>
        {data.map((el, num) => {
          return getDataRows(rows, num, el);
        })}
      </tbody>
    </table>
  );
};
