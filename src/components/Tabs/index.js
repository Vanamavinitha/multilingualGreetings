import './index.css'

const Tabs = props => {
  const {tabDetails, isActive, clickTabItem} = props
  const {id, buttonText} = tabDetails

  const buttonClassName = isActive ? 'active-tab-btn' : ''

  const onClickButton = () => {
    clickTabItem(id)
  }

  return (
    <li className="container">
      <button
        type="button"
        onClick={onClickButton}
        className={`tab-btn ${buttonClassName}`}
      >
        {buttonText}
      </button>
    </li>
  )
}
export default Tabs
