export const getHeaders = (rows) => {
  if (rows === 2) {
    return (
      <tr>
        <th key='user-header-modules'>User</th>
        <th key='content-header-modules'>Content</th>
      </tr>
    );
  } else {
    let headers = ['User', 'Content'];
    const extraHeaders = new Array(rows - 2)
      .fill('Content')
      .map((el, index) => `${el}_${index + 1}`);
    headers = headers.concat(extraHeaders);

    return (
      <tr>
        {headers.map((el, id) => (
          <th key={`${id}-header-modules`}>{el}</th>
        ))}
      </tr>
    );
  }
};

export const getDataRows = (rows, num, el) => {
  if (rows === 2) {
    return (
      <tr key={`${num}-modules`}>
        <td key={`${num}-1-modules`}>{el.email}</td>
        <td key={`${num}-2-modules`}>{el.body}</td>
      </tr>
    );
  } else {
    let content = ['email', 'body'];
    const extraContent = new Array(rows - 2).fill('body');
    content = content.concat(extraContent);

    return (
      <tr key={`${num}-modules`}>
        {content.map((name, id) => (
          <td key={`${num}-${id}`}>{el[name]}</td>
        ))}
      </tr>
    );
  }
};
