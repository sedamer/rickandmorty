import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ info, setPageNumber }) => {
  return (
    <>
      <ReactPaginate
        className="pagination justify-content-center align-items-center gap-3"
        pageCount={info?.pages}
        nextLabel="Next"
        previousLabel="Prev"
        nextClassName="btn btn-warning"
        previousClassName="btn btn-warning"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        onPageChange={(data) => setPageNumber(data.selected + 1)}
        activeClassName="active"
        breakLabel="..."
      />
    </>
  );
};

export default Pagination;
