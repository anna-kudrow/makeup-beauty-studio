import { CHAT_ID, ERROR_MESSAGE, SUCCESS_MESSAGE, URI_API } from "@/lib/const";
import { useState } from "react";

export const ClientForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    tel: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const message = `
        <b>Клиент: </b>${formData.name}
        <b>Телефон: </b>${formData.tel}
        <b>Email: </b>${formData.email}
    `;

    const response = await fetch(URI_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message,
        parse_mode: "html",
      }),
    });

    const result = await response.json();

    if (result.ok) {
      showMessage(true);
      setFormData(prevData => ({
        ...prevData,
        name: "",
        tel: "",
        email: "",
      }));
    } else {
      showMessage(false);
    }
  };

  const showMessage = (isSuccess: boolean) => {
    if (isSuccess) {
      console.log(SUCCESS_MESSAGE);
      // ALERT SUCCESSFULL
    } else {
      console.log(ERROR_MESSAGE);
      // ALERT ERROR
    }
  };

  return (
    <form className="sign-up__form" onSubmit={handleSubmit}>
      <input
        className="sign-up__input"
        type="text"
        name="name"
        id="name"
        placeholder="имя"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        className="sign-up__input"
        type="tel"
        name="tel"
        id="tel"
        placeholder="телефон"
        value={formData.tel}
        onChange={handleChange}
        required
      />
      <input
        className="sign-up__input"
        type="email"
        name="email"
        id="email"
        placeholder="почта"
        value={formData.email}
        onChange={handleChange}
      />
      <button className="sign-up__btn">записаться</button>
    </form>
  );
};
