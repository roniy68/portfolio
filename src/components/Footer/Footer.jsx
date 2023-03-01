import { BsFillHeartFill } from 'react-icons/bs';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container row">
        <p className="text">
          Built with
          <BsFillHeartFill className="heart-icon" />
          by:
          <a
            href="https://github.com/roniy68"
            target="_blank"
            rel="noreferrer"
          >
            Ahmed Hasan Rony
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
