import React, { useState } from "react";
import Order from "../../assets/images/iconfinder_sort3_1542257 1.png";

const options = ["asc", "desc"];

const Asc = (...props) => {
  const toggling = () => setIsOpen(!isOpen);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const onOptionClicked = (value) => () => {
    setSelectedOption(value);
    setIsOpen(false);
    console.log(selectedOption);
  };

  return (
    <div>
      <div className="dropdown">
        <div className="drop-down-header" onClick={toggling}>
          <img src={Order} alt="order" />
          {selectedOption || "Mangoes"}
        </div>
        {isOpen && (
          <div>
            <ul className="dropdown-content">
              {options.map((option) => (
                <li
                  className="list-item"
                  onClick={onOptionClicked(props.onOptionClicked(option))}
                  key={Math.random()}
                >
                  {option}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Asc;
