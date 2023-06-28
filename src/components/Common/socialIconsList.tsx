import React from 'react';

export default ({ cn }: { cn: string }) => {
  return (
    <div className={cn}>
      <a href="https://github.com/iamstanlee" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-github"></i>
      </a>
      <a href="https://twitter.com/iamstanlee_" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-twitter"></i>
      </a>
      <a href="https://www.linkedin.com/in/iamstanlee/" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-linkedin"></i>
      </a>
      <a href="hhttps://medium.com/@iamstanlee" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-medium"></i>
      </a>
    </div>
  );
};
