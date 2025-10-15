import demoVideoUrl from '../const/data';

function Demo() {
  return (
    <section className="page-section" id="demo" style={{textAlign: 'center'}}>
      <div className="section-header">
        <h2>Product Demo</h2>
        <p>Watch how BeCure works in action</p>
      </div>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <video
          src={demoVideoUrl}
          controls
          style={{ width: '100%', maxWidth: '900px', maxHeight: '650px', borderRadius: '16px', height: 'auto', objectFit: 'contain' }}
        />
      </div>
    </section>
  );
}

export default Demo;


