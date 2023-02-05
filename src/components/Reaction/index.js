import './index.css'

const Reaction = props => {
  const {feedback, onClickChangeStatus} = props
  const {id, name, imageUrl} = feedback

  const onClickUpdate = () => {
    onClickChangeStatus(id)
  }

  return (
    <li className="reaction-container">
      <button
        id="reaction"
        type="button"
        className="reaction-button"
        onClick={onClickUpdate}
      >
        <img className="logo" src={imageUrl} alt={name} />
      </button>
      <label htmlFor="reaction" className="reaction-text">
        {name}
      </label>
    </li>
  )
}

export default Reaction
