import React, { Suspense } from 'react';

const Dashboard = React.lazy(() => import('./components/Dashboard'));

function App() {
  return (
    <Suspense fallback={<h3>Loading Dashboard...</h3>}>
      <Dashboard />
    </Suspense>
  );
}

export default App;