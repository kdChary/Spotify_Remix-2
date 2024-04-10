import {Component} from 'react'

import './index.css'
import Header from '../Header'
import EditorPicks from '../EditorPicks'
import Categories from '../Categories'
import NewReleases from '../NewReleases'

// TODO: add failure view

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
            <EditorPicks />
          </div>
          <div className="playlist-container">
            <Categories />
          </div>
          <div className="playlist-container">
            <NewReleases />
          </div>
        </div>
      </>
    )
  }
}

export default Home
