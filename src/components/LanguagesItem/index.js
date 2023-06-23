import './index.css'

const LanguagesItem = props => {
  const {languageDetails} = props
  const {imageUrl, imageAltText} = languageDetails

  return (
    <>
      <li className="container">
        <img src={imageUrl} className="image" alt={`${imageAltText}`} />
      </li>
    </>
  )
}
export default LanguagesItem
