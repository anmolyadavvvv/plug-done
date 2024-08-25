import React from 'react';
import formatDate from '../utils/util';
const TimelineItem = ({ type, date, devTime, revTime, onClick, children }) => {
  return (
    <div className="timeline-item">
      <p className='ak-27'>{type}</p>
      <div
        className="timeline-circle"
        onClick={onClick}
        data-dev-time={devTime || "N/A"}
        data-rev-time={revTime || "N/A"}
      >
        {date ? formatDate(date) : "N/A"}
      </div>
      <div className="timeline-content">{children}</div>
    </div>
  );
};

export default TimelineItem;
