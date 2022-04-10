import React from 'react';
const Entry = ({ emoji, title, desc }) => 
  <div className="term">
    <dt>
      <span className="emoji" role="img" aria-label={title}>{emoji}</span>
      <span>{title}</span>
    </dt>
    <dd>{desc}</dd>
  </div>;

export default Entry;

