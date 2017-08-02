import React, { Component } from 'react';
import { inject , observer } from 'mobx-react'

import StoreName from '../../stores/name'

@inject(StoreName.bird)
@observer
class Count extends Component {
    render(){
        const {BirdStore} = this.props

        return(
            <div>
               Birds has {BirdStore.birds.length}
            </div>
        )
    }
}

export default Count