import { Routes as LibraryRoutes, Route } from 'react-router-dom';
import React from 'react';
import TeamPage from './screens/TeamPage';
import HelpPage from './screens/HelpPage';
import CommunityPage from './screens/CommunityPage';

function Routes() {
  return (
    <LibraryRoutes>
      <Route path='/' element={<TeamPage />} />
      <Route path='/team' element={<TeamPage />} />
      <Route path='/help' element={<HelpPage />} />
      <Route path='/community' element={<CommunityPage />} />
      <Route path='*' element={<CommunityPage />} />
    </LibraryRoutes>
  );
}

export default Routes;
