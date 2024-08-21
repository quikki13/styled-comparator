import { Table, THead, TBody } from './styled';

import { getHeaders, getDataRows } from './helpers';

export const StyledTable = ({ data, rows }) => {
  return (
    <Table className='table'>
      <THead>{getHeaders(rows)}</THead>

      <TBody>
        {data.map((el, num) => {
          return getDataRows(rows, num, el);
        })}
      </TBody>
    </Table>
  );
};
