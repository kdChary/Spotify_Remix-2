import {Component} from 'react'
import Cookies from 'js-cookie'

import './index.css'
import Header from '../Header'
import BackBtn from '../BackBtn'

const apiConstant = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Album extends Component {
  state = {fetchStatus: apiConstant.initial, albumData: []}

  componentDidMount() {
    this.getAlbumData()
  }

  getAlbumData = async () => {
    this.setState({fetchStatus: apiConstant.inProgress})
    const token = Cookies.get('jwt_token')
    const {match} = this.props
    const {params} = match
    const {id} = params

    const url = `https://apis2.ccbp.in/spotify-clone/album-details/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
  }

  render() {
    return (
      <>
        <Header />
        <div className="album-bg" data-testid="albumBg">
          <BackBtn />
        </div>
      </>
    )
  }
}

export default Album
