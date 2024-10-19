import React from 'react';
import ReactDOM from 'react-dom';

const RemoteButton1 = React.lazy(() => import('remote1/Button'));
const RemoteButton2 = React.lazy(() => import('remote2/Button'));
const RemoteAlert = React.lazy(() => import('remote2/Alert'));

const App = () => (
  <div>
    <h1>Host Application</h1>
    <React.Suspense fallback="Loading Button 1...">
      <RemoteButton1 />
    </React.Suspense>
    <React.Suspense fallback="Loading Button 2...">
      <RemoteButton2 />
    </React.Suspense>
    <React.Suspense fallback="Loading Alert...">
      <RemoteAlert />
    </React.Suspense>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));

