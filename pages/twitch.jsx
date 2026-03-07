import React from 'react';
import ProjectDetailPage from '../components/ProjectDetailPage';
import { getProjectDetail } from '../data/projectDetails';

const Twitch = () => {
  const detail = getProjectDetail('twitch');

  return <ProjectDetailPage {...detail} />;
};

export default Twitch;
