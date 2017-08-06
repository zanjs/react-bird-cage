import React, { Component } from 'react';
import {inject, observer} from 'mobx-react'
import { Helmet } from 'react-helmet'

import StoreName from '../../stores/name'

@inject(StoreName.bird)
@observer
class Birds extends Component {
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
    const man = BirdStore.birds.length - 2


    return (

      <div className="">
        <Helmet>
          <title >Birds yo!</title>
        </Helmet>
        <h5 className="">
          You have {BirdStore.birds.length} birds.
        </h5>
        <h6 className="">
          {man}
        </h6>
        <form onSubmit={e => this.handleSubmit(e)}>
          <input type="text" ref={input => this.bird = input}/>
          <button>
            add bird
          </button>
        </form>

        <ul>
          {BirdStore.birds.map((bird, index) => (
            <li key={bird.time + index}>
            {bird.name}
            <button onClick={e => this.handleDel(index)}> del </button>
            </li>
          ))}
        </ul>
      </div>

    );
  }
};

export default Birds