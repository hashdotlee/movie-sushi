import ReactPaginate from "react-paginate";

interface PaginationProps {
  pageCount: number;
  page: number;
  onPageChange: (data: { selected: number }) => void;
}

export default function Pagination({
  pageCount,
  page,
  onPageChange,
}: PaginationProps) {
  return (
    <ReactPaginate
      previousLabel={"Previous"}
      nextLabel={"Next"}
      initialPage={page - 1}
      pageRangeDisplayed={2}
      marginPagesDisplayed={1}
      pageCount={pageCount}
      onPageChange={(data) => {
        onPageChange(data);
      }}
      containerClassName={
        "flex items-center mx-auto flex-wrap flex justify-center gap-2"
      }
      previousLinkClassName={
        "px-4 rounded-md text-sm py-2 truncate dark:bg-zinc-800 dark:text-zinc-200"
      }
      breakClassName={
        "px-4 rounded-md py-2 dark:bg-zinc-800 dark:text-zinc-200"
      }
      nextLinkClassName={
        "py-2 px-4 rounded-md text-sm truncate dark:bg-zinc-800 dark:border dark:border-zinc-800 dark:text-zinc-200"
      }
      disabledClassName={
        "px-4 rounded-md py-2 dark:bg-zinc-900 dark:text-zinc-200"
      }
      pageClassName={
        "py-2 px-4 rounded-md text-sm dark:bg-zinc-800 dark:border dark:border-zinc-800 dark:text-zinc-200"
      }
      activeClassName={
        "py-2 px-4 rounded-md dark:bg-zinc-600 dark:text-zinc-200"
      }
    />
  );
}
