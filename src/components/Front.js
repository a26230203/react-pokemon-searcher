import React from 'react'

class Front extends React.Component {

  render() {
    return (

          <div className="front-image">
              <img src={this.props.img} />
          </div>

    )
  }
}

export default Front
