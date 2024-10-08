## Styled comparator
<img width="700" alt="styled-comparator image" src="https://github.com/user-attachments/assets/3ea0d061-4b55-409f-b7a8-00d91e45c46d">

- Идея: отрисовать таблицу разного уровня сложности (сложность измеряется в данном случае количеством html или react ячеек таблицы) и замерять время, которое react тратит на рендер этой таблицы.

После запуска приложения опявятся элементы конфигурации таблицы:
1) кнопки для выбора подхода работы со стилями
2) чекбоксы для styled-components, которые задают несколько частных сценариев использования
3) Инпуты для манипуляций с количеством ячеек таблицы
4) Информационная табло показывающее количество ячеек в таблице

После изменения любых параметров происходит перерисовка таблицы. Так же замеряется время рендеринга таблицы, которое выводится в консоль разработчика с соответствующим текстом для удобства.

Для анализа производительности ренлеринга компонента таблицы использовался компонент [Profiler](https://react.dev/reference/react/Profiler)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
