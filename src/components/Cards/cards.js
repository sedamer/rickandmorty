import React from "react";

const Cards = ({ results }) => {
  let display;
  console.log(results);
  if (results) {
    display = results.map((result) => {
      let { id, name, image, location, status } = result;

      const getStatusBadge = (status) => {
        if (status === "Alive") {
          return (
            <div className="badge bg-success position-absolute top-0 end-1">
              {status}
            </div>
          );
        } else if (status === "Dead") {
          return (
            <div className="badge bg-danger position-absolute top-0 end-1">
              {status}
            </div>
          );
        } else {
          return (
            <div className="badge bg-secondary position-absolute top-0 end-1">
              {status}
            </div>
          );
        }
      };

      return (
        <div key={id} className="col-4 my-5 position-relative">
          <div className="card border-2">
            <img src={image} alt={name} className="img-fluid" />
            <div className="card-body">
              <div className="card-title display-6 fs-5 text-center">
                {name}
              </div>
              <h5 className="text-center">Last Location</h5>
              <div className="card-text text-center">{location.name}</div>
            </div>
          </div>
          {getStatusBadge(status)}
        </div>
      );
    });
  } else {
    display = "No Data Found";
  }
  return <div className="row ">{display}</div>;
};

export default Cards;
