import React, { Component } from 'react';

import styles from './index.scss'
import styles2 from './index.css'


class Home extends Component {
    render(){
        return(
            <div>
                <div className={styles.title + ' '+ styles2.title} >Home</div>
            </div>
        )
    }
}

export default Home