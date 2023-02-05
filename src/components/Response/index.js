import './index.css'

const Response = props => {
  const {reactionResponse} = props
  const {loveEmojiUrl} = reactionResponse
  return (
    <li className="response-container">
      <img className="love-img" src={loveEmojiUrl} alt="love emoji" />
      <h1 className="thank-you-text">Thank You</h1>
      <p className="feedback-response-text">
        We will use your feedback to improve our customer support performance.
      </p>
    </li>
  )
}

export default Response
