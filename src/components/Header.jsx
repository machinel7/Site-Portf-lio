import "../styles/Header.css";

export default function Header() {
  return (
    <header className="header">
      <h1 className="header__name">
        João <span>Luiz</span>
      </h1>
      <p className="header__role">Desenvolvedor de Software · ADS · AWS</p>
      <hr className="header__divider" />
      <nav className="header__links">
        <a
          className="header__link"
          href="https://github.com/joaoluizdev01"
          target="_blank"
          rel="noopener noreferrer"
        >
          ↗ GitHub
        </a>
        <a
          className="header__link"
          href="https://linkedin.com/in/joaoluizdev01"
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
