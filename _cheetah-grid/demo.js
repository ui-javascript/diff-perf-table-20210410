import {useEffect} from "react"
import {Button, TimePicker} from "antd"

import moment from 'moment';

function onChange(time, timeString) {
  console.log(time, timeString);
}

function App() {

  useEffect(() => {

    const grid = new cheetahGrid.ListGrid({
    // Parent element on which to place the grid
    parentElement: document.querySelector('#sample'),
    // Header definition
    header: [
      {field: 'check', caption: '', width: 50, columnType: 'check', action: 'check'},
      {field: 'personid', caption: 'ID', width: 100},
      {field: 'fname', caption: 'First Name', width: 200},
      {field: 'lname', caption: 'Last Name', width: 200},
      {field: 'email', caption: 'Email', width: 250},
    ],
    // Array data to be displayed on the grid
    records,
    // Column fixed position
    frozenColCount: 2,
  });


    return () => {
    
    }
  }, [])

  return (
<div id="sample" style="height: 300px; border: solid 1px #ddd;">
</div>
  );
}

ReactDOM.render(<App />, mountNode);

