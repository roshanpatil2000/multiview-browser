import YouTube from 'react-youtube';

function App() {
  const viewCont = 32;
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
  const url = `https://www.youtube.com/embed/nyUfP6LfNYM?autoplay=1&mute=1&loop=1&playlist=nyUfP6LfNYM&vq=small`
  const url2 = `https://youtu.be/yPNqvNdylX4`;
  const url3 = `https://youtu.be/pOGfp5ukHKM`;
  const video = `https://www.youtube.com/shorts/nyUfP6LfNYM?feature=share`
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


      {/* video-2 */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(8, 1fr)', gap: '10px' }}>
        {Array.from({ length: viewCont }, (_, i) => (
          <YouTube key={i} opts={opts} />
        ))}
      </div>
    </main>
  )
}

export default App
