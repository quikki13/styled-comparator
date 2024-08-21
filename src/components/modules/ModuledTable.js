import styles from './ModuledTable.module.css';

import { getHeaders, getDataRows } from './helpers';

export const ModuledTable = ({ data, rows }) => {
  return (
    <table className={styles.table}>
      <thead>{getHeaders(rows)}</thead>
      <tbody>
        {data.map((el, num) => {
          return getDataRows(rows, num, el);
        })}
      </tbody>
    </table>
  );
};
