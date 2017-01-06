var React = require('react');
var ReactDOM = require('react-dom');
import data from 'json!../../public/turtleInfo.json';




class turtle extends React.Component {


  constructor(props) {
    
    super(props);

    console.log("props.id in turtle.jsx constructor=  "+props.id);

    data.map((data) => {
      if (props.id.localeCompare(data.id) === 0) {
        var name = data.fullName;
        console.log(data.fullName);
        this.state(
          {fullName:""}
        );


      }

    })
  }

  
  componentWillReceiveProps(nextProps) {

    data.map((data) => {
      if (nextProps.id.localeCompare(data.id) === 0) {
        var name = data.fullName;
        console.log(data.fullName);
        this.setState(
          {fullName: name}
        );


      }

    })
  }






  render() {


    var id = this.state.fullName;
    console.log(id);

    return (


      <div id = "name" > Name: </div>
    );
  }
}


module.exports = turtle;