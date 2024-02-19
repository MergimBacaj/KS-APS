import useGetUsersList from "../utils/useGetUsersList";
import { HandleRequestState } from "../components/HandleRequestState";
import Loading from "../components/Loading";
import Error from "../components/Error";
import UsersListTable from "../components/UsersListTable";
import Pagination from "../components/Pagination";
import { useMemo, useState } from "react";
import { sortByEmail, sortByName } from "../utils/helpers/SortingFunctions";
import classes from "./../styles/UsersList.module.css";
import { User } from "../utils/user";

const UsersList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sort, setSort] = useState<"sortByName" | "sortByEmail" | undefined>(
    undefined
  );
  const [search, setSearch] = useState("");

  const { loading, error, users } = useGetUsersList({
    page: currentPage,
    search: search,
  });

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSortByName = () => {
    setSort("sortByName");
  };

  const handleSortByEmail = () => {
    setSort("sortByEmail");
  };

  const handleSortDefault = () => {
    setSort(undefined);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setCurrentPage(1);
  };

  const usersToDisplay = useMemo<User[]>(() => {
    if (!users) {
      return [];
    }

    let sortedUsers = users.users;

    if (sort === "sortByEmail") {
      sortedUsers = sortByEmail(sortedUsers);
    } else if (sort === "sortByName") {
      sortedUsers = sortByName(sortedUsers);
    }

    return sortedUsers;
  }, [users, sort]);

  return (
    <div>
      <div className={classes.headContainer}>
        <h1>Users List</h1>
        <input
          type="text"
          onChange={handleSearch}
          className={classes.search}
          placeholder="Search..."
        />
        <ul className={classes.sortContainer}>
          <li onClick={handleSortByName}>Sort by Name</li>
          <li onClick={handleSortByEmail}>Sort by Email</li>
          <li onClick={handleSortDefault}>Default Sort</li>
        </ul>
      </div>
      <HandleRequestState state={loading} placeholder={<Loading />}>
        <HandleRequestState state={error} placeholder={<Error />}>
          <UsersListTable users={usersToDisplay} />
          {usersToDisplay?.length !== 0 && (
            <Pagination
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />
          )}
        </HandleRequestState>
      </HandleRequestState>
    </div>
  );
};

export default UsersList;
