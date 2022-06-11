import './App.css'
import Header from './Header'
import NewsFeed from './NewsFeed/NewsFeed'
import MemeberCarousel from './MemberCarousel'
import MemeberList from './RosterList/RosterList'
import Footer from './Footer'

function App () {
  return (
    <div>
      <Header />
      <section>
        <div className="row g-0">
            <div className="col-lg-8">
            <NewsFeed />
          </div>
          <div className="col-lg-4">
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
