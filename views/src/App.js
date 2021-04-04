import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MainNavigation from './components/Navigation/MainNavigation';
import ProductsPage from './pages/Products';
import './App.css';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <MainNavigation>
            <main className="main-content">
              <Route path="/" component={ProductsPage}></Route>
            </main>
          </MainNavigation>
        </React.Fragment>
      </BrowserRouter>
    );
    
  }
}

export default App;
