import { Th, Td, Tr } from './styled';

export const getHeaders = (rows) => {
  if (rows === 2) {
    return (
      <Tr>
        <Th>User</Th>
        <Th>Content</Th>
      </Tr>
    );
  } else {
    let headers = ['User', 'Content'];
    const extraHeaders = new Array(rows - 2)
      .fill('Content')
      .map((el, index) => `${el}_${index + 1}`);
    headers = headers.concat(extraHeaders);

    return (
      <Tr>
        {headers.map((el) => (
          <Th>{el}</Th>
        ))}
      </Tr>
    );
  }
};

export const getDataRows = (rows, num, el) => {
  if (rows === 2) {
    return (
      <Tr key={num}>
        <Td>{el.email}</Td>
        <Td>{el.body}</Td>
      </Tr>
    );
  } else {
    let content = ['email', 'body'];
    const extraContent = new Array(rows - 2).fill('body');
    content = content.concat(extraContent);

    return (
      <Tr key={num}>
        {content.map((name) => (
          <Td>{el[name]}</Td>
        ))}
      </Tr>
    );
  }
};
