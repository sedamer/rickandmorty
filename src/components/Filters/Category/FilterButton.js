import React from "react";

const FilterButton = ({ name, index, items, setPageNumber, value }) => {
  return (
    <div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name={name}
          id={`${name}-${index}`}
        />
        <label
          onClick={() => {
            value = { items };
            setPageNumber(1);
          }}
          className="btn btn-outline-primary"
          for={`${name}-${index}`}
        >
          {items}
        </label>
      </div>
    </div>
  );
};

export default FilterButton;
