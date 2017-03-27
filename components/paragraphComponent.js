import React from 'react';

class Paragraph extends React.Component {
  render(){
    var list = this.props.data.map(function(data){
      return (
        <li key={data.id}>
          Name: {data.name}
        </li>
      );
    });
    return (
      <div>
        <p>This is the paragraph area</p>
        <ul>
          {list}
        </ul>
      </div>
    )
  }
}

export default Paragraph;
