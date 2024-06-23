import './App.css';
import Navbar from './components/Navbar';
import Article from './components/Article';
import AddArticleForm from './components/AddArticleForm';
import ArticleList from './components/ArticleList';
import UpdateArticleForm from './components/UpdateArticleForm';
import dashboard from './components/dashboard';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
      <Navbar />     
      <Routes>
        <Route path="/dashboard" exact Component={dashboard} />
      </Routes>
      <Routes>
        <Route path="/add" exact Component={AddArticleForm} />
      </Routes>
      <Routes>
        <Route path="/ArticleList" exact Component={ArticleList} />
      </Routes>
      <Routes>
        <Route path="/update/:id" exact Component={UpdateArticleForm} />
      </Routes>
      <Routes>
        <Route path="/article/:id" exact Component={Article} />
      </Routes>
      

      </div>
    </Router>
    
  );
}

export default App;
