import React from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
  return (
    <div>
      <ChildComponent name="React Props Example" />
    </div>
  );
}

export default ParentComponent;