import classes from "./../styles/pagination.module.css";

interface PropsType {
  currentPage: number;
  onPageChange: (newPage: number) => void;
}
const Pagination = ({ currentPage, onPageChange }: PropsType) => {
  const pageNumbers = [];
  for (let i = currentPage - 2; i <= currentPage + 2; i++) {
    if (i > 0) {
      pageNumbers.push(i);
    }
  }

  return (
    <nav>
      <div className={classes.pagination}>
        {pageNumbers.map((number) => (
          <div
            key={number}
            className={`${classes.pageNumber} ${
              currentPage === number ? `${classes.active}` : ""
            }`}
          >
            <button
              onClick={() => onPageChange(number)}
              className={classes.pageNumber}
            >
              {number}
            </button>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Pagination;
