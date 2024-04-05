import './index.css'
import BackBtn from '../BackBtn'

const NotFound = props => {
  const {history} = props
  return (
    <div className="not-found-bg" data-testid="notFoundBg">
      <BackBtn history={history} />
      <img
        src="https://res.cloudinary.com/dgga8cymk/image/upload/v1712285974/1Spotify/404-sm.png"
        alt="not-found"
        className="not-found-img"
      />
      <h1 className="not-found-title">Page Not Found</h1>
    </div>
  )
}

export default NotFound
