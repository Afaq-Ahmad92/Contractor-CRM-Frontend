import React, { useState, useEffect, useRef } from "react";
import { useStateContext } from "../../context/store";
import { IoCloseOutline } from "react-icons/io5";
function DropdownMenu({ name, options, onChange, value }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const listRef = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  const pushOptions = (option) => setSelectedOptions((pre) => [...pre, option]);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (listRef.current && !listRef.current.contains(e.target)) {
        // Close or deselect options if click occurs outside
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div
      style={{ position: "relative", display: "inline-block" }}
      ref={listRef}
    >
      <div onClick={toggleMenu} className={`flex items-center gap-2`}>
        {selectedOptions?.length > 0 ? (
          selectedOptions?.map((option, index) => (
            <ButtonWithCancel
              text={option}
              onClick={() => {
                setSelectedOptions((pre) => pre.filter((j, i) => i !== index));
                onChange("remove", value, option);
              }}
            />
          ))
        ) : (
          <button className="p-2">{name}</button>
        )}
      </div>
      {isOpen && (
        <ul
          style={{
            position: "absolute",
            top: "100%",
            left: "0",
            background: "white",
            border: "1px solid #ccc",
            listStyle: "none",
            zIndex: "1000",
            width: "200px",
          }}
          className={`ml-4`}
        >
          {options?.map((option) => {
            return (
              <li className="px-3 py-2 flex items-center justify-between">
                <span>{option}</span>
                <input
                  type="checkbox"
                  checked={selectedOptions?.find((opt) => opt === option)}
                  onChange={(e) => {
                    e?.stopPropagation();
                    if (e?.target?.checked) {
                      pushOptions(option);
                      onChange("add", value, option);
                    } else {
                      setSelectedOptions((pre) =>
                        pre.filter((j, i) => j !== option)
                      );
                      onChange("remove", value, option);
                    }
                  }}
                  name=""
                  id=""
                />
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default DropdownMenu;

const ButtonWithCancel = ({ text, onClick }) => {
  return (
    <button
      className={`flex items-center gap-3 justify-between p-2 bg-gray-200 rounded-lg`}
    >
      <span>{text}</span>{" "}
      <span onClick={onClick}>
        <IoCloseOutline size={16} />
      </span>
    </button>
  );
};
