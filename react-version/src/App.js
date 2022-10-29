import './App.css';
import Navigation from './components/Navigation';
import Profile from './components/Profile';
import TweetForm from './components/TweetForm';
import TweetList from './components/TweetList';

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Profile></Profile>
      <main className="container">
        <TweetForm></TweetForm>
        <TweetList></TweetList>
      </main>
    </div>
  );
}

export default App;
