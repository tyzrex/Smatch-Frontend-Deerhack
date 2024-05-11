import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

interface Props {
  currentPage: number;
  next: string | null | undefined;
  previous: string | null | undefined;
  total_pages: number;
  query?: string | string[] | undefined;
  path?: string;
  indexPath?: string;
}

export default async function Pagination(props: Props) {
  const nextQuery = props.next ? props.next : "";
  const previousQuery = props.previous ? props.previous : "";

  const pageNumbersToShow = 6; // Adjust the number of page numbers to show

  const range = (start: number, end: number) => {
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  const renderPageNumbers = () => {
    if (props.total_pages <= pageNumbersToShow) {
      return range(1, props.total_pages);
    }

    const leftOffset = Math.floor(pageNumbersToShow / 2);
    const rightOffset = props.total_pages - leftOffset;

    if (props.currentPage <= leftOffset) {
      return [...range(1, pageNumbersToShow - 2), "...", props.total_pages];
    } else if (props.currentPage >= rightOffset) {
      return [
        1,
        "...",
        ...range(props.total_pages - pageNumbersToShow + 3, props.total_pages),
      ];
    } else {
      return [
        1,
        "...",
        ...range(props.currentPage - 1, props.currentPage + 1),
        "...",
        props.total_pages,
      ];
    }
  };

  return (
    <div>
      <div className="flex flex-wrap gap-2 mt-5 items-center justify-center">
        {props.previous !== null && (
          <Link href={`${props.path}/?${previousQuery}`} prefetch={false}>
            <Button className="p-2 rounded-full bg-blue-500">
              <ChevronLeft />
            </Button>
          </Link>
        )}

        {renderPageNumbers().map((pageNumber, index) => (
          <span key={index}>
            {pageNumber === "..." ? (
              <span className="px-4 py-2">...</span>
            ) : (
              <Link
                href={`${props.path}?page=${pageNumber}${props.indexPath ?? ""}
                `}
                prefetch={false}
              >
                <p
                  className={`px-4 py-2 border rounded-md ${
                    pageNumber === props.currentPage
                      ? "bg-accent-1 text-white bg-red-500"
                      : ""
                  }`}
                >
                  {pageNumber}
                </p>
              </Link>
            )}
          </span>
        ))}

        {props.next !== null && (
          <Link href={`${props.path}/?${nextQuery}`} prefetch={false}>
            <Button className="p-2 rounded-full bg-blue-500">
              <ChevronRight />
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
}
