import { HashLink } from "react-router-hash-link";
import './StartButton.css';

export const StartButton = () => {
  return (
    <button className="start-button" type="button">
      <HashLink smooth to="/#form">
        Начать преображение
      </HashLink>
    </button>
  );
};
