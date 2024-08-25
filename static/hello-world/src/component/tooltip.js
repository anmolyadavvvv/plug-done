import React from 'react';

const Tooltip = ({ visible, content }) => {
  if (!visible) return null;

  return <div className="tooltips">{content}</div>;
};

export default Tooltip;
