import React, { Component } from 'react';
import { createHashHistory } from 'history'

import RoutePath from '../../routes/path'

const history = createHashHistory()

class History extends Component {
    handClick(){
        history.push(RoutePath.count)
    }

    render() {
        return (
            <div>
                history：
                <button  onClick={ this.handClick }>history push count view</button>
            </div>
        );
    }
}

export default History;