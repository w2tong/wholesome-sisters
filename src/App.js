import './App.css';
import imgs from './images.js';
import Header from './Header.js';
import NewsFeed from './NewsFeed.js';
import MemeberCarousel from './MemberCarousel.js';
import MemeberList from './MemberList.js';
import Footer from './Footer.js';
import React from 'react';

function App() {
  return (
    <div className="height">
      <Header />
      <section className="height">
        <row className="row g-0">
          <div className="col-lg-7">
            <NewsFeed />
          </div>
          <div className="col-lg-5">
            <MemeberCarousel />
            <MemeberList />
          </div>
        </row>
      </section>
      <Footer />
    </div>
  );
}

export default App;
