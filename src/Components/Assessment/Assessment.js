import React from "react";
import Header from "../Header/Header";
import { makeStyles, Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  select: {
    margin: "10px",
    padding: "5px",
    color: "green",
  },

  exm: {
    margin: "10px",
    padding: "5px",
    color: "black",
  },
  box: {
    height: "85vh",
    width: "97.3%",
    margin: "10px",
    padding: "10px",
    border: "2px solid black",
    borderRadius: "10px",
  },
  typeOfAssessment:{
    cursor: "pointer",
  }
}));

function Assessment() {
  const classes = useStyles();
  const history = useHistory();

  function handleClick(e) {
    e.preventDefault();
    history.push("/page");
  }
  let assessment = [
    { id: 1, type: "1. My first Assessment" },
    { id: 2, type: "2. My Second Assessment" },
    { id: 3, type: "3. My Boolean Assessment" },
  ];

  const handelClickTypes=()=>{
    
  }
  

  return (
    <>
      <Header />
      <div className={classes.box}>
          <h1 className={classes.select}>Select one Assessment</h1>
           <div>
              {assessment.map((item, idx) => (
            <div>
              <Typography
                variant="h6"
                className={classes.typeOfAssessment}
                onClick={handleClick}
                
                to={"/assessment/" + item.id + item.type}
                key={idx} >
                <h4 onClick={handelClickTypes} className={classes.exm}>{item.type}</h4>
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Assessment;
