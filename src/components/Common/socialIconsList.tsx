import React from 'react';

export default ({ cn }: { cn: string }) => {
  return (
      <div className={cn}>
          <a href="https://github.com/iamstanlee" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/iamstanlee/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
          </a>
          <a href="mailto:hey@stanlee.dev" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-envelope"></i>
          </a>
      </div>
  );
};
