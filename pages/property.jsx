import React from 'react';
import ProjectDetailPage from '../components/ProjectDetailPage';
import { getProjectDetail } from '../data/projectDetails';

const Property = () => {
  const detail = getProjectDetail('property');

  return <ProjectDetailPage {...detail} />;
};

export default Property;
