"use client";

import { useEffect } from "react";

const services = [
  { name: "Visita de psicología", price: "$150.000", category: "Consulta" },
  { name: "Psicoterapia para adulto mayor", price: "$150.000", category: "Psicoterapia" },
  { name: "Urgencias psicológicas a domicilio", price: "$170.000", category: "Urgencias" },
  { name: "Tratamiento para la depresión", price: "Consultar", category: "Tratamiento" },
  { name: "Test de personalidad", price: "Consultar", category: "Evaluación" },
  { name: "Terapia dialéctico-conductual (DBT)", price: "$150.000", category: "Psicoterapia" },
  { name: "Terapia cognitivo-conductual (TCC)", price: "$150.000", category: "Psicoterapia" },
  { name: "Salud mental empresarial", price: "Consultar", category: "Empresas" },
  { name: "Psicoterapia para adolescentes", price: "$150.000", category: "Psicoterapia" },
  { name: "Psicoterapia individual", price: "Consultar", category: "Psicoterapia" },
  { name: "Psicoterapia familiar", price: "$160.000", category: "Psicoterapia" },
  { name: "Psicoterapia de pareja", price: "$160.000", category: "Psicoterapia" },
  { name: "Pruebas psicotécnicas", price: "Consultar", category: "Evaluación" },
  { name: "Asesoría psicológica y psicoeducación", price: "Consultar", category: "Orientación" },
  { name: "Orientación vocacional", price: "$120.000", category: "Orientación" },
  { name: "Grupos de apoyo para pacientes con ansiedad", price: "Consultar", category: "Grupos" },
  { name: "Grupos de apoyo", price: "Consultar", category: "Grupos" },
  { name: "Evaluación psicológica", price: "Consultar", category: "Evaluación" },
  { name: "Evaluación neuropsicológica", price: "$180.000 – $620.000", category: "Neuropsicología" },
  { name: "Estimulación cognitiva", price: "$120.000", category: "Neuropsicología" },
  { name: "Consulta psicológica por duelo", price: "$150.000", category: "Consulta" },
  { name: "Consulta psicológica por depresión", price: "Consultar", category: "Consulta" },
  { name: "Consulta psicológica por ansiedad", price: "Consultar", category: "Consulta" },
  { name: "Consulta en línea", price: "$140.000", category: "Consulta" },
  { name: "Certificado para animales de apoyo emocional", price: "Desde $100.000", category: "Certificación" },
  { name: "Urgencias psicológicas", price: "$150.000", category: "Urgencias" },
] as const;

const focusGroups = [
  {
    title: "Bienestar emocional",
    items: [
      "Depresión",
      "Estrés",
      "Trastornos del estado de ánimo",
      "Trastorno de adaptación",
      "Ansiedad",
      "Somatización",
      "Insomnio y trastornos del sueño",
    ],
  },
  {
    title: "Neurodesarrollo y cognición",
    items: [
      "Deterioro cognitivo",
      "Trastorno del espectro autista (TEA)",
      "TDAH",
      "Trastornos del aprendizaje",
      "Trastornos madurativos del neurodesarrollo",
    ],
  },
  {
    title: "Conducta y relaciones",
    items: [
      "Trastornos de conducta",
      "Control de impulsos",
      "Trastornos de personalidad",
      "Trastorno límite de la personalidad",
      "Trastornos de la conducta alimentaria",
      "TOC",
      "Adicciones",
    ],
  },
  {
    title: "Situaciones complejas",
    items: [
      "Trastorno bipolar",
      "Esquizofrenia",
      "Conflictos familiares",
      "Bullying",
      "Abuso sexual",
    ],
  },
] as const;

const CalendarIcon = ({ size = 20 }: { size?: number }) => (
  <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 3v3M17 3v3M4 9h16" />
    <rect x="3" y="5" width="18" height="16" rx="3" />
    <path d="M8 13h3M14 13h2M8 17h2" />
  </svg>
);

const LockIcon = () => (
  <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="10" width="16" height="11" rx="3" />
    <path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v3" />
  </svg>
);

const BrainIcon = () => (
  <svg aria-hidden="true" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9.5 4.7A3 3 0 0 0 4 6.5c0 .5.1 1 .4 1.4A3.5 3.5 0 0 0 5 14.8a3 3 0 0 0 4.5 3.8V4.7ZM14.5 4.7A3 3 0 0 1 20 6.5c0 .5-.1 1-.4 1.4a3.5 3.5 0 0 1-.6 6.9 3 3 0 0 1-4.5 3.8V4.7Z" />
    <path d="M6.5 9.5c1.1 0 2 .9 2 2M17.5 9.5c-1.1 0-2 .9-2 2M6 15c1.5 0 2.8.8 3.5 2M18 15c-1.5 0-2.8.8-3.5 2" />
  </svg>
);

const PhoneIcon = () => (
  <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2.1Z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg aria-hidden="true" width="21" height="21" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.004 0h-.006C5.38 0 0 5.383 0 12c0 2.625.846 5.058 2.284 7.034L.79 23.485l4.601-1.476A11.93 11.93 0 0 0 12.004 24C18.624 24 24 18.617 24 12S18.624 0 12.004 0Zm0 21.818a9.82 9.82 0 0 1-5.002-1.37l-.358-.212-2.731.876.894-2.663-.233-.37A9.77 9.77 0 0 1 2.182 12c0-5.414 4.406-9.818 9.822-9.818 5.413 0 9.818 4.404 9.818 9.818s-4.405 9.818-9.818 9.818Zm5.468-7.436c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.198.297-.767.966-.94 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.009-.372-.011-.57-.011-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479s1.065 2.875 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.693.625.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347Z" />
  </svg>
);

const MapIcon = () => (
  <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

function DoctoraliaWidget() {
  useEffect(() => {
    if (document.getElementById("zl-widget-s")) return;

    const script = document.createElement("script");
    script.id = "zl-widget-s";
    script.src = "https://platform.docplanner.com/js/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="doctoralia-widget-host">
      <a
        id="zl-url"
        className="zl-url"
        href="https://www.doctoralia.co/perfil/angela-alvarez-castellar"
        rel="nofollow"
        data-zlw-doctor="angela-alvarez-castellar"
        data-zlw-type="big_with_calendar"
        data-zlw-opinion="false"
        data-zlw-hide-branding="true"
        data-zlw-saas-only="true"
        data-zlw-a11y-title="Widget de reserva de citas médicas"
      >
        Reservar una cita
      </a>
    </div>
  );
}

export default function Home() {

  return (
    <main>
      <header className="site-header">
        <a className="brand brand-logo" href="#inicio" aria-label="Ángela Álvarez Castellar, ir al inicio">
          <img src="/brand-lockup.png" alt="Ángela Álvarez Castellar, psicóloga especialista en psicología clínica" />
        </a>

        <nav aria-label="Navegación principal">
          <a className="active" href="#inicio">Inicio</a>
          <a href="#experiencia">Experiencia</a>
          <a href="#servicios">Servicios</a>
          <a href="#contacto">Contacto</a>
        </nav>

        <a className="button button-small" href="#agendar">
          <CalendarIcon size={19} />
          Agendar cita
        </a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <p className="eyebrow">Psicología clínica y neuropsicología</p>
          <h1>Un espacio seguro para volver a <em>sentirte tú</em></h1>
          <p className="hero-lead">
            Acompañamiento profesional, cercano y basado en evidencia para tu bienestar emocional y cognitivo.
          </p>

          <div className="hero-actions">
            <a className="button button-large" href="#agendar">
              <CalendarIcon size={22} />
              Agenda tu cita
              <span aria-hidden="true">→</span>
            </a>
            <a className="text-link" href="#experiencia">Conoce mi enfoque <span aria-hidden="true">→</span></a>
          </div>

          <div className="credentials" aria-label="Credenciales profesionales">
            <span className="credential-icon" aria-hidden="true">✦</span>
            <span>Psicóloga clínica</span><i aria-hidden="true" />
            <span>Magíster en Neuropsicología</span><i aria-hidden="true" />
            <span>9 años de experiencia</span>
          </div>
        </div>

        <div className="hero-visual" aria-label="Retrato de Ángela Álvarez Castellar">
          <div className="portrait-halo halo-one" aria-hidden="true" />
          <div className="portrait-halo halo-two" aria-hidden="true" />
          <div className="portrait-frame">
            <img src="/angela-alvarez.png" alt="Ángela Álvarez Castellar, psicóloga clínica" />
          </div>

          <aside className="availability-card" aria-label="Opciones de agendamiento">
            <div className="availability-heading">
              <span className="icon-box"><CalendarIcon size={23} /></span>
              <div><small>Agenda abierta</small><strong>Elige tu horario ideal</strong></div>
            </div>
            <div className="modality-row"><span>Presencial</span><span>En línea</span></div>
            <a href="#agendar">Consultar disponibilidad</a>
          </aside>

          <div className="confidentiality-chip"><LockIcon />Atención confidencial</div>
        </div>
      </section>

      <section className="trust-strip" aria-label="Principios de la atención">
        <p>Atención basada en evidencia</p><span aria-hidden="true">•</span>
        <p>Un espacio libre de juicios</p><span aria-hidden="true">•</span>
        <p>Acompañamiento personalizado</p>
      </section>

      <section className="about-section content-section" id="experiencia">
        <div className="section-heading about-heading">
          <div>
            <p className="section-kicker">Experiencia y enfoque</p>
            <h2>La ciencia y la empatía al servicio de tu bienestar</h2>
          </div>
          <p>
            Cada proceso comienza con una escucha cuidadosa para comprender tu historia, tus necesidades y el cambio que quieres construir.
          </p>
        </div>

        <div className="about-grid">
          <article className="about-story">
            <div className="about-photo"><img src="/angela-consultorio.jpg" alt="Ángela Álvarez Castellar en su consultorio" /></div>
            <span className="soft-icon"><BrainIcon /></span>
            <h3>Ángela Álvarez Castellar</h3>
            <p>
              Psicóloga, especialista en Psicología Clínica desde el enfoque cognitivo-conductual, con nueve años de experiencia en intervención en crisis de pacientes psiquiátricos y otras alteraciones emocionales.
            </p>
            <p>
              Magíster en Neuropsicología Clínica, con perfil orientado a la neuropsiquiatría, los trastornos cognoscitivos y la rehabilitación. También se desempeña como docente universitaria.
            </p>
            <div className="profile-notes">
              <span><strong>Idioma</strong> Inglés</span>
              <span><strong>Publicación</strong> <cite>La insoportabilidad de las emociones</cite> (2019)</span>
            </div>
          </article>

          <div className="approach-cards">
            <article><span>01</span><div><h3>Evaluación integral</h3><p>Comprensión clínica y cognitiva de cada caso, sin reducir a la persona a un diagnóstico.</p></div></article>
            <article><span>02</span><div><h3>Intervención basada en evidencia</h3><p>Herramientas cognitivo-conductuales y dialéctico-conductuales adaptadas a cada proceso.</p></div></article>
            <article><span>03</span><div><h3>Acompañamiento humano</h3><p>Un vínculo terapéutico respetuoso, confidencial y libre de juicios.</p></div></article>
          </div>
        </div>
      </section>

      <section className="brand-statement">
        <div className="brand-statement-image">
          <img src="/angela-evaluacion.jpg" alt="Ángela Álvarez durante una evaluación psicológica" />
        </div>
        <div className="brand-statement-copy">
          <p className="section-kicker light-kicker">Evaluación e intervención</p>
          <h2>Comprender lo que ocurre es el primer paso para transformarlo.</h2>
          <p>Evaluación clínica y neuropsicológica con una mirada rigurosa, cercana y orientada a objetivos concretos para cada etapa de vida.</p>
          <a className="button brand-statement-button" href="#agendar"><CalendarIcon size={20} /> Agendar valoración</a>
        </div>
      </section>

      <section className="focus-section content-section">
        <div className="section-heading centered-heading">
          <p className="section-kicker">Áreas de atención</p>
          <h2>Motivos de consulta que podemos abordar</h2>
          <p>La atención se adapta a la etapa de vida, el contexto y los objetivos terapéuticos de cada persona.</p>
        </div>
        <div className="focus-grid">
          {focusGroups.map((group, index) => (
            <article className="focus-card" key={group.title}>
              <div className="focus-number">0{index + 1}</div>
              <h3>{group.title}</h3>
              <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
          ))}
        </div>
        <p className="clinical-note">La pertinencia del servicio se define durante la valoración inicial. La información de esta página no sustituye una evaluación profesional.</p>
      </section>

      <section className="services-section content-section" id="servicios">
        <div className="section-heading services-heading">
          <div><p className="section-kicker">Servicios y tarifas</p><h2>Elige el acompañamiento que necesitas</h2></div>
          <p>Los valores corresponden a atención particular. Algunos servicios requieren valoración previa para definir alcance y tarifa.</p>
        </div>

        <div className="featured-services">
          {services.slice(0, 8).map((item, index) => (
            <article className="service-card" key={item.name}>
              <div><span className="service-category">{item.category}</span><span className="service-index">0{index + 1}</span></div>
              <h3>{item.name}</h3>
              <p className={item.price === "Consultar" ? "price price-muted" : "price"}>{item.price}</p>
              <a className="service-choice" href="#agendar">Reservar en Doctoralia <span aria-hidden="true">→</span></a>
            </article>
          ))}
        </div>

        <details className="all-services">
          <summary>Ver los {services.length} servicios y tarifas <span aria-hidden="true">＋</span></summary>
          <div className="service-list">
            {services.map((item) => (
              <a key={item.name} href="#agendar">
                <span><small>{item.category}</small>{item.name}</span><strong>{item.price}</strong>
              </a>
            ))}
          </div>
        </details>
      </section>

      <section className="resources-section content-section" id="recursos">
        <div className="section-heading resources-heading">
          <div><p className="section-kicker">Contenido psicoeducativo</p><h2>Comprender también es parte del proceso</h2></div>
          <p>Recursos breves para acercarte a la salud mental, la neuropsicología clínica y las áreas de evaluación.</p>
        </div>
        <div className="resources-grid">
          <figure><img src="/recurso-ansiedad.jpg" alt="Orientación sobre ansiedad y depresión" /><figcaption>Ansiedad y depresión</figcaption></figure>
          <figure><img src="/recurso-neuropsicologia.png" alt="Introducción a la neuropsicología clínica" /><figcaption>Neuropsicología clínica</figcaption></figure>
          <figure><img src="/recurso-areas-evaluacion.png" alt="Áreas de evaluación neuropsicológica" /><figcaption>Áreas de evaluación</figcaption></figure>
        </div>
      </section>

      <section className="booking-section" id="agendar">
        <div className="booking-copy-column">
          <div className="booking-visual">
            <img src="/angela-evaluacion.jpg" alt="Ángela Álvarez Castellar durante una evaluación clínica" />
          </div>
          <div className="booking-intro doctoralia-intro">
            <p className="section-kicker light-kicker">Agendamiento</p>
            <h2>Da el primer paso con un horario que funcione para ti</h2>
            <p>Consulta la agenda disponible y reserva directamente a través de Doctoralia. Recibirás la confirmación de tu cita en el canal indicado durante el proceso.</p>
            <ol>
              <li><span>1</span><div><strong>Revisa la disponibilidad</strong><small>El calendario muestra los espacios habilitados.</small></div></li>
              <li><span>2</span><div><strong>Selecciona fecha y hora</strong><small>Elige la alternativa que mejor se ajuste a ti.</small></div></li>
              <li><span>3</span><div><strong>Completa la reserva</strong><small>Doctoralia te guiará para confirmar el agendamiento.</small></div></li>
            </ol>
            <div className="booking-assurance"><LockIcon /><span><strong>Reserva segura.</strong> Los datos se gestionan directamente en Doctoralia.</span></div>
          </div>
        </div>

        <div className="doctoralia-panel">
          <div className="form-heading"><span className="icon-box"><CalendarIcon size={24} /></span><div><small>Agenda en línea</small><h3>Reserva tu cita</h3></div></div>
          <DoctoraliaWidget />
          <p className="doctoralia-fallback">Si el calendario no aparece, <a href="https://www.doctoralia.co/perfil/angela-alvarez-castellar" target="_blank" rel="nofollow noreferrer">abre el perfil de Doctoralia</a>.</p>
        </div>
      </section>

      <section className="contact-section content-section" id="contacto">
        <div className="section-heading contact-heading">
          <div><p className="section-kicker">Contacto</p><h2>Consultorio Ángela Álvarez Castellar</h2></div>
          <p>Comunícate para resolver inquietudes sobre disponibilidad, modalidad o preparación para tu consulta.</p>
        </div>

        <div className="contact-grid">
          <article className="contact-card primary-contact">
            <span className="soft-icon"><PhoneIcon /></span><h3>Líneas de atención</h3>
            <a href="tel:+573004720082">300 472 0082</a><a href="tel:+573188900368">318 890 0368</a>
            <small>Llamadas y coordinación de citas</small>
          </article>
          <article className="contact-card">
            <span className="soft-icon"><MapIcon /></span><h3>Ubicación del consultorio</h3>
            <p>Consulta la ruta, indicaciones y opciones de llegada en Google Maps.</p>
            <a className="card-link" href="https://maps.app.goo.gl/6nVWdn7jzcQbWXt88" target="_blank" rel="noreferrer">Abrir ubicación <span aria-hidden="true">↗</span></a>
          </article>
          <article className="contact-card">
            <span className="soft-icon"><span aria-hidden="true">$</span></span><h3>Formas de pago</h3>
            <p>Para visitas privadas:</p><div className="payment-pills"><span>Efectivo</span><span>Transferencia</span></div>
          </article>
        </div>

        <div className="contact-bottom">
          <p><strong>Instagram y correo</strong> <a href="https://www.instagram.com/psicoamac/" target="_blank" rel="noreferrer">@psicoamac</a> · <a href="mailto:aalvarezcastellar@gmail.com">aalvarezcastellar@gmail.com</a></p>
          <a href="#agendar">Solicitar una cita <span aria-hidden="true">→</span></a>
        </div>
      </section>

      <section className="emergency-note">
        <strong>¿Necesitas atención inmediata?</strong>
        <p>Este canal no reemplaza un servicio de emergencias. Si existe riesgo para ti o para otra persona, acude al servicio de urgencias más cercano.</p>
      </section>

      <footer>
        <a className="brand footer-brand brand-logo" href="#inicio"><img src="/brand-lockup.png" alt="Ángela Álvarez Castellar" /></a>
        <p>Atención psicológica y neuropsicológica · Consulta presencial y en línea</p>
        <p>© {new Date().getFullYear()} Todos los derechos reservados.</p>
      </footer>

      <a className="floating-whatsapp" href="https://wa.me/573004720082" target="_blank" rel="noreferrer" aria-label="Contactar por WhatsApp">
        <WhatsAppIcon />
        WhatsApp
      </a>
    </main>
  );
}
