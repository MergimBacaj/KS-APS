import { Link } from "react-router-dom";
import classes from "../styles/UsersListTable.module.css";
import { User } from "../utils/user";

interface PropsType {
  users: User[] | undefined;
}

const UsersListTable = (props: PropsType) => {
  return (
    <ul className={classes.listContainer}>
      {props.users?.map((user) => (
        <Link
          to={JSON.stringify(user.id)}
          key={user.id}
          className={classes.linkWrapper}
        >
          <li className={classes.userInfo}>
            <h3>{`${user.firstName} ${user.lastName}`}</h3>
            <>
              <div>
                <p className={classes.label}>Email:</p>
                <p>{user.email}</p>
              </div>
              <div>
                <p className={classes.label}>Company:</p>
                <p>{user.company.name}</p>
              </div>
              <div>
                <p className={classes.label}>Gender:</p>
                <p>{user.gender}</p>
              </div>
              <div>
                <p className={classes.label}>University:</p>
                <p>{user.university}</p>
              </div>
            </>
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default UsersListTable;
