import React from 'react';
import ProjectDetailPage from '../components/ProjectDetailPage';
import { getProjectDetail } from '../data/projectDetails';

const Crypto = () => {
  const detail = getProjectDetail('crypto');

  return <ProjectDetailPage {...detail} />;
};

export default Crypto;
