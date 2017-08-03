import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { Link } from 'react-router-dom'

import StoreName from '../../stores/name'

@inject(StoreName.topics)
@observer
class Topics extends Component {
    componentDidMount(){
       this.props[StoreName.topics].getTopics()
    }

    render() {
        const topics = this.props[StoreName.topics].topics
        return (
            <div>
                <h5 className="">Topics</h5>
                <div className="">
                    {topics.map((topic, index) => (
                        <article className="media" key={`topics-${index}`}>
                        <figure className="media-left">
                            <p className="image is-32x32">
                                <img src={topic.author.avatar_url} alt="" />
                            </p>
                        </figure>
                        <div className="media-content">
                            <div className="content">
                            <Link to={`/topic/${topic.id}`}>{topic.title}</Link>
                            </div>
                            <nav className="level">
                            <div className="level-left">
                                <span>{topic.reply_count}</span> / <span>{topic.visit_count}</span>
                            </div>
                            </nav>
                        </div>
                        </article>
                    ))}
                </div>
            </div>
        );
    }
}

export default Topics