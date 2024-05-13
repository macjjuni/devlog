import './footer.scss';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <p className="footer__wrapper__text">{`${new Date().getFullYear()} kkussaeng.`}</p>
      </div>
    </footer>
  );
}
