import { HashLink } from "react-router-hash-link";
import './StartButton.css';

type props = {
  addClass?: string
}

export const StartButton = ( {addClass}: props ) => {
  return (
    <button className={`start-button ${addClass}`} type="button">
      <HashLink smooth to="/#form">
        Начать преображение
      </HashLink>
    </button>
  );
};
