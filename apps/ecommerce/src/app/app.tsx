import * as React from 'react';
import NxWelcome from './nx-welcome';
import { Link, Route, Routes } from 'react-router-dom';

const Account = React.lazy(() => import('account/Module'));
const Search = React.lazy(() => import('search/Module'));
const Checkout = React.lazy(() => import('checkout/Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/account">Account</Link>
        </li>

        <li>
          <Link to="/search">Search</Link>
        </li>
        <li>
          <Link to="/checkout">Checkout</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<NxWelcome title="ecommerce" />} />
        <Route path="/account" element={<Account />} />

        <Route path="/search" element={<Search />} />

        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
