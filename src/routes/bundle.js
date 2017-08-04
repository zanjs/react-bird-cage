import { Component } from 'react'

/**
 * 调用示例
<Bundle load={require('bundle-loader?lazy!./somefile.js')}>
    {(Cmp) => <Cmp></Cmp>}
</Bundle>
 * 
 * @class Bundle
 * @extends {Component}
 */
class Bundle extends Component {
  constructor() {
    super()
    this.state = {
      mod: null
    }
  }

  async componentDidMount() {
    const {default: mod} = await this.props.load()

    this.setState({
      mod: mod.default || mod
    })
  }

  render() {
    return (
      this.state.mod ? this.props.children(this.state.mod) : null
    )
  }
}

export default Bundle