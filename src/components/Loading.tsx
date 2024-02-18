import classes from "./../styles/Loading.module.css";
const loading = () => {
  return (
    <div className={classes.spinnerContainer}>
      <div className={classes.spinner}></div>
    </div>
  );
};

export default loading;
