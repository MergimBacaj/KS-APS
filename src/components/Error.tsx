import classes from "./../styles/Error.module.css";

const Error = () => {
  return (
    <div className={classes.errorContainer}>
      <div className={classes.errorMessage}>Error</div>
    </div>
  );
};

export default Error;
