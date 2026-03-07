import React from 'react';
import ProjectDetailPage from '../components/ProjectDetailPage';
import { getProjectDetail } from '../data/projectDetails';

const Netflix = () => {
  const detail = getProjectDetail('netflix');

  return <ProjectDetailPage {...detail} />;
};

export default Netflix;
