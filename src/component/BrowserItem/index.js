const BrowserItem = props => {
  const {each, onDelete} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = each
  const onDeleteHistory = () => {
    onDelete(id)
  }
  return (
    <li>
      <p>{timeAccessed}</p>
      <img src={logoUrl} alt="domain logo" />
      <p>{title}</p>
      <p>{domainUrl}</p>
      <button data-testid="delete" onClick={onDeleteHistory}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default BrowserItem
