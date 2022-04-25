import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/common/Header';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from './components/Dashboard';
import AddShow from './components/shows/AddShow';
import { createBrowserHistory } from "history";
import store from './store.js'
import { Provider } from 'react-redux';
import UpdateShow from './components/shows/UpdateShow';

function App() {
  const history = createBrowserHistory();
  return (
    <div className="App">
      <Provider store={store}>
      <Router>
        <Header/>
            <Route path="/dashboard" component = { Dashboard } />
            <Route path="/addShow" component = { AddShow } />
            <Route path="/updateShow/:id" component = { UpdateShow } />
      </Router>
      </Provider>
    </div>
  );
}

export default App;
