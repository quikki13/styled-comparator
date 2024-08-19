import './default.css';

export const Default = ({ data }) => {
  return (
    <table class='table'>
      <thead>
        <tr>
          <th>User</th>
          <th>Content</th>
        </tr>
      </thead>
      <tbody>
        {data.map((el, num) => {
          return (
            <tr key={num}>
              <td>{el.email}</td>
              <td>{el.body}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
