import { Link } from "react-scroll";

const highlight = {
  color: "red",
};

export const courseFeatures = [
  <p>
    <span style={highlight}>7</span> лекций от <span style={highlight}>7</span>{" "}
    эксперток на важные{" "}
    <span style={highlight}>
      <Link to="program" activeClass="active" smooth={true} duration={1000}>
        <u>темы</u>
      </Link>
    </span>
  </p>,
  <p>
    <span style={highlight}>Прямые эфиры</span> с ответами на вопросы
  </p>,
  <p>
    Доступ в закрытый <span style={highlight}>телеграм-чат</span> женской
    поддержки и единомышлениц
  </p>,
  <p>
    Возможность выиграть <span style={highlight}>2000 рублей</span> или{" "}
    <span style={highlight}>подарок </span>
    от каждой из блогерок
  </p>,
  <p>
    <span style={highlight}>Вдохновение</span> на весь будущий год
  </p>,
];
