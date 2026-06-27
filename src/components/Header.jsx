import "../styles/Header.css";

export default function Header() {
  return (
    <header className="header">
      <h1 className="header__name">
        <span>João Luiz Barbosa Carvalho</span>
      </h1>
      <p className="header__role">FullStack Developer · Systems Analysis and Development Student</p>
      <hr className="header__divider" />
      <nav className="header__links">
        <a
          className="header__link"
          href="https://github.com/machinel7"
          target="_blank"
          rel="noopener noreferrer"
        >
          ↗ GitHub
        </a>
        <a
          className="header__link"
          href="https://www.linkedin.com/in/joaolbc/"
          target="_blank"
          rel="noopener noreferrer"
        >
          ↗ LinkedIn
        </a>
        <a
          className="header__link"
          href="mailto:joaoluizdev01@gmail.com"
        >
          ↗ joaoluizdev01@gmail.com
        </a>
      </nav>
    </header>
  );
}
