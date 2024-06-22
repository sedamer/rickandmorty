import FilterButton from "./FilterButton";
import React from "react";

const gender = () => {
  let gender = ["female", "male", "genderless", "unknown"];
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
          Gender
        </button>
      </h2>
      <div
        id="collapseTwo"
        class="accordion-collapse collapse"
        data-bs-parent="#accordionExample"
      >
        <div class="accordion-body d-flex flex-wrap gap-2">
          {gender.map((items, index) => (
            <FilterButton
              key={index}
              items={items}
              name="gender"
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default gender;
