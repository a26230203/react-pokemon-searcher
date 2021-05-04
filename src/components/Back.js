import React from 'react'

class Back extends React.Component {

  render() {
    return (

          <div className="back-image">
              <img src={this.props.img} />
          </div>

    )
  }
}

export default Back
