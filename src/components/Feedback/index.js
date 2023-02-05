// Write your React code here.
import {Component} from 'react'

import Reaction from '../Reaction'
import Response from '../Response'

import './index.css'

class Feedback extends Component {
  state = {status: true}

  onClickChangeStatus = id => {
    this.setState(id === 2 ? {status: false} : {status: true})
  }

  render() {
    const {resources} = this.props
    const {emojis} = resources
    const {status} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          {status ? (
            <div>
              <h1 className="heading">
                How satisfied are you with our customer support performance?
              </h1>
              <ul className="reactions-container">
                {emojis.map(each => (
                  <Reaction
                    feedback={each}
                    key={each.id}
                    onClickChangeStatus={this.onClickChangeStatus}
                  />
                ))}
              </ul>
            </div>
          ) : (
            <Response reactionResponse={resources} />
          )}
        </div>
      </div>
    )
  }
}

export default Feedback
