const beachDestinations = [
  {
    name: 'Mar del Plata',
    region: 'Buenos Aires · Costa Atlántica',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=85',
    description: 'Playas amplias, rambla histórica y una energía costera que invita a quedarse hasta el atardecer.',
    guide: '/guias/mar-del-plata.pdf',
  },
  {
    name: 'Puerto Pirámides',
    region: 'Chubut · Península Valdés',
    image: 'https://images.unsplash.com/photo-1530053969600-caed2596d242?auto=format&fit=crop&w=1000&q=85',
    description: 'Un pueblo junto al mar para observar ballenas, navegar aguas patagónicas y respirar naturaleza.',
    guide: '/guias/puerto-piramides.pdf',
  },
  {
    name: 'Las Grutas',
    region: 'Río Negro · Patagonia Norte',
    image: 'https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=1000&q=85',
    description: 'Aguas templadas, acantilados y pequeñas calas que aparecen con cada cambio de marea.',
    guide: '/guias/las-grutas.pdf',
  },
]

const mountainDestinations = [
  {
    name: 'San Martín de los Andes',
    region: 'Neuquén · Ruta de los Siete Lagos',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=85',
    description: 'Bosques, lagos cristalinos y senderos para descubrir la cordillera en cualquier estación.',
    guide: '/guias/san-martin-de-los-andes.pdf',
  },
  {
    name: 'Villa La Angostura',
    region: 'Neuquén · Parque Nacional Nahuel Huapi',
    image: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=85',
    description: 'Una aldea de montaña rodeada de coihues, miradores y costas serenas sobre el lago Nahuel Huapi.',
    guide: '/guias/villa-la-angostura.pdf',
  },
  {
    name: 'El Chaltén',
    region: 'Santa Cruz · Parque Nacional Los Glaciares',
    image: 'https://images.unsplash.com/photo-1464278533981-50106e6176b1?auto=format&fit=crop&w=1000&q=85',
    description: 'La capital nacional del trekking: cumbres, glaciares y caminos inolvidables al pie del Fitz Roy.',
    guide: '/guias/el-chalten.pdf',
  },
]

function DestinationCard({ destination }: { destination: (typeof beachDestinations)[number] }) {
  return (
    <article className="destination-card">
      <div className="destination-image-wrap">
        <img src={destination.image} alt={`Paisaje de ${destination.name}`} className="destination-image" />
        <span className="image-number">01</span>
      </div>
      <div className="destination-copy">
        <p className="destination-region">{destination.region}</p>
        <h3>{destination.name}</h3>
        <p className="destination-description">{destination.description}</p>
        <a className="guide-link" href={destination.guide} download>
          Descargar itinerario <span aria-hidden="true">↗</span>
        </a>
      </div>
    </article>
  )
}

function DestinationSection({ id, label, title, intro, destinations, tone }: { id: string; label: string; title: string; intro: string; destinations: typeof beachDestinations; tone: 'beach' | 'mountain' }) {
  return (
    <section id={id} className={`destination-section ${tone}`}>
      <div className="section-heading">
        <div>
          <p className="eyebrow">{label}</p>
          <h2>{title}</h2>
        </div>
        <p className="section-intro">{intro}</p>
      </div>
      <div className="destination-grid">
        {destinations.map((destination) => <DestinationCard key={destination.name} destination={destination} />)}
      </div>
    </section>
  )
}

export default function Page() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Volver al inicio">RUMBO<span>AR</span></a>
        <nav aria-label="Navegación principal">
          <a href="#playa">Playa</a>
          <a href="#montana">Montaña</a>
          <a href="#nosotros">Nosotros</a>
          <a href="#contacto" className="nav-contact">Contacto <span>↗</span></a>
        </nav>
      </header>

      <section id="inicio" className="hero">
        <div className="hero-content">
          <p className="eyebrow">Guía de viajes · Argentina</p>
          <h1>Elegí tu<br /><em>próximo paisaje.</em></h1>
          <p className="hero-text">Una selección de destinos para perderse un poco, encontrar mucho y volver con historias nuevas.</p>
          <div className="hero-actions">
            <a className="button button-dark" href="#playa">Explorar destinos <span>↓</span></a>
            <span className="hero-note">06 destinos<br />para descubrir</span>
          </div>
        </div>
        <div className="hero-art" aria-label="Paisaje de montaña al amanecer" role="img">
          <div className="sun"></div><div className="hero-mountain mountain-back"></div><div className="hero-mountain mountain-front"></div><div className="hero-stamp">AR<br /><small>ARGENTINA</small></div>
        </div>
      </section>

      <div className="quote-band"><p>“Viajar es cambiarle el nombre a la rutina.”</p><span>— Anónimo</span></div>

      <DestinationSection id="playa" label="01 · Costa y horizonte" title="Destinos de playa" intro="El mar como punto de partida. Lugares para bajar el ritmo, caminar sin rumbo y dejar que el horizonte haga lo suyo." destinations={beachDestinations} tone="beach" />
      <DestinationSection id="montana" label="02 · Altura y silencio" title="Destinos de montaña" intro="Aire fresco, senderos y paisajes que se abren paso entre bosques, lagos y cumbres." destinations={mountainDestinations} tone="mountain" />

      <section id="nosotros" className="about-section">
        <div><p className="eyebrow">Quiénes somos</p><h2>Hecho por gente<br /><em>que ama viajar.</em></h2></div>
        <div className="about-copy"><p>Rumbo AR es una guía independiente para descubrir rincones de Argentina con curiosidad, respeto y ganas de caminar un poco más.</p><a className="text-link" href="#contacto">Conocé más sobre el proyecto <span>→</span></a></div>
      </section>

      <section id="contacto" className="contact-section">
        <div><p className="eyebrow">Escribinos</p><h2>¿Tenés un destino<br /><em>para compartir?</em></h2></div>
        <form className="contact-form" action="#contacto" method="get">
          <label>Tu nombre<input type="text" name="nombre" placeholder="Nombre y apellido" /></label>
          <label>Tu email<input type="email" name="email" placeholder="nombre@email.com" /></label>
          <label>Mensaje<textarea name="mensaje" rows={3} placeholder="Contanos tu idea..."></textarea></label>
          <button className="button button-light" type="submit">Enviar mensaje <span>↗</span></button>
        </form>
      </section>

      <footer><a className="brand" href="#inicio">RUMBO<span>AR</span></a><p>Destinos para mirar distinto.</p><p>© 2024 Rumbo AR</p></footer>
    </main>
  )
}
