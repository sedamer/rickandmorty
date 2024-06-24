import Gender from "../Filters/Category/Gender";
import React from "react";
import Status from "../Filters/Category/Status";
import Types from "../Filters/Category/Types";

const filters = ({ setStatus, setPageNumber, setGender, setSpecies }) => {
  let clear = () => {
    setStatus("");
    setPageNumber(1);
    setGender("");
    setSpecies("");
    window.location.reload(false);
  };
  return (
    <div className="col">
      <div className="text-center display-3 mb-3">Filters</div>
      <div
        onClick={clear}
        className="d-flex badge bg-secondary fs-5 mb-3 text-center"
        style={{ cursor: "pointer" }}
      >
        Clear Filters
      </div>

      <div className="accordion" id="accordionExample">
        <Gender setGender={setGender} setPageNumber={setPageNumber} />
        <Status setStatus={setStatus} setPageNumber={setPageNumber} />
        <Types setSpecies={setSpecies} setPageNumber={setPageNumber} />
      </div>
    </div>
  );
};

export default filters;
