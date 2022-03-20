import './index.css'

const Pagination = props => {
  const {eachone, numberClickedData, isActive} = props

  const stylngbutton = isActive ? 'firstbutton' : 'firstbutton1'

  const buttonOneClicked = () => {
    numberClickedData(eachone)
  }

  return (
    <button type="button" onClick={buttonOneClicked} className={stylngbutton}>
      {eachone}
    </button>
  )
}
export default Pagination
