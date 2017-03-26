import React from 'react';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      data:
      [
        {
           "id":1,
           "name":"Foo",
           "age":"20"
        },
        {
           "id":2,
           "name":"Bar",
           "age":"30"
        },

        {
           "id":3,
           "name":"Baz",
           "age":"40"
        }
      ]
    }
  }
   render() {
      return (
         <div>
            <Header text="Header"/>
            <Paragraph data={this.state.data}/>
         </div>
      );
   }
}

class Header extends React.Component {
  render(){
    return (
      <h1>{this.props.text}</h1>
    )
  }
}
class Paragraph extends React.Component {
  render(){
    var list = this.props.data.map(function(data){
      return <li>{data.id}</li>
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

export default App;
