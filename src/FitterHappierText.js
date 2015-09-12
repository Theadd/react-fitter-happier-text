
import React, { Component } from 'react'
import { debounce } from 'lodash'

const svgStyles = {
  width: '100%',
  maxHeight: '100%',
  fill: 'currentColor',
  overflow: 'visible',
  boxSizing: 'border-box'
}
const textStyles = {
  fontFamily: 'inherit',
  fontSize: '1rem',
  fontWeight: 'inherit',
  textAnchor: 'middle',
  boxSizing: 'border-box'
}

class FitterHappierText extends Component {

  constructor (props) {
    super(props)
    this.resize = debounce(this.resize.bind(this))
    this.state = {
      width: 256,
      height: 24
    }
  }

  resize () {
    const [ width, height ] = (
      ({ width, height }) => [
        Math.round(width),
        Math.round(height)
      ]
    )(React.findDOMNode(this.refs.text).getBBox())

    !(this.state.width === width && this.state.height === height) && this.setState({ width, height })
  }

  componentDidMount () {
    this.resize()
  }

  componentWillReceiveProps () {
    this.resize()
  }

  render () {
    const { text, baseline=16, paddingY=0, style={}, ...props } = this.props
    const { width, height } = this.state

    return (
      <svg viewBox={ `0 0 ${ width } ${ height + paddingY }` } style={{ ...svgStyles, ...style }} { ...props }>
        <text ref='text' x='50%' y={ baseline } style={ textStyles }>
          { text }
        </text>
      </svg>
    )
  }

}

FitterHappierText.propTypes = {
  text: React.PropTypes.string,
  baseline: React.PropTypes.number,
  paddingY: React.PropTypes.number
}

export default FitterHappierText
