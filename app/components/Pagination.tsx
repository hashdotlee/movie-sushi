import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
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
      previousLabel={<ChevronLeftIcon className="h-5 w-5" />}
      nextLabel={<ChevronRightIcon className="h-5 w-5" />}
      initialPage={page - 1}
      pageRangeDisplayed={2}
      marginPagesDisplayed={1}
      pageCount={pageCount}
      onPageChange={(data) => {
        onPageChange(data);
      }}
      containerClassName={
        "flex items-center mx-auto py-4 flex-wrap flex justify-center gap-2"
      }
      previousLinkClassName={
        "px-4 rounded-md inline-block text-sm py-2 truncate dark:bg-zinc-800 dark:text-zinc-200"
      }
      previousClassName="flex items-center"
      nextClassName="flex items-center"
      breakLinkClassName={
        "px-4 rounded-md py-2 dark:bg-zinc-800 dark:text-zinc-200"
      }
      nextLinkClassName={
        "px-4 rounded-md inline-block text-sm py-2 truncate dark:bg-zinc-800 dark:text-zinc-200"
      }
      disabledLinkClassName={
        "px-4 rounded-md py-2 dark:text-zinc-600 dark:bg-zinc-900 dark:text-zinc-200"
      }
      pageLinkClassName={
        "py-2 px-4 rounded-md text-sm dark:bg-zinc-800 dark:border dark:border-zinc-800 dark:text-zinc-200"
      }
      activeLinkClassName={
        "py-2 px-4 rounded-md dark:bg-zinc-200 dark:text-zinc-900"
      }
    />
  );
}
