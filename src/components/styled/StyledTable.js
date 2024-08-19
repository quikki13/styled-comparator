import { Table, Th, Td } from './styled';

export const StyledTable = ({ data }) => {
  return (
    <Table class='table'>
      <thead>
        <tr>
          <Th>User</Th>
          <Th>Content</Th>
        </tr>
      </thead>
      <tbody>
        {data.map((el, num) => {
          return (
            <tr key={num}>
              <Td>{el.email}</Td>
              <Td>{el.body}</Td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};
