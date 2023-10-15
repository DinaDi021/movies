import { Pagination } from "@mui/material";
import React, { ChangeEvent, FC } from "react";
import { useSearchParams } from "react-router-dom";

interface PaginationsProps {
  totalPages: number;
}
const Paginations: FC<PaginationsProps> = ({ totalPages }) => {
  const [query, setQuery] = useSearchParams();
  let currentPage = +query.get("page") || 1;

  if (currentPage > 500) {
    currentPage = 500;
    setQuery((prev) => {
      prev.set("page", "500");
      return prev;
    });
  }

  const handlePageChange = (event: ChangeEvent<unknown>, page: number) => {
    setQuery((prev) => {
      prev.set("page", page.toString());
      return prev;
    });
  };

  return (
    <div>
      <Pagination
        count={totalPages > 500 ? 500 : totalPages}
        page={+currentPage}
        variant="outlined"
        onChange={handlePageChange}
      />
    </div>
  );
};

export { Paginations };
