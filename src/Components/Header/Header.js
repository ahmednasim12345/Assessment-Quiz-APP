import React from "react";
import { makeStyles, Box, Typography} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  nav: {
    background: "cyan",
    width: "100%",
    height: "auto",
    [theme.breakpoints.between("lg", "xl")]: {
      display: "flex",
      justifyContent: "space-between",
    },
    [theme.breakpoints.between("sm", "md")]: {
      display: "flex",
      justifyContent: "space-between",
    },
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      justifyContent: "space-around",
    },
  },

  title: {
    marginRight: "auto",
    marginLeft: "auto",
    fontWeight: "bold",

    [theme.breakpoints.between("xs", "sm")]: {
      marginRight: "auto",
      marginLeft: "auto",
      fontSize: "23px",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "35px",
    },
    [theme.breakpoints.only("xl")]: {
      fontSize: "37px",
    },
  },
 
}));
function Header() {
  const classes = useStyles();
  return (
    <div>
      
          <Box className={classes.nav}>
            <Typography className={classes.title}>Assessment App</Typography>
          </Box>
      
    </div>
  );
}

export default Header;
