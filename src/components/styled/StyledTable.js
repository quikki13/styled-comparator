import { Table, THead, TBody } from './styled';

import { getHeaders, getDataRows } from './helpers';

export const StyledTable = ({ data, rows, isTrashed, isOptimized }) => {
  return (
    <Table className='table'>
      <THead>{getHeaders(rows)}</THead>

      <TBody>
        {data.map((el, num) => {
          return getDataRows(rows, num, el, isTrashed, isOptimized);
        })}
      </TBody>
    </Table>
  );
};
