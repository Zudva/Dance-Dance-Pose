import React, {Component} from 'react'
import {connect} from 'react-redux'

class Bubble extends Component {
  constructor(props) {
    super(props)
    this.state = {x: 0, y: 0}
  }

  componentDidMount() {
    this.setState({
      x: this.props.xBubble,
      y: this.props.yBubble
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.yBubble !== this.props.yBubble ||
      prevProps.xBubble !== this.props.xBubble
    ) {
      this.setState({
        x: this.props.xBubble,
        y: this.props.yBubble
      })
    }
  }

  render() {
    return (
      <div className="bubble">
        <img
          src="/images/hand-ball.gif"
          width="140"
          style={{
            position: 'fixed',
            top: this.state.y,
            right: this.state.x
          }}
        />
      </div>
    )
  }
}

const mapState = state => ({
  xBubble: state.bubble.xCoordinate,
  yBubble: state.bubble.yCoordinate
})

export default connect(mapState)(Bubble)
