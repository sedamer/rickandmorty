import Gender from "../Filters/Category/Gender";
import React from "react";
import Status from "../Filters/Category/Status";
import Types from "../Filters/Category/Types";

const filters = ({ setStatus, setPageNumber }) => {
  return (
    <div className="col">
      <div className="text-center display-3 mb-3">Filters</div>
      <div
        className="d-flex badge bg-secondary fs-5 mb-3 text-center"
        style={{ cursor: "pointer" }}
      >
        Clear Filters
      </div>

      <div className="accordion" id="accordionExample">
        <Gender />
        <Status setStatus={setStatus} setPageNumber={setPageNumber} />
        <Types />
      </div>
    </div>
  );
};

export default filters;
