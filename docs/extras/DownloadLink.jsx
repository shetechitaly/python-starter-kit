import React from 'react'
import useBaseUrl from '@docusaurus/useBaseUrl'

const DownloadLink = ({ label }) => {
  const csvUrl = useBaseUrl('soluzioni-progetto-finale.ipynb')
  return <a target="_blank" rel="noopener noreferrer" href={csvUrl} download>{label}</a>
}

export default DownloadLink
