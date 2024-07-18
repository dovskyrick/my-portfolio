import React from 'react';
import SketchfabModel from './SketchfabModel';
import './ThreeDProjects.css';

const ThreeDProjects = () => {
  const models = [
    { id: 1, modelId: 'c9e4dd7ccd274806b6ec26d0794a8044' }, // Replace with actual Sketchfab model IDs
    { id: 2, modelId: 'c9e4dd7ccd274806b6ec26d0794a8044' },
    { id: 3, modelId: 'c9e4dd7ccd274806b6ec26d0794a8044' },
    { id: 4, modelId: 'c9e4dd7ccd274806b6ec26d0794a8044' },
    // Add more models as needed
  ];

  return (
    <div className="three-d-projects-container">
      {models.map((model) => (
        <div key={model.id} className="three-d-project-item">
          <SketchfabModel modelId={model.modelId} />
        </div>
      ))}
    </div>
  );
};

export default ThreeDProjects;
