import './App.css'
import Header from './Header'
import NewsFeed from './NewsFeed/NewsFeed'
import MemeberCarousel from './MemberCarousel'
import MemeberList from './RosterList'
import Footer from './Footer'

function App () {
  return (
    <div className="height">
      <Header />
      <section className="height">
        <div className="row g-0">
            <div className="col-lg-7">
            <NewsFeed />
          </div>
          <div className="col-lg-5">
            <MemeberCarousel />
            <MemeberList />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default App
