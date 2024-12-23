import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [intervalCount, setIntervalCount] = useState(0);
  const [url, setUrl] = useState('');
  const [scanResult, setScanResult] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const intervalInSeconds = 5;
    const maxIntervals = 5;

    const intervalId = setInterval(() => {
      setIntervalCount((count) => count + 1);
      if (intervalCount === maxIntervals) {
        window.location.href = '/login';
        clearInterval(intervalId);
      }
    }, intervalInSeconds * 1000);

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setScanResult('');

    try {
      const response = await fetch('http://localhost:5000/scan', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
      });

      const data = await response.json();

      if (response.ok) {
        setScanResult(data.result);
      } else {
        setScanResult(data.error || 'An error occurred during the scan.');
      }
    } catch (error) {
      setScanResult('Failed to connect to the scanner backend.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <header className="site-header bg-light py-3">
        <div className="container">
          <a className="site-header-text text-decoration-none text-dark" href="/">
            <i className="bi-box"></i>
            <span> Website Scanner</span>
          </a>
          <ul className="social-icon d-flex list-unstyled">
            <li>
              <a href="https://www.instagram.com" className="bi bi-instagram mx-2"></a>
            </li>
            <li>
              <a href="#" className="bi bi-twitter mx-2"></a>
            </li>
            <li>
              <a href="#" className="bi bi-whatsapp mx-2"></a>
            </li>
          </ul>
          <button
            className="btn btn-outline-primary"
            data-bs-toggle="modal"
            data-bs-target="#subscribeModal"
          >
            Notify me <i className="bi-arrow-right"></i>
          </button>
        </div>
      </header>

      <section className="hero-section bg-dark text-white py-5">
        <div className="container text-center">
          <div className="video-wrap">
            <video autoPlay loop muted className="custom-video">
              <source src="/videos/video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      <section className="link-bar-section py-5">
        <div className="container text-center">
          <h2>Enter a URL to Scan</h2>
          <form onSubmit={handleSubmit} className="my-3">
            <div className="input-group">
              <input
                type="url"
                placeholder="https://example.com"
                required
                className="form-control"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
              <button type="submit" className="btn btn-primary">
                {loading ? 'Scanning...' : 'Scan'}
              </button>
            </div>
          </form>
          {scanResult && (
            <div className="mt-4">
              <h4>Scan Result:</h4>
              <pre>{scanResult}</pre>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default App;
