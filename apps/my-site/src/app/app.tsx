import React, { useState, useEffect } from 'react';

import './app.scss';

import { Route, Link } from 'react-router-dom';
import { PageTitle } from '@nrwl/ui-header';
import { ApiResponse, API_URL } from '@nrwl/api-interface';

export const App = () => {
  const [apiResponse, setApiResponse] = useState<ApiResponse>({
    message: 'Loading...'
  });
  useEffect(() => {
    fetch(API_URL)
      .then(response => response.json())
      .then(setApiResponse);
  }, []);
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./${fileName}.${style} file.
   */
  return (
    <div className="app">
      <PageTitle />
      <header className="flex">
        <img
          alt=""
          width="75"
          src="https://nx.dev/assets/images/nx-logo-white.svg"
        />
      </header>
      <main>
        <h1>{apiResponse.message}</h1>
      </main>

      {/* START: routes */}
      {/* These routes and navigation have been generated for you */}
      {/* Feel free to move and update them to fit your needs */}
      <br />
      <hr />
      <br />
      <div role="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/page-2">Page 2</Link>
          </li>
        </ul>
      </div>
      <Route
        path="/"
        exact
        render={() => (
          <div>
            This is the generated root route.{' '}
            <Link to="/page-2">Click here for page 2.</Link>
          </div>
        )}
      />
      <Route
        path="/page-2"
        exact
        render={() => (
          <div>
            <Link to="/">Click here to go back to root page.</Link>
          </div>
        )}
      />
      {/* END: routes */}
    </div>
  );
};

export default App;
