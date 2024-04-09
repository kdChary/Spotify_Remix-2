import {Component} from 'react'

import './index.css'
import Header from '../Header'
import EditorPicks from '../EditorPicks'
import Loading from '../LoadingView'

class Home extends Component {
  state = {}

  // componentDidMount(){
  //     this.get
  // }

  render() {
    return (
      <>
        <Header />
        <div className="home-bg" data-testid="homeBg">
          <div className="playlist-container">
            <h3 className="playlist-heading">Editor Picks</h3>
            <EditorPicks />
            <Loading />
          </div>
        </div>
      </>
    )
  }
}

export default Home
