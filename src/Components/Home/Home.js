import { React } from "react";
import { makeStyles } from "@material-ui/styles";
import { Avatar, Grid } from "@material-ui/core";
import { Typography, Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({

root: {
        dispay: "flex",
        flexDirection: "column",
        background: "white",
},

nav: {
    background: "cyan",
    width:"100%",
    height:"auto",
    [theme.breakpoints.between("lg","xl")]:{
        display: "flex",
        justifyContent:"space-between",

    },
    [theme.breakpoints.between("sm","md")]:{
        display:"flex",
        justifyContent:"space-between"

    },
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      justifyContent:'space-around',
    },
},
logo:{
    borderRadius:"8px",
    padding:"5px",
    [theme.breakpoints.only("xs")]:{
        marginRight:"auto", 

    },

},
title:{
    marginRight:"auto",
    marginLeft:"auto",
    fontWeight:"bold",
    
   
    [theme.breakpoints.between("xs","sm")]:{
        marginRight:"auto",
        marginLeft:"auto",
        fontSize:"23px",
        

    },
    [theme.breakpoints.up("sm")]:{
        fontSize:"27px",
    },

},
login:{
    background:"white",
    fontWeight:"bold",
    
},
box:{
    height:"90vh",
    width:"100%",
    border:"1px solid",
    borderRadius:"8px",
    justifyContent:"column"
    
},
instruction:{
    fontSize:"35px",
    fontWeight:"bold",
    margin:"50px",
    padding:"0px",
    [theme.breakpoints.down("md")]:{
        fontSize:"26px",
        fontWeight:"bold",
    },
    [theme.breakpoints.only("xs")]:{
        fontSize:"20px",
        fontWeight:"bold",
    },

},

input:{
margin:"56px",
width: "30%",
  padding: "14px 20px",
  borderRadius: "4px",
  border:"01px solid green",

[theme.breakpoints.up("md")]:{
    fontSize:"19px",
    width:"30%",

},
[theme.breakpoints.down("sm")]:{


}

},
continue:{
    background:"red",
    padding: "5px 20px",
    fontSize: "20px",
    textAlign: "center",
    cursor: "pointer",
    outline: "none",
    color: "black",
    backgroundColor: "cyan",
    border: "none",
    borderRadius: "15px",
    boxShadow: "4px 6px #999",

    [theme.breakpoints.down("sm")]:{
        margin:"-45px",
        fontSize:"16px",
        padding:"1px 10px",
    },

},
 
}));

export default function Home() {
  const classes = useStyles();
  const history = useHistory();

  function handleClick(e) {
    e.preventDefault();
    history.push("/assessment");
  }

  return (
    <div>
      <Grid container className={classes.root}>
        <Grid item xs={12} md={12}>
          <Grid item className={classes.nav} xs={12}>
            <Avatar className={classes.logo}>logo</Avatar>
            <Typography className={classes.title}>Assessment App</Typography>
            <Button  className={classes.login}>Login</Button>
          </Grid>
        </Grid>
          <Grid className={classes.box}>
            <Typography className={classes.instruction}> Follow The Instruction</Typography>
            <input className={classes.input} placeholder="@gmail.com"></input>
            <Button onClick={handleClick} className={classes.continue}>
              continue
            </Button>
          </Grid>
        </Grid>
    </div>
  );
}

