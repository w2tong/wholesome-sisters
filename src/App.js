import './App.css';
import imgs from './images.js';
import Header from './Header.js';
import NewsFeed from './NewsFeed.js';
import MemeberCarousel from './MemberCarousel.js';
import MemeberList from './MemberList.js';
import Footer from './Footer.js';
import React from 'react';

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                test
                <NewsFeed />
                <MemeberCarousel />
                <MemeberList />
                <Footer />
            </div>
        );
    }
}

export default App;
