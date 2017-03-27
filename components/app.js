import React from 'react';
import Input from './buttonComponent.js';
import Header from './headerComponent.js';
import Paragraph from './paragraphComponent.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 3,
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
          <Header />
          <Input handleClick={this.updateState.bind(this)}/>
          <Paragraph data={this.state.data}/>
       </div>
    );
   }

   //Self-defined functions
   updateState(inputState) {
     var data = this.state.data;
     var newCount = this.state.counter + 1;
     var newData = {
       "id": newCount,
       "name": inputState.entry,
       "age": Math.floor(Math.random()*20)
     }
     data.push(newData);
     this.setState({
       data: data,
       counter: newCount
     });
   }

}

export default App;
