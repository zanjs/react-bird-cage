import React, { Component } from 'react';
import {inject,observer} from 'mobx-react';

@inject('BirdStore')
@observer
class App extends Component {
  handleSubmit = (e) => {
    e.preventDefault()
    const bird = this.bird.value
    if(!bird){
      return
    }
    this.props.BirdStore.addBird(bird)
    this.bird.value = ''
  }

  handleDel = (index) => {
    console.log(index)
    this.props.BirdStore.delBird(index)
  }

  render() {
    const {BirdStore} = this.props

    return (
      <div className="App">
        <h5 className="">
          You have {BirdStore.count} birds.
        </h5>
        <form onSubmit={e => this.handleSubmit(e)}>
          <input type="text" ref={input => this.bird = input}/>
          <button>
            add bird
          </button>
        </form>

        <ul>
          {BirdStore.birds.map((bird, index) => (
            <li key={bird + index}>
            {bird}
            <button onClick={e => this.handleDel(index)}> del </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;