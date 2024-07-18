import React from 'react';

const SketchfabModel = ({ modelId }) => {
  const embedUrl = `https://sketchfab.com/models/${modelId}/embed`;

  return (
    <div style={{
      position: 'relative',
      width: '100%',
      paddingBottom: '100%',
      overflow: 'hidden',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <iframe
        title="sketchfab-model"
        src={embedUrl}
        frameBorder="0"
        allow="autoplay; fullscreen; vr"
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
          border: 'none'
        }}
      ></iframe>
    </div>
  );
};

export default SketchfabModel;
