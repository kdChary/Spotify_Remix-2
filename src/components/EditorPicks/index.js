import {Component} from 'react'
import Cookies from 'js-cookie'

import './index.css'

const apiStateConst = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class EditorPicks extends Component {
  state = {playList: {}, fetchStatus: apiStateConst.initial}

  componentDidMount() {
    this.getEditorPicks()
  }

  modifyData = data => ({
    id: data.id,
    name: data.name,
    imageUrl: data.images[0].url,
  })

  getEditorPicks = async () => {
    this.setState({fetchStatus: apiStateConst.inProgress})

    const url = ' https://apis2.ccbp.in/spotify-clone/featured-playlists'
    const token = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }

    const response = await fetch(url, options)
    if (response.ok) {
      this.setState({fetchStatus: apiStateConst.success})

      const data = await response.json()
      const newData = data.playlists.items.map(item => this.modifyData(item))
      console.log(newData)
    } else {
      this.setState({fetchStatus: apiStateConst.failure})
      console.log('error')
    }
  }

  render() {
    return (
      <ul className="editors-pick">
        <li>Here comes the list...</li>
      </ul>
    )
  }
}

export default EditorPicks
