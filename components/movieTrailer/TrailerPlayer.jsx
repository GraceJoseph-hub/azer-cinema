
const TrailerPlayer = ({ videoUrl }) => {
  return (
    <div className="trailer-container">
      <iframe
        width="100%"
        height="500"
        src={videoUrl}
        title="Movie Trailer"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default TrailerPlayer;
