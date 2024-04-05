import {FaArrowLeft} from 'react-icons/fa'

import './index.css'

const BackBtn = props => {
  const {history} = props
  const onClickBtn = () => {
    history.push('/')
  }

  return (
    <button type="button" className="back-btn" onClick={onClickBtn}>
      <FaArrowLeft /> Back
    </button>
  )
}

export default BackBtn
