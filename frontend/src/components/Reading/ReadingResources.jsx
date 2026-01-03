import React from 'react';
import './ReadingResources.css';

const ReadingResources = ({ activeResource }) => {
  const resources = [
    {
      id: 'tadoku',
      name: 'Tadoku Free Books',
      url: 'https://tadoku.org/japanese/en/free-books-en/'
    },
    {
      id: 'nhk',
      name: 'NHK Learn Japanese',
      url: 'https://www3.nhk.or.jp/nhkworld/en/learnjapanese/'
    }
  ];

  const currentResource = resources.find(r => r.id === activeResource);

  return (
    <>
      <div className="iframe-header">
        <span className="current-site">
          {currentResource.name}
        </span>
        <a 
          href={currentResource.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="open-external-button"
        >
          Open in New Tab ↗
        </a>
      </div>
      <iframe
        src={currentResource.url}
        title={currentResource.name}
        className="reading-iframe"
        sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
      />
    </>
  );
};

export const ReadingSidebar = ({ activeResource, setActiveResource }) => {
  const resources = [
    {
      id: 'tadoku',
      name: 'Tadoku Free Books'
    },
    {
      id: 'nhk',
      name: 'NHK Learn Japanese'
    }
  ];

  return (
    <nav className="reading-sidebar-nav">
      {resources.map(resource => (
        <button
          key={resource.id}
          className={`reading-sidebar-item ${activeResource === resource.id ? 'active' : ''}`}
          onClick={() => setActiveResource(resource.id)}
        >
          {resource.name}
        </button>
      ))}
    </nav>
  );
};

export default ReadingResources;
