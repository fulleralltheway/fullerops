export function HeroVisual() {
  return (
    <div className="hero-visual-wrapper">
      {/* Ambient glow */}
      <div className="hero-vis-glow" />

      {/* Orbital ring */}
      <div className="hero-orbital" />

      {/* Connection lines */}
      <svg
        className="hero-connections"
        viewBox="0 0 500 520"
        preserveAspectRatio="xMidYMid meet"
      >
        <line className="hero-conn-line" x1="110" y1="90" x2="250" y2="240" />
        <line className="hero-conn-line" x1="390" y1="80" x2="270" y2="230" />
        <line className="hero-conn-line" x1="95" y1="370" x2="240" y2="270" />
        <line className="hero-conn-line" x1="400" y1="400" x2="280" y2="275" />
      </svg>

      {/* Leads card */}
      <div className="hero-float-card hero-card-leads">
        <div className="hero-card-label">New Leads</div>
        <div className="hero-card-value">47</div>
        <div className="hero-card-trend">
          <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" /></svg>
          +23% this month
        </div>
        <div className="hero-sparkline">
          <div className="hero-spark-bar" style={{ height: 8 }} />
          <div className="hero-spark-bar" style={{ height: 12 }} />
          <div className="hero-spark-bar" style={{ height: 10 }} />
          <div className="hero-spark-bar" style={{ height: 16 }} />
          <div className="hero-spark-bar" style={{ height: 14 }} />
          <div className="hero-spark-bar" style={{ height: 20 }} />
          <div className="hero-spark-bar hero-spark-active" style={{ height: 24 }} />
        </div>
      </div>

      {/* Reviews card */}
      <div className="hero-float-card hero-card-reviews">
        <div className="hero-card-label">Google Reviews</div>
        <div className="hero-card-value">4.<span className="text-accent">9</span></div>
        <div className="hero-stars">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="hero-star" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
          ))}
        </div>
        <div className="hero-card-trend">
          <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" /></svg>
          12 new this month
        </div>
      </div>

      {/* Center hub */}
      <div className="hero-float-card hero-card-hub">
        <div className="hero-hub-icon">
          <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" /></svg>
        </div>
        <div className="hero-card-label" style={{ color: "var(--color-accent)" }}>FullerOps AI</div>
        <div className="hero-hub-status">Running 24/7</div>
      </div>

      {/* SEO card */}
      <div className="hero-float-card hero-card-seo">
        <div className="hero-card-label">Google Rank</div>
        <div className="hero-card-value">#<span style={{ color: "#34d399" }}>3</span></div>
        <div className="hero-card-trend">
          <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" /></svg>
          Up from #18
        </div>
        <div className="hero-sparkline">
          <div className="hero-spark-bar" style={{ height: 22 }} />
          <div className="hero-spark-bar" style={{ height: 18 }} />
          <div className="hero-spark-bar" style={{ height: 16 }} />
          <div className="hero-spark-bar" style={{ height: 12 }} />
          <div className="hero-spark-bar" style={{ height: 10 }} />
          <div className="hero-spark-bar" style={{ height: 8 }} />
          <div className="hero-spark-bar hero-spark-active" style={{ height: 5 }} />
        </div>
      </div>

      {/* Content card */}
      <div className="hero-float-card hero-card-content">
        <div className="hero-card-label">Content Published</div>
        <div className="hero-card-value">24</div>
        <div className="hero-content-lines">
          <div className="hero-content-line hero-content-line-accent" style={{ width: "100%" }} />
          <div className="hero-content-line" style={{ width: "80%" }} />
          <div className="hero-content-line" style={{ width: "60%" }} />
        </div>
        <div className="hero-card-trend" style={{ marginTop: 8 }}>
          <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" /></svg>
          8 posts this week
        </div>
      </div>
    </div>
  );
}
