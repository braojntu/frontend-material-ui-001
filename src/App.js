import { Grid, makeStyles } from '@material-ui/core';
import NavBar from "./components/NavBar";
import LeftBar from "./components/LeftBar";
import Feed from "./components/Feed";
import RightBar from "./components/RightBar";
import AddPost from './components/AddPost.js';

const useStyles = makeStyles(theme => ({
  right: {
    [theme.breakpoints.down("sm")]: {
      display: "none"
    },
  }
}))

function App() {
  const classes = useStyles()
  return (
    <>
      <div><NavBar /> </div>
      <Grid container>
        <Grid item sm={2} xs={2}>
          <LeftBar />
        </Grid>
        <Grid item sm={7} xs={10}>
          <Feed />
        </Grid>
        <Grid item sm={3} className={classes.right}>
          <RightBar />
        </Grid>
      </Grid>
      <AddPost />
    </>
  );
}

export default App;
