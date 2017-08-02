import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class About extends Component {
    render() {
        return (
            <div>
                <div>
                    about
                </div>
                <div className="">
                    <Link to="/">birds</Link>
                </div>
            </div>
        )
    }
};

export default About