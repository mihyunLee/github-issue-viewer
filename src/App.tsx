import React from 'react';
import AppRouter from './routes/Router';
import { IssueProvider } from './context/issueContext';
import GlobalStyle from './styles/GlobalStyle';

function App() {
  return (
    <IssueProvider>
      <GlobalStyle />
      <AppRouter />
    </IssueProvider>
  );
}

export default App;
