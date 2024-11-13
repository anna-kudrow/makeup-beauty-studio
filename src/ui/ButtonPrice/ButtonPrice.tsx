import './ButtonPrice.css';


export const ButtonPrice = () => {

  const handleClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }

	return (
		<button type="button" className="price__button" onClick={handleClick}>
			Узнать цены
		</button>
	);
};
