import React from 'react';
import './App.css';
import { Button, Grid, TextField } from '@material-ui/core';

function App() {
  const [stringA, setStringA] = React.useState("");
  const [stringB, setStringB] = React.useState("");
  const [stringC, setStringC] = React.useState("");
  const [separator, setSeparator] = React.useState("");
  const [outputString, setOutputString] = React.useState("");
  const handleStringA = (event) => {
    setStringA(event.target.value);
  }
  const handleStringB = (event) => {
    setStringB(event.target.value);
  }
  const handleStringC = (event) => {
    setStringC(event.target.value);
  }
  const handleSeparator = (event) => {
    setSeparator(event.target.value);
  }
  function handleOutput(button) {
    switch (button) {
      case "1":
        setOutputString(stringA + separator + stringB + separator + stringC);
        break;
      case "2":
        setOutputString(stringA + separator + stringC + separator + stringB);
        break;
      case "3":
        setOutputString(stringB + separator + stringA + separator + stringC);
        break;
      case "4":
        setOutputString(stringB + separator + stringC + separator + stringA);
        break;
      case "5":
        setOutputString(stringC + separator + stringA + separator + stringB);
        break;
      case "6":
        setOutputString(stringC + separator + stringB + separator + stringA);
        break;
      default:
    }
  }

  return (
    <div className="App" style={{ margin: '3em 10%', flexGrow: 1 }}>
      <Grid container justify="center" direction="column">
      <p><b>Welcome to the String Concatenator</b> <br/>Enter a string into each of the boxes labeled "String A",
      "String B", "String C."
          <br/>You may also add a seperator for these strings in the box label "Seperator."
          <br/>Click on one of the buttons below to output the concatenation of the input strings as presented on the button. </p>
          
        <Grid item xs>
          <TextField
            label="String A"
            variant="outlined"
            value={stringA}
            onChange={handleStringA}
          >
          </TextField>
          <TextField
            label="String B"
            variant="outlined"
            value={stringB}
            onChange={handleStringB}
          >
          </TextField>
          <TextField
            label="String C"
            variant="outlined"
            value={stringC}
            onChange={handleStringC}
          >
          </TextField>
        </Grid>
        <Grid>
          <TextField
            label="Separator"
            variant="outlined"
            value={separator}
            onChange={handleSeparator}
          >
          </TextField>
        </Grid>
        <br/>
        <Grid item xs>
          <Button
            variant="contained"
            color="primary"
            disableElevation
            onClick={() => handleOutput("1")}
            >
            A + B + C
          </Button>
          <Button
            variant="contained"
            color="primary"
            disableElevation
            onClick={() => handleOutput("2")}
            >
            A + C + B
          </Button>
          <Button
            variant="contained"
            color="primary"
            disableElevation
            onClick={() => handleOutput("3")}
            >
            B + A + C
          </Button>
          <Button
            variant="contained"
            color="primary"
            disableElevation
            onClick={() => handleOutput("4")}
            >
            B + C + A
          </Button>
          <Button
            variant="contained"
            color="primary"
            disableElevation
            onClick={() => handleOutput("5")}
            >
            C + A + B
          </Button>
          <Button
            variant="contained"
            color="primary"
            disableElevation
            onClick={() => handleOutput("6")}
            >
            C + B + A
          </Button>
        </Grid>
        <br/>
        <Grid item xs>
        <TextField 
            label="Output String" 
            variant="filled"
            value={outputString}
            InputProps={{
              readOnly: true,
            }}
          >

          </TextField>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
