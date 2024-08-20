import styles from './ModuledTable.module.css';

export const ModuledTable = ({ data }) => {
  return (
    <table class={styles.table}>
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
