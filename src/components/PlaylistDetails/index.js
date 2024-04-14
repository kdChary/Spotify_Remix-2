import {Component} from 'react'
import Cookies from 'js-cookie'

import './index.css'
import Header from '../Header'
import BackBtn from '../BackBtn'

const apiStatusConst = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class PlaylistDetails extends Component {
  state = {playListData: {}, apiFetchStatus: apiStatusConst.initial}

  componentDidMount() {
    this.getPlayListData()
  }

  modifyPlayListData = data => ({
    followers: data.followers.total,
    id: data.id,
    imageUrl: data.images[0].url,
    name: data.name,
    tracks: data.tracks.items.map(eachTrack => ({
      addedAt: eachTrack.added_at,
      album: eachTrack.track.album.name,
      artist: eachTrack.track.artists.map(artist => ({
        name: artist.name,
      })),
      id: eachTrack.track.id,
      name: eachTrack.track.name,
      trackImageUrl: eachTrack.track.album.images[0].url,
      duration: eachTrack.track.duration_ms,
      popularity: eachTrack.track.popularity,
      previewUrl: eachTrack.track.preview_url,
    })),
  })

  getPlayListData = async () => {
    this.setState({apiFetchStatus: apiStatusConst.inProgress})

    const token = Cookies.get('jwt_token')
    const {match} = this.props
    const {params} = match
    const {id} = params

    const url = `https://apis2.ccbp.in/spotify-clone/playlists-details/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    const response = await fetch(url, options)

    if (response.ok) {
      const data = await response.json()

      const modifiedData = this.modifyPlayListData(data)
      this.setState({
        apiFetchStatus: apiStatusConst.success,
        playListData: modifiedData,
      })

      //   console.log(playListData)
    } else {
      this.setState({apiFetchStatus: apiStatusConst.failure})
    }
  }

  render() {
    return (
      <>
        <Header />
        <div>
          <BackBtn />
          PlaylistDetails
        </div>
      </>
    )
  }
}

export default PlaylistDetails
