const BgFilmPage = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <iframe
        src="https://player.vimeo.com/video/1021627312?autoplay=1&muted=1&background=1&badge=0&autopause=0&player_id=0&app_id=58479"
        className="absolute top-0 left-0 w-full h-full"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        title="Background Video"
      ></iframe>
    </div>
  );
};

export default BgFilmPage;
