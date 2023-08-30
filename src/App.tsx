import React from 'react';
import AppRouter from './routes/Router';
import { IssueProvider } from './context/issueContext';

function App() {
  return (
    <IssueProvider>
      <AppRouter />
    </IssueProvider>
  );
}

export default App;
