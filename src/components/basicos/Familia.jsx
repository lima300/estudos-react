import React, { cloneElement } from 'react';

export default (props) => (
  <div>
    {props.children.map((child, i) =>
      cloneElement(child, { ...props, key: i })
    )}
  </div>
);
