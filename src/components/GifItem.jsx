/* eslint-disable react/prop-types */
export const GifItem = ({ title, url }) => {
  const handleDownload = () => {
    fetch(url)
      .then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `${title}.gif`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
      .catch(error => console.error('Error downloading GIF:', error));
  };

  return (
    <div className="card">
      <img src={url} alt={title} />
      <p>{title}</p>
      <button className="btn-1" onClick={handleDownload}> Download</button>
    </div>
  );
};
