import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import Container from "@material-ui/core/Container";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import "./Style.css";
import Mylist from "./Mylist";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { insertData } from "./redux/Action";
function Fram() {
  const useStyles = makeStyles({
    root: {
      maxWidth: 1000,
      height: 150,
      width: "100%"
    },
    media: {
      height: "200px",
    },
  });
  const classes = useStyles();
  let [color, setColor] = useState();
  let [task, setTask] = useState();
  let [sno, setSno] = useState(0);
  console.log(color + " " + task);

  let deta = useSelector((state) => state.instData);
  console.log(deta[deta.length-1]);
  let dispatch = useDispatch();
  return (
    <>
      <Container maxWidth="sm">
        <h1>Todo App</h1>
        <Card className={`${classes.root} framCard`}>
          <div className="inputDiv">
            <InputLabel id="demo-simple-select-label">Color</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              onChange={(e) => {
                console.log(e.currentTarget.innerText);
                setColor(e.currentTarget.innerText);
              }}
            >
              <MenuItem value={"red"}>red</MenuItem>
              <MenuItem value={"black"}>black</MenuItem>
              <MenuItem value={"green"}>green</MenuItem>
            </Select>

            <TextField
              id="outlined-multiline-flexible"
              label="Enter Task"
              multiline
              maxRows={4}
              value={task}
              variant="outlined"
              onChange={(e) => {
                console.log(e.target.value);
                setTask(e.target.value);

              }}
            />

            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                let obj = {
                  sno: deta[deta.length-1]?deta[deta.length-1].sno+1:0,
                  content: task,
                  check: null,
                  color: color,
                  time: new Date().toLocaleTimeString(),
                };
                dispatch(insertData(obj));
                setSno(sno + 1);
                setTask("")
                
              }}
            >
              Add Task
            </Button>
          
          </div>
          
        </Card>
        <Mylist></Mylist>
      </Container>
    </>
  );
}
export default Fram;
