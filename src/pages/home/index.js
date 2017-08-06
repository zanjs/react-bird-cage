import React, { Component } from 'react';
import Helmet from 'react-helmet'

import styles from './index.scss'

class Home extends Component {
    render(){
        return(
            <div>
                <Helmet>
                <title>Home</title>
                <meta name="description" content="React Home Page" />
                </Helmet>
                <div className={styles.title + ' '+ styles.title2} >Home</div>
            </div>
        )
    }
}

export default Home