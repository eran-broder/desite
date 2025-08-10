import './App.css';

function App() {
  const clients = [
    { name: 'DataRails', logo: '/logos/datarails.png', needsBackground: true, url: 'https://www.datarails.com/' },
    { name: 'Digma', logo: '/logos/digma.jpg', needsBackground: true, url: 'https://digma.ai/' },
    { name: 'OpenOps', logo: '/logos/openops.png', needsBackground: true, url: 'https://www.openops.com/' },
    { name: 'TargetBoard', logo: '/logos/targetboard.png?v=2', needsBackground: true, url: 'https://www.targetboard.ai/' },
    { name: 'Wotch', logo: '/logos/wotch.png', needsBackground: true, url: 'https://www.wotch.health/' }
  ];
  return (
    <div className="App">
      <section className="hero">
        <div className="hero-content">
          <img src="/DE_LOGO.png" alt="Digital Enzymes" className="hero-logo" />
          <h1 className="company-name">Digital Enzymes</h1>
          <p className="tagline">AI Agents Consulting</p>
          <a href="#contact" className="cta-button">Get in Touch</a>
        </div>
      </section>

      <section className="clients">
        <div className="clients-content">
          <h2>Our Clients</h2>
          <div className="logos-container">
            {clients.map((client) => (
              <a 
                key={client.name}
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
                className="client-logo-link"
              >
                <img 
                  src={client.logo} 
                  alt={client.name} 
                  className={`client-logo ${client.needsBackground ? 'logo-with-bg' : ''}`}
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="contact-content">
          <h2>Eran Broder, MD</h2>
          <p className="title">Autonomous Agent Architect</p>
          <div className="contact-links">
            <a href="mailto:eran@digitalenzymes.com">eran@digitalenzymes.com</a>
            <a href="https://www.linkedin.com/in/eran-broder-md/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;