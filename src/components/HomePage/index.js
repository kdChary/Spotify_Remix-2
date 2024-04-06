import {Component} from 'react'
import Header from '../Header'

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
          Render this
        </div>
      </>
    )
  }
}

export default Home
