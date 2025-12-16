import { useEffect } from 'react';
import YouTube from 'react-youtube';

function App() {
  const viewCont = 16; // Number of YouTube videos to display
  const opts = {
    height: '300',
    width: '200',
    playerVars: {
      autoplay: 1,
      mute: 1,
      loop: 1,
      playlist: 'nyUfP6LfNYM',
      vq: 'small',
      controls: 0
    },
  };


  const opts2 = {
    height: '300',
    width: '200',
    playerVars: {
      autoplay: 1,
      mute: 1,
      loop: 1,
      playlist: 'RU0c1WRC9MI',
      vq: 'small',
      controls: 0
    },
  };

  const short1 = `https://www.youtube.com/shorts/nyUfP6LfNYM?autoplay=1&mute=1&loop=1&vq=small`
  const short2 = `https://www.youtube.com/embed/RU0c1WRC9MI?autoplay=1&mute=1&loop=1&vq=small`



  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.reload();
    }, 60000); // Reload the page every 60 seconds
    return () => clearTimeout(timer);
  }, []);


  return (
    <main>
      {/* video-1 */}
      {/* {Array.from({ length: viewCont }, (_, i) => (
        <iframe
          key={i}
          width="200"
          height="400"
          src={url}
          title="midnight lofi vibes ✨ study, code &amp; relax | #music #chill #lofi #lofihiphopbeats #lofibeats"
          frameborder="0"
          allow="accelerometer; autoplay; controls;clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
        />
      ))} */}


      {/* short-1 */}
      {/* <div style={{ display: 'grid', gridTemplateColumns: 'repeat(8, 1fr)', gap: '10px' }}>
        {Array.from({ length: viewCont }, (_, i) => (
          <YouTube key={i} opts={opts} />
        ))}
      </div> */}


      {/* short-2*/}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(8, 1fr)', gap: '10px' }}>
        {Array.from({ length: viewCont }, (_, i) => (
          <YouTube key={i} opts={opts2} />
        ))}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(8, 1fr)', gap: '10px' }}>
        {Array.from({ length: viewCont }, (_, i) => (
          <YouTube key={i} opts={opts2} />
        ))}
      </div>
    </main>
  )
}

export default App
