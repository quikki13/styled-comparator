export const getHeaders = (rows) => {
  if (rows === 2) {
    return (
      <tr>
        <th key='ferst-header'>User</th>
        <th key='second-header'>Content</th>
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
          <th key={`${id}-header-sass`}>{el}</th>
        ))}
      </tr>
    );
  }
};

export const getDataRows = (rows, num, el) => {
  if (rows === 2) {
    return (
      <tr key={`${num}-sass`}>
        <td key={`${num}-1-sass`}>{el.email}</td>
        <td key={`${num}-2-sass`}>{el.body}</td>
      </tr>
    );
  } else {
    let content = ['email', 'body'];
    const extraContent = new Array(rows - 2).fill('body');
    content = content.concat(extraContent);

    return (
      <tr key={`${num}-sass`}>
        {content.map((name, id) => (
          <td key={`${num}-${id}-sass`}>{el[name]}</td>
        ))}
      </tr>
    );
  }
};
