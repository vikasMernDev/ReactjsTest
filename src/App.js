import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Store from './Redux/Store';
import Dashboard from './components/Dashboard/Dashboard';
import User from './components/Dashboard/User';

function App() {
  return (
    <Provider store={Store}>
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard/>}></Route>
          <Route path='/user/edit/:code' element={<User/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
    </Provider>
  );
}

export default App;
