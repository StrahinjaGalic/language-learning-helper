import React, { useState } from 'react';
import './ReadingLayout.css';

const ReadingLayout = ({ children }) => {
  const [activeResource, setActiveResource] = useState('tadoku');

  return (
    <div className="reading-layout">
      <aside className="reading-sidebar">
        {React.Children.map(children, child => {
          if (child && child.type && child.type.name === 'ReadingSidebar') {
            return React.cloneElement(child, { activeResource, setActiveResource });
          }
          return null;
        })}
      </aside>
      <main className="reading-content">
        {React.Children.map(children, child => {
          if (child && child.type && child.type.name !== 'ReadingSidebar') {
            return React.cloneElement(child, { activeResource });
          }
          return null;
        })}
      </main>
    </div>
  );
};

export default ReadingLayout;
