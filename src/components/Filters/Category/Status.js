import FilterButton from "./FilterButton";
import React from "react";

const status = ({ setPageNumber, setStatus }) => {
  let status = ["alive", "dead", "unknown"];
  return (
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseTwo"
          aria-expanded="false"
          aria-controls="collapseTwo"
        >
          Status
        </button>
      </h2>
      <div
        id="collapseTwo"
        class="accordion-collapse collapse"
        data-bs-parent="#accordionExample"
      >
        <div class="accordion-body d-flex flex-wrap gap-2">
          {status.map((items, index) => (
            <FilterButton
              setPageNumber={setPageNumber}
              value={setStatus}
              key={index}
              items={items}
              name="status"
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default status;
