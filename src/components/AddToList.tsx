import React, { useState } from "react";
import { IState as Props } from "../models";

interface IProps {
  people: Props["people"];
  setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>;
}

const AddToList: React.FC<IProps> = () => {
  const [input, setInput] = useState({
    name: "",
    age: "",
    note: "",
    img: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = (): void => {};

  return (
    <div className="AddToList">
      <input
        type="text"
        placeholder="Name"
        name="name"
        className="AddToList-input"
        value={input.name}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Age"
        name="age"
        className="AddToList-input"
        value={input.age}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Image Url"
        name="img"
        className="AddToList-input"
        value={input.img}
        onChange={handleChange}
      />
      <textarea
        placeholder="Notes"
        name="notes"
        className="AddToList-input"
        value={input.note}
        onChange={handleChange}
      />
      <button className="AddToList-btn" onClick={handleClick}></button>
    </div>
  );
};

export default AddToList;
