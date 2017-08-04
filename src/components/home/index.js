import React, { Component } from 'react';

import styles from './index.scss'

class Home extends Component {
    render(){
        return(
            <div>
                <div className={styles.title + ' '+ styles.title2} >Home</div>
            </div>
        )
    }
}

export default Home