import useBaseUrl from '@docusaurus/useBaseUrl';
import React from 'react';

export const DownloadLink = () => {
  const csvUrl = useBaseUrl('dataset.csv'); 
  return <a target="_blank" rel="noopener noreferrer" href={csvUrl} download>Scarica il dataset</a>;
};
