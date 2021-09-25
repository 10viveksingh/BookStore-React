import logo from './logo.svg';
import './App.css';
import Header from './Header'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './Login'
import Register from './Register'
import AddProduct from './AddProduct'
import UpdateProduct from './UpdateProduct'
import Protected from './Protected'
import ProductList from './ProductList';
import BookDetail from './BookDetail';
import ComparePrice from './ComparePrice';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/add">
            <AddProduct />
          </Route>
          <Route path="/update">
            <UpdateProduct />
          </Route>
          <Route path="/detail/:id">
            <BookDetail />
          </Route>
          <Route path="/compare">
            <ComparePrice />
          </Route>
          <Route path="/">
            <ProductList />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}































export default App;
