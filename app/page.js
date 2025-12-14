'use client';

import { useState, useEffect } from 'react';
import './globals.css';

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="container">
      <div
        className="cursor-glow"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
        }}
      />

      <div className="grid-background" />

      <div className={`content ${isLoaded ? 'loaded' : ''}`}>
        <header className="header">
          <div className="glitch-wrapper">
            <h1 className="glitch" data-text="NEURAL INTERFACE">NEURAL INTERFACE</h1>
          </div>
          <div className="status-bar">
            <span className="status-dot"></span>
            <span>SYSTEM ONLINE</span>
          </div>
        </header>

        <main className="main">
          <section className="hero">
            <div className="avatar-container">
              <div className="avatar">
                <div className="avatar-ring"></div>
                <div className="avatar-ring-2"></div>
                <div className="avatar-core">
                  <svg viewBox="0 0 100 100" className="avatar-icon">
                    <circle cx="50" cy="35" r="15" fill="currentColor"/>
                    <path d="M 25 70 Q 25 50 50 50 Q 75 50 75 70 L 70 80 Q 70 85 50 85 Q 30 85 30 80 Z" fill="currentColor"/>
                  </svg>
                </div>
              </div>
            </div>

            <div className="name-container">
              <h2 className="name">YOUR NAME</h2>
              <p className="tagline">Digital Architect • Future Builder • Code Artisan</p>
            </div>
          </section>

          <section className="about">
            <div className="section-header">
              <div className="section-line"></div>
              <h3>ABOUT.PROTOCOL</h3>
              <div className="section-line"></div>
            </div>

            <div className="about-grid">
              <div className="about-card">
                <div className="card-icon">⚡</div>
                <h4>CORE IDENTITY</h4>
                <p>
                  Navigating the intersection of technology and creativity,
                  transforming abstract concepts into tangible digital realities.
                  Passionate about pushing boundaries and exploring emerging technologies.
                </p>
              </div>

              <div className="about-card">
                <div className="card-icon">🚀</div>
                <h4>MISSION DIRECTIVE</h4>
                <p>
                  Building next-generation solutions that bridge the gap between
                  human imagination and machine capability. Focused on creating
                  experiences that feel both intuitive and extraordinary.
                </p>
              </div>

              <div className="about-card">
                <div className="card-icon">🔮</div>
                <h4>FUTURE VISION</h4>
                <p>
                  Committed to continuous evolution and learning in an ever-changing
                  digital landscape. Embracing innovation while maintaining a human-centered
                  approach to technology and design.
                </p>
              </div>
            </div>
          </section>

          <section className="stats">
            <div className="stat-card">
              <div className="stat-value">∞</div>
              <div className="stat-label">POSSIBILITIES</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">24/7</div>
              <div className="stat-label">INNOVATION</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">100%</div>
              <div className="stat-label">DEDICATION</div>
            </div>
          </section>

          <section className="contact">
            <div className="section-header">
              <div className="section-line"></div>
              <h3>CONNECT.NETWORK</h3>
              <div className="section-line"></div>
            </div>

            <div className="contact-links">
              <a href="#" className="contact-btn">
                <span className="btn-text">GITHUB</span>
                <span className="btn-glow"></span>
              </a>
              <a href="#" className="contact-btn">
                <span className="btn-text">LINKEDIN</span>
                <span className="btn-glow"></span>
              </a>
              <a href="#" className="contact-btn">
                <span className="btn-text">TWITTER</span>
                <span className="btn-glow"></span>
              </a>
              <a href="#" className="contact-btn">
                <span className="btn-text">EMAIL</span>
                <span className="btn-glow"></span>
              </a>
            </div>
          </section>
        </main>

        <footer className="footer">
          <div className="footer-line"></div>
          <p>© 2024 • NEURAL INTERFACE v1.0 • ALL SYSTEMS OPERATIONAL</p>
        </footer>
      </div>
    </div>
  );
}
