import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import IssueListPage from '../pages/IssueListPage';
import IssueDetailPage from '../pages/IssueDetailPage';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<IssueListPage />} />
        <Route path='/issues/:id' element={<IssueDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}
