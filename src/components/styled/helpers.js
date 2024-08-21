import { Th, Td, TdGrayed, TdOpt, Tr, Empty } from './styled';

const isEven = (num) => num % 2 === 0;

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
          <Th key={`${el}-styled`}>{el}</Th>
        ))}
      </Tr>
    );
  }
};

export const getDataRows = (rows, num, el, isTrashed, isOptimized) => {
  const template = (
    <Tr key={`${num}-styled-regular`}>
      {isEven(num) ? (
        <Td key={`${num}-1-styled-regular`}>{el.email}</Td>
      ) : (
        <TdGrayed key={`${num}-1-styled-regular`}>{el.email}</TdGrayed>
      )}
      {isEven(num) ? (
        <Td key={`${num}-2-styled-regular`}>{el.body}</Td>
      ) : (
        <TdGrayed key={`${num}-2-styled-regular`}>{el.body}</TdGrayed>
      )}
    </Tr>
  );

  const optimizedTemplate = (
    <Tr key={`${num}-styled-opt`}>
      <TdOpt key={`${num}-1-styled-opt`} isGrayed={isEven(num)}>
        {el.email}
      </TdOpt>
      <TdOpt key={`${num}-2-styled-opt`} isGrayed={isEven(num)}>
        {el.body}
      </TdOpt>
    </Tr>
  );

  const trashedTemplate = (
    <Tr key={`${num}-styled-trashed`}>
      {isEven(num) ? (
        <Td key={`${num}-1-styled-trashed`}>
          <Empty>{el.email}</Empty>
        </Td>
      ) : (
        <TdGrayed key={`${num}-1-styled-trashed`}>
          <Empty>{el.email}</Empty>
        </TdGrayed>
      )}

      {isEven(num) ? (
        <Td key={`${num}-2-styled-trashed`}>
          <Empty>{el.body}</Empty>
        </Td>
      ) : (
        <TdGrayed key={`${num}-2-styled-trashed`}>
          <Empty>{el.body}</Empty>
        </TdGrayed>
      )}
    </Tr>
  );

  const getExtendedTemplate = (content, isTrashed, isOptimized) =>
    isTrashed ? (
      <Tr key={`${num}-styled-trashed-ext`}>
        {content.map((name, id) =>
          isEven(num) ? (
            <Td key={`${num}-${id}-styled-trashed-ext`}>
              <Empty>{el[name]}</Empty>
            </Td>
          ) : (
            <TdGrayed key={`${num}-${id}-styled-trashed-ext`}>
              <Empty>{el[name]}</Empty>
            </TdGrayed>
          ),
        )}
      </Tr>
    ) : isOptimized ? (
      <Tr key={`${num}-styled-optimized-ext`}>
        {content.map((name, id) => (
          <TdOpt key={`${num}-${id}-styled-optimized-ext`} isGrayed={isEven(num)}>
            {el[name]}
          </TdOpt>
        ))}
      </Tr>
    ) : (
      <Tr key={`${num}-styled-regular-ext`}>
        {content.map((name, id) =>
          isEven(num) ? (
            <Td key={`${num}-${id}-styled-regular-ext`}>{el[name]}</Td>
          ) : (
            <TdGrayed key={`${num}-${id}-styled-regular-ext`}>{el[name]}</TdGrayed>
          ),
        )}
      </Tr>
    );

  if (rows === 2) {
    return isTrashed ? trashedTemplate : isOptimized ? optimizedTemplate : template;
  } else {
    let content = ['email', 'body'];
    const extraContent = new Array(rows - 2).fill('body');
    content = content.concat(extraContent);

    return getExtendedTemplate(content, isTrashed, isOptimized);
  }
};
