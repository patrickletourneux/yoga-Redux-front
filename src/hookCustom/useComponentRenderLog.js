import { useEffect } from 'react';

const useComponentRenderLog = (componentName) => useEffect(() => {
  console.log(`${componentName} NOUVEAU RENDU`);
});

export default useComponentRenderLog;
