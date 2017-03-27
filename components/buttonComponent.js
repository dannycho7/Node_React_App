import React from 'react';

class Input extends React.Component {
  constructor() {
    super();
    this.state = {
      entry: ""
    }
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.updateEntry.bind(this)}/>
        <input type="submit" value="submit" onClick={this.handleClick.bind(this)} />
      </div>
    )
  }

  //Custom functions

  updateEntry(e){
      var newEntry = e.target.value;
      console.log(newEntry);
      this.setState({
        entry: newEntry
      });
  }

  handleClick() {
    this.props.handleClick(this.state);
  }
}

export default Input;
