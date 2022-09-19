import { useEffect } from 'react';

const componentRenderLog = (componentName) => useEffect(() => {
  console.log(`${componentName} NOUVEAU RENDU`);
});

export default componentRenderLog;
