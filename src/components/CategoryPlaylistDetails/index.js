import './index.css'
import Header from '../Header'
import BackBtn from '../BackBtn'

const CategoryPlaylist = () => (
  <>
    <Header />
    <div className="category-playlist-bg" data-testid="categoryPlaylistBg">
      <BackBtn />
    </div>
  </>
)

export default CategoryPlaylist
