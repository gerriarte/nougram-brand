import { useState } from 'react';
import { 
  Palette, 
  Type, 
  DownloadCloud, 
  Sparkles,
  ChevronRight,
  Hexagon,
  ImageIcon,
  Download,
  Brain,
  Zap,
  ShieldCheck,
  Search,
  HeartHandshake,
  MessageSquare,
  Volume2,
  XCircle,
  CheckCircle2,
  Quote,
  Box,
  Layers,
  Fingerprint,
  BookOpen,
  LayoutGrid,
  Camera,
  Layers3,
  Lightbulb,
  Share2,
  Workflow,
  Target,
  Stethoscope,
  BarChart3,
  Pin,
  ExternalLink
} from 'lucide-react';
import './index.css';

const TABS = [
  { id: 'overview', label: 'Overview', icon: Sparkles },
  { id: 'concept', label: 'Brand Concept', icon: Box },
  { id: 'personality', label: 'Personality', icon: Brain },
  { id: 'colors', label: 'Brand Colors', icon: Palette },
  { id: 'typography', label: 'Typography', icon: Type },
  { id: 'photography', label: 'Photography', icon: Camera },
  { id: 'social', label: 'Social Media', icon: Share2 },
  { id: 'downloads', label: 'Downloads', icon: DownloadCloud },
];

function OverviewSection() {
  return (
    <div className="animate-slide-in">
      <div className="section-header">
        <h1 className="section-title">Nougram Digital Brand</h1>
        <p className="section-subtitle">
          Infraestructura operativa para la economía creativa. El estándar global en la gestión e inteligencia financiera.
        </p>
      </div>

      <div className="glass-card mb-4">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
          <Sparkles size={28} className="download-icon" />
          <h2 className="color-name" style={{ marginBottom: 0 }}>Propósito (El "Para qué")</h2>
        </div>
        <p className="typo-preview-body">
          Dignificar la rentabilidad del talento creativo. Nougram no existe para hacer "tablas de Excel lindas", 
          sino para eliminar la ansiedad financiera de quienes viven de sus ideas, asegurando que su trabajo sea 
          sostenible y escalable.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '2rem', marginBottom: '2rem' }}>
        <div className="glass-card delay-100 animate-slide-in">
          <Hexagon size={32} className="download-icon mb-3" />
          <h3 className="color-name" style={{ fontSize: '1.25rem' }}>Misión (El "Cómo")</h3>
          <p className="typo-preview-body" style={{ fontSize: '1rem' }}>
            Automatizar la inteligencia financiera de las agencias mediante una plataforma de cotización y gestión integral. 
            Buscamos transformar procesos manuales y subjetivos en flujos de trabajo basados en datos, permitiendo que los 
            founders se enfoquen en crear mientras la herramienta cuida el margen.
          </p>
        </div>
        
        <div className="glass-card delay-200 animate-slide-in">
          <ImageIcon size={32} className="download-icon mb-3" />
          <h3 className="color-name" style={{ fontSize: '1.25rem' }}>Visión (Hacia dónde)</h3>
          <p className="typo-preview-body" style={{ fontSize: '1rem' }}>
            Ser el estándar global de infraestructura operativa para la economía creativa. Que el "Metodo Nougram" sea el 
            lenguaje universal en el que agencias y freelancers hablen de dinero, tiempos y rentabilidad.
          </p>
        </div>
      </div>

      <div className="section-header" style={{ marginTop: '4rem' }}>
        <h2 className="section-title" style={{ fontSize: '2rem' }}>Principios de Decisión</h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
        <div className="glass-card delay-300 animate-slide-in">
          <h4 className="color-name" style={{ fontSize: '1.1rem', color: 'var(--primary)' }}>Precisión sobre Percepción</h4>
          <p className="typo-preview-body" style={{ fontSize: '0.95rem' }}>
            No "creemos" que un proyecto es rentable; lo sabemos con datos. Si una funcionalidad no aporta claridad numérica, se descarta.
          </p>
        </div>
        <div className="glass-card delay-400 animate-slide-in">
          <h4 className="color-name" style={{ fontSize: '1.1rem', color: 'var(--primary)' }}>Simplicidad Radical</h4>
          <p className="typo-preview-body" style={{ fontSize: '0.95rem' }}>
            El usuario ya tiene suficiente caos. Cada clic en Nougram debe ahorrar tres clics en la vida real. Si es complejo de usar, no es Nougram.
          </p>
        </div>
        <div className="glass-card delay-500 animate-slide-in">
          <h4 className="color-name" style={{ fontSize: '1.1rem', color: 'var(--primary)' }}>Empoderamiento Directo</h4>
          <p className="typo-preview-body" style={{ fontSize: '0.95rem' }}>
            Hablamos de plata sin vueltas. Valoramos la transparencia radical tanto en el producto como en la relación con el cliente.
          </p>
        </div>
        <div className="glass-card delay-600 animate-slide-in">
          <h4 className="color-name" style={{ fontSize: '1.1rem', color: 'var(--primary)' }}>Agilidad Técnica</h4>
          <p className="typo-preview-body" style={{ fontSize: '0.95rem' }}>
            Como herramienta nacida de la necesidad de agencias, priorizamos la evolución constante sobre la perfección estática.
          </p>
        </div>
      </div>
    </div>
  );
}

function BrandConceptSection() {
  const units = ['N', 'O', 'U', 'G', 'R', 'A', 'M'];
  
  return (
    <div className="animate-slide-in">
      <div className="section-header">
        <h2 className="section-title">Brand Concept</h2>
        <p className="section-subtitle">
          La ingeniería detrás de la identidad. No es tipografía, es arquitectura de la información.
        </p>
      </div>

      <div className="glass-card mb-5" style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
          <Fingerprint size={32} className="download-icon" />
          <h3 className="color-name" style={{ fontSize: '1.5rem', marginBottom: 0 }}>La Ley de Miller (7±2)</h3>
        </div>
        
        <p className="typo-preview-body" style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
          Nuestro logotipo es una estructura de **7 unidades**. Es la materialización visual de que el cerebro humano 
          procesa la complejidad financiera mejor en bloques de información digeribles. Cada letra es un pilar de claridad.
        </p>

        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          gap: '1rem',
          padding: '2rem 1rem',
          background: 'rgba(0,0,0,0.2)',
          borderRadius: '12px',
          border: '1px solid var(--glass-border)'
        }}>
          {units.map((letter, i) => (
            <div 
              key={i} 
              className={`animate-slide-in delay-${(i+1)*100}`}
              style={{ 
                flex: 1, 
                height: '80px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                background: 'linear-gradient(180deg, var(--glass-highlight), transparent)',
                border: '1px solid var(--primary)',
                borderRadius: '8px',
                fontSize: '2rem',
                fontWeight: 800,
                fontFamily: 'Outfit',
                color: '#fff',
                boxShadow: '0 0 20px rgba(243, 93, 10, 0.1)'
              }}
            >
              {letter}
            </div>
          ))}
        </div>
        
        <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center' }}>
          <div className="badge" style={{ background: 'transparent', border: '1px solid var(--glass-border)', color: 'var(--text-muted)' }}>
            7 Unidades • Bloques de memoria de trabajo
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '3rem' }}>
        <div className="glass-card delay-500 animate-slide-in">
          <Layers size={24} className="download-icon mb-3" />
          <h4 className="color-name">Información Digerible</h4>
          <p className="typo-preview-body" style={{ fontSize: '0.95rem' }}>
            Transformamos el caos financiero en una estructura rítmica. La marca no solo se ve, se entiende 
            cognitivamente como un sistema ordenado.
          </p>
        </div>
        <div className="glass-card delay-600 animate-slide-in">
          <Box size={24} className="download-icon mb-3" />
          <h4 className="color-name">Estándar de Claridad</h4>
          <p className="typo-preview-body" style={{ fontSize: '0.95rem' }}>
            Cada pilar (N-O-U-G-R-A-M) representa la eliminación de la fricción financiera. Si no se puede 
            fragmentar en 7 bloques, es demasiado complejo para el usuario.
          </p>
        </div>
      </div>

      <div className="section-header" style={{ marginTop: '5rem', marginBottom: '25px' }}>
        <h3 className="color-name" style={{ fontSize: '1.25rem', opacity: 0.8 }}>Estructura de Marca</h3>
      </div>

      <div className="glass-card animate-slide-in delay-600" style={{ marginBottom: '2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) 1.5fr', gap: '3rem', alignItems: 'center' }}>
          {/* Using shared images for exact brand structure */}
          <div style={{ 
            background: 'rgba(0,0,0,0.3)', 
            borderRadius: '12px', 
            padding: '2rem', 
            border: '1px solid var(--glass-border)',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden'
          }}>
            <div className="animate-slide-in" style={{ width: '100%', maxWidth: '380px' }}>
              <img 
                src="/Nougram estructura.png" 
                alt="Nougram Logo Grid Structure" 
                style={{ width: '100%', borderRadius: '8px', boxShadow: '0 4px 20px rgba(0,0,0,0.3)' }}
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
            
            <div className="animate-slide-in delay-200" style={{ width: '100%', maxWidth: '280px' }}>
              <img 
                src="/iso estructura.png" 
                alt="Isotipo ng Structure" 
                style={{ width: '100%', borderRadius: '8px', boxShadow: '0 4px 20px rgba(0,0,0,0.3)' }}
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>

            <div style={{ position: 'absolute', bottom: '15px', right: '15px', color: 'var(--primary)', opacity: 0.4, fontSize: '0.7rem' }}>
              <LayoutGrid size={14} style={{ marginBottom: '2px' }} /> OFFICIAL STRUCTURE
            </div>
          </div>

          <div>
             <div style={{ marginBottom: '2rem' }}>
                <h4 className="color-name" style={{ fontSize: '1.1rem', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ color: 'var(--primary)' }}>●</span> La Grilla de los Siete
                </h4>
                <p className="typo-preview-body" style={{ fontSize: '0.95rem' }}>
                  La palabra **'nougram'** debe respirar sobre una grilla de construcción donde cada letra ocupe un espacio visual equivalente. 
                  No hay letras "más importantes" que otras; es la suma de las siete la que crea el sistema completo.
                </p>
             </div>

             <div>
                <h4 className="color-name" style={{ fontSize: '1.1rem', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ color: 'var(--primary)' }}>●</span> El Isotipo Implícito
                </h4>
                <p className="typo-preview-body" style={{ fontSize: '0.95rem' }}>
                  Aunque no usemos un símbolo separado, la forma **"N"** o la **"g"** pueden extraerse y usarse como un nodo o punto de conexión, 
                  siempre recordando que es uno de los siete pilares.
                </p>
             </div>
          </div>
        </div>
      </div>
      <div className="glass-card animate-slide-in delay-700" style={{ marginTop: '4rem', background: 'rgba(255,255,255,0.02)', borderStyle: 'dashed' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
          <BookOpen size={20} className="download-icon" />
          <h4 className="color-name" style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Anexo: Fundamentos de la Ley de Miller</h4>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(200px, 1fr) 2fr', gap: '3rem' }}>
          <div>
            <p className="typo-label" style={{ marginBottom: '0.5rem', color: 'var(--primary)' }}>El Número Mágico (1956)</p>
            <p className="typo-preview-body" style={{ fontSize: '0.85rem' }}>
              George A. Miller propuso que nuestra memoria de trabajo tiene un límite de 7 (± 2) unidades de información.
            </p>
          </div>
          <div style={{ paddingLeft: '2rem', borderLeft: '1px solid var(--glass-border)' }}>
            <p className="typo-label" style={{ marginBottom: '0.5rem', color: 'var(--primary)' }}>Chunking & UX en Nougram</p>
            <p className="typo-preview-body" style={{ fontSize: '0.9rem' }}>
              El cerebro no procesa datos aislados, sino "chunks" (grupos con significado). Nougram fragmenta 
              la complejidad de una agencia en exactamente 7 pilares visuales para **reducir la carga cognitiva**. 
              Menos ruido visual = Decisiones financieras más rápidas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function PersonalitySection() {
  const attributes = [
    { 
      title: 'Analítico', 
      desc: 'Desglosamos la realidad en componentes lógicos.', 
      icon: Search 
    },
    { 
      title: 'Seguro', 
      desc: 'Transmitimos la tranquilidad de que los números están bajo control.', 
      icon: ShieldCheck 
    },
    { 
      title: 'Moderno / Tech-Savvy', 
      desc: 'No arrastramos deuda técnica ni burocracia visual.', 
      icon: Zap 
    },
    { 
      title: 'Cómplice', 
      desc: 'Entendemos el "dolor" de quemar horas en un presupuesto que después no cierra.', 
      icon: HeartHandshake 
    },
  ];

  return (
    <div className="animate-slide-in">
      <div className="section-header">
        <h2 className="section-title">Personalidad y Arquetipo</h2>
        <p className="section-subtitle">
          Nuestra identidad se forja en la intersección de la sabiduría técnica y la libertad creativa.
        </p>
      </div>

      <div className="glass-card mb-5">
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
          <div className="logo-icon" style={{ background: 'linear-gradient(135deg, var(--primary), var(--primary-hover))' }}>
            <Brain size={24} color="#fff" />
          </div>
          <h3 className="color-name" style={{ fontSize: '1.5rem', marginBottom: 0 }}>El Arquetipo: El Sabio + El Creador</h3>
        </div>
        <p className="typo-preview-body" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
          Nougram es la mezcla entre el experto que tiene todas las respuestas técnicas (**Sabio**) y la estructura 
          que permite que otros creen (**Creador**). 
          <br /><br />
          No somos un "banco" frío, pero tampoco somos una "comunidad de artistas" volátil. Somos el punto de 
          equilibrio donde el orden habilita la innovación.
        </p>
      </div>

      <div className="section-header" style={{ marginTop: '4rem', marginBottom: '2rem' }}>
        <h3 className="color-name" style={{ fontSize: '1.25rem', opacity: 0.8 }}>Atributos de Personalidad</h3>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
        {attributes.map((attr, i) => (
          <div key={attr.title} className={`glass-card delay-${(i+1)*100} animate-slide-in`} style={{ padding: '1.5rem' }}>
            <attr.icon size={28} className="download-icon mb-3" />
            <h4 className="color-name" style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>{attr.title}</h4>
            <p className="typo-preview-body" style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>
              {attr.desc}
            </p>
          </div>
        ))}
      </div>

      <div className="section-header" style={{ marginTop: '5rem', marginBottom: '2rem' }}>
        <h3 className="color-name" style={{ fontSize: '1.25rem', opacity: 0.8 }}>Tono de Voz</h3>
        <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
          {['Experto', 'Amigable', 'Humor Sutil', 'Directo'].map((tag, idx) => (
            <span 
              key={tag} 
              className={`badge animate-slide-in delay-${(idx+1)*50}`} 
              style={{ 
                fontSize: '0.9rem', 
                padding: '0.5rem 1rem', 
                background: 'rgba(243, 93, 10, 0.1)', 
                border: '1px solid var(--primary)',
                color: '#fff',
                letterSpacing: '0.05em',
                textTransform: 'uppercase'
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <div className="glass-card animate-slide-in delay-500">
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: '300px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <Volume2 size={24} className="download-icon" />
                <h4 className="color-name" style={{ marginBottom: 0 }}>Directo y Argento-Profesional</h4>
              </div>
              <p className="typo-preview-body" style={{ fontSize: '0.95rem' }}>
                Usamos términos claros (**"Esto no rinde"**, **"Acá perdés plata"**) sin caer en la jerga incomprensible. 
                Mantenemos la acentuación rioplatense en la redacción estratégica pero con una pulcritud que funcione en 
                Bogotá y el resto de la región.
              </p>
            </div>
            <div style={{ flex: 1, minWidth: '300px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <XCircle size={24} className="download-icon" />
                <h4 className="color-name" style={{ marginBottom: 0 }}>Cero Sensacionalismo</h4>
              </div>
              <p className="typo-preview-body" style={{ fontSize: '0.95rem' }}>
                No vendemos "magia". Vendemos estructura. Evitamos adjetivos vacíos como "increíble", "único" o 
                "revolucionario" a menos que estemos demostrando por qué lo es.
              </p>
            </div>
          </div>
        </div>

        <div className="glass-card animate-slide-in delay-600">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <MessageSquare size={24} className="download-icon" />
            <h4 className="color-name" style={{ marginBottom: 0 }}>Humor Sutil (de "insider")</h4>
          </div>
          <p className="typo-preview-body" style={{ fontSize: '0.95rem' }}>
            Un guiño a los problemas clásicos de agencia: el cliente que pide cambios infinitos, 
            el "para ayer", el presupuesto que se esfuma inexplicablemente.
          </p>
        </div>

        {/* Example Box */}
        <div className="glass-card animate-slide-in delay-700" style={{ borderLeft: '4px solid var(--primary)', background: 'rgba(243, 93, 10, 0.05)' }}>
          <div className="typo-label" style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Quote size={14} /> Ejemplo de Tono
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            <div style={{ opacity: 0.6 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#ff4d4d', marginBottom: '0.5rem', fontWeight: 600 }}>
                <XCircle size={16} /> Mal
              </div>
              <p style={{ fontStyle: 'italic', fontSize: '0.95rem' }}>
                "Nuestra revolucionaria plataforma optimiza tus procesos de facturación de manera increíble."
              </p>
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)', marginBottom: '0.5rem', fontWeight: 600 }}>
                <CheckCircle2 size={16} /> Nougram
              </div>
              <p style={{ fontSize: '0.95rem' }}>
                "Dejá de adivinar cuánto cobrar. Cargá tus costos, definí tu margen y enviá una propuesta que no te haga perder plata."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ColorsSection() {
  const colors = [
    { name: 'The Big Orange', hex: '#EA580C', rgb: '234, 88, 12', usage: 'Color primario de marca, acentos de acción y energía.' },
    { name: 'Math Blue', hex: '#262537', rgb: '38, 37, 55', usage: 'Identidad corporativa, bases de UI y profundidad técnica.' },
    { name: 'Smoth Blue', hex: '#E2E8F0', rgb: '226, 232, 240', usage: 'Acentos claros, tipografía secundaria y espacios limpios.' },
  ];

  return (
    <div className="animate-slide-in">
      <div className="section-header">
        <h2 className="section-title">Brand Colors</h2>
        <p className="section-subtitle">
          A high-contrast palette blending the depth of space with the energy of fire.
        </p>
      </div>

      <div className="color-grid">
        {colors.map((c, i) => (
          <div key={c.name} className={`color-swatch-container delay-${(i+1)*100} animate-slide-in`}>
            <div className="color-swatch" style={{ background: c.hex }}>
              <h3 className="color-name">{c.name}</h3>
              <span className="color-hex">{c.hex}</span>
            </div>
            <div className="color-details">
              <span>RGB: {c.rgb}</span>
            </div>
            <div className="typo-preview-body" style={{ fontSize: '0.9rem' }}>
              {c.usage}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function TypographySection() {
  return (
    <div className="animate-slide-in">
      <div className="section-header">
        <h2 className="section-title">Tipografías</h2>
        <p className="section-subtitle">
          Consistente, profesional y técnica. Utilizamos Lato como fuente principal y Montserrat como secundaria para acentos y jerarquías claras.
        </p>
      </div>

      <div className="glass-card mb-4" style={{ borderLeft: '4px solid var(--primary)' }}>
        <h3 className="color-name" style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>Principal: Lato</h3>
        <div className="typo-showcase">
          <div className="typo-row delay-100 animate-slide-in">
            <div className="typo-label">Black / 900</div>
            <div className="typo-preview-h1" style={{ fontFamily: 'Lato' }}>NUEVA ERA DIGITAL.</div>
          </div>
          
          <div className="typo-row delay-200 animate-slide-in">
            <div className="typo-label">Regular / 400</div>
            <div className="typo-preview-body" style={{ fontFamily: 'Lato' }}>
              Utilizamos Lato para todo el cuerpo de texto y la comunicación principal. Su claridad y 
              proporciones técnicas aseguran que la información financiera sea fácil de leer.
            </div>
          </div>

          <div className="typo-row delay-300 animate-slide-in" style={{ borderBottom: 'none', paddingBottom: 0 }}>
            <div className="typo-label">Extra Light / 100</div>
            <div style={{ fontFamily: 'Lato', fontWeight: 100, fontSize: '2.5rem', color: 'var(--text-muted)' }}>
              Subtileza en datos técnicos.
            </div>
          </div>
        </div>
      </div>

      <div className="glass-card">
        <h3 className="color-name" style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>Secundaria: Montserrat</h3>
        <div className="typo-showcase">
          <div className="typo-row delay-400 animate-slide-in">
            <div className="typo-label">Extra Bold / 900</div>
            <div style={{ fontFamily: 'Montserrat', fontWeight: 900, fontSize: '3rem', color: '#fff' }}>JERARQUÍA.</div>
          </div>
          <div className="typo-row delay-500 animate-slide-in">
            <div className="typo-label">Regular / 400</div>
            <div style={{ fontFamily: 'Montserrat', fontWeight: 400, fontSize: '1.1rem', color: 'var(--text-muted)' }}>
              Montserrat se aplica en etiquetas, badges y elementos de interfaz que requieren un toque más geométrico.
            </div>
          </div>
          <div className="typo-row delay-600 animate-slide-in" style={{ borderBottom: 'none', paddingBottom: 0 }}>
            <div className="typo-label">Semi Bold / 600</div>
            <div style={{ fontFamily: 'Montserrat', fontWeight: 600, fontSize: '1.5rem', color: 'var(--primary)' }}>
              Acentos de Interfaz
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PhotographySection() {
  const gallery = [
    { title: 'The Architect', img: '/photography-style.png', tag: 'Human / Profile' },
    { title: 'The Analyst', img: '/photography-analyst.png', tag: 'Focus / Tech' },
    { title: 'The Insight', img: '/photography-interface.png', tag: 'Abstract / Action' },
  ];

  return (
    <div className="animate-slide-in">
      <div className="section-header">
        <h2 className="section-title">Fotografía y Estilo</h2>
        <p className="section-subtitle">
          Cinematográfica, futurista y de alto contraste. Múltiples opciones de construcción unificadas por el fondo degradado Nougram.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
        {gallery.map((item, i) => (
          <div key={item.title} className={`glass-card delay-${(i+1)*100} animate-slide-in`} style={{ padding: 0, overflow: 'hidden' }}>
            <div style={{ height: '350px', position: 'relative' }}>
              <img 
                src={item.img} 
                alt={item.title} 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />
              <div style={{ 
                position: 'absolute', 
                top: '1rem', 
                right: '1rem', 
                background: 'rgba(234, 88, 12, 0.8)', 
                padding: '0.25rem 0.75rem', 
                borderRadius: '4px',
                fontSize: '0.7rem',
                fontWeight: 800,
                color: '#fff'
              }}>
                {item.tag}
              </div>
            </div>
            <div style={{ padding: '1.5rem' }}>
              <h4 className="color-name" style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>{item.title}</h4>
              <p className="typo-preview-body" style={{ fontSize: '0.85rem' }}>
                Fondo constante: Orange-to-Red Gradient. Luz dual-tone obligatoria.
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="glass-card mb-5">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
          <Lightbulb size={24} className="download-icon" />
          <h3 className="color-name" style={{ fontSize: '1.25rem', marginBottom: 0 }}>MASTER PROMPT</h3>
        </div>
        <div style={{ 
          background: 'rgba(0,0,0,0.3)', 
          padding: '2rem', 
          borderRadius: '12px', 
          fontFamily: 'monospace', 
          fontSize: '0.95rem',
          lineHeight: '1.8',
          border: '1px solid var(--glass-border)',
          color: 'var(--accent)'
        }}>
          "A striking, high-contrast <span style={{ color: 'var(--primary)' }}>[SUBJECT]</span> in deep shadow, viewed in a <span style={{ color: 'var(--primary)' }}>[PROFILE_VIEW]</span> angle, looking <span style={{ color: 'var(--primary)' }}>[VIEW_DIRECTION]</span>. The style is defined by dramatic dual-tone <span style={{ color: 'var(--primary)' }}>[RIM_LIGHTING_TYPE]</span> edge lighting. A strong, vibrant <span style={{ color: 'var(--primary)' }}>[COLOR_1]</span> rim light traces the front profile, while a contrasting, deep <span style={{ color: 'var(--primary)' }}>[COLOR_2]</span> rim light highlights the <span style={{ color: 'var(--primary)' }}>[BACK_FEATURES]</span>. The subject is wearing <span style={{ color: 'var(--primary)' }}>[ACCESSORIES_WITH_REFLECTIONS]</span> that brightly reflect <span style={{ color: 'var(--primary)' }}>[COLOR_1]</span>. Skin and clothing are in deep black shadow. Set against a clean, uncluttered, <span style={{ color: 'var(--primary)' }}>smooth solid orange gradient foreground transitioning to deeper red background</span>. Mood is <span style={{ color: 'var(--primary)' }}>[MOOD]</span>. Focus sharp on lit edges."
        </div>
      </div>

      <div className="glass-card mb-5">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
          <Fingerprint size={24} className="download-icon" />
          <h3 className="color-name" style={{ fontSize: '1.25rem', marginBottom: 0 }}>Cómo Rellenar la Plantilla (Guía de Variables)</h3>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {[
              { label: '[SUBJECT]', value: 'Woman (mujer) con el cabello en un moño (bun hairstyle).' },
              { label: '[PROFILE_VIEW]', value: 'Near-full profile (perfil casi completo).' },
              { label: '[VIEW_DIRECTION]', value: 'Looking upwards (mirando hacia arriba).' },
              { label: '[RIM_LIGHTING_TYPE]', value: 'Intense backlit or contour (intensa retroiluminación o contorno).' },
              { label: '[COLOR_1]', value: 'Vívido, incandescente color rojo-naranja (vivid, glowing red-orange). Contorno frontal.' },
              { label: '[COLOR_2]', value: 'Azul cian profundo o azul eléctrico (deep cyan or electric blue). Contorno trasero.' },
            ].map((v) => (
              <div key={v.label} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '0.75rem' }}>
                <span className="typo-label" style={{ fontSize: '0.7rem', color: 'var(--primary)', display: 'block', marginBottom: '0.25rem' }}>{v.label}</span>
                <p style={{ fontSize: '0.9rem', color: '#fff' }}>{v.value}</p>
              </div>
            ))}
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {[
              { label: '[BACK_FEATURES]', value: 'El cabello recogido y la línea de la mandíbula trasera.' },
              { label: '[ACCESSORIES_WITH_REFLECTIONS]', value: 'Black-framed sunglasses con lentes de espejo.' },
              { label: '[DARK_SILHOUETTE_COLOR]', value: 'Black or near-black deep shadow. Mantiene la cara en sombra.' },
              { label: '[BACKGROUND_COLOR]', value: 'Smooth, solid orange gradient, transitioning to deeper red.' },
              { label: '[MOOD]', value: 'Modern, cinematic, cool, futuristic.' },
            ].map((v) => (
              <div key={v.label} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '0.75rem' }}>
                <span className="typo-label" style={{ fontSize: '0.7rem', color: 'var(--primary)', display: 'block', marginBottom: '0.25rem' }}>{v.label}</span>
                <p style={{ fontSize: '0.9rem', color: '#fff' }}>{v.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
        <div className="glass-card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <Layers3 size={20} className="download-icon" />
            <h4 className="color-name" style={{ marginBottom: 0 }}>Dual-Tone Rim Lighting</h4>
          </div>
          <p className="typo-preview-body" style={{ fontSize: '0.9rem' }}>
            Nuestra fotografía no usa luz frontal. Se basa estrictamente en la **retroiluminación de contorno** para 
            dibujar la silueta. El contraste entre el naranja incandescente y el azul eléctrico refuerza el balance 
            entre calidez creativa y precisión técnica.
          </p>
        </div>
        <div className="glass-card" style={{ borderLeft: '4px solid var(--primary)' }}>
          <h4 className="color-name">Consistencia de Fondo</h4>
          <p className="typo-preview-body" style={{ fontSize: '0.9rem' }}>
            **Innegociable**: Todas las imágenes de marca deben utilizar el degradado naranja a rojo profundo de Nougram. 
            Esto permite que sujetos radicalmente distintos se sientan parte del mismo ecosistema visual.
          </p>
        </div>
      </div>
    </div>
  );
}

function SocialMediaSection() {
  return (
    <div className="animate-slide-in">
      <div className="section-header">
        <h2 className="section-title">Estrategia Social Media</h2>
        <p className="section-subtitle">
          Reglas de juego para dominar la conversación sobre rentabilidad creativa. No disparamos la misma munición en todos lados.
        </p>
      </div>

      {/* MÓDULO 1: Ecosistema de Canales */}
      <div className="glass-card mb-5">
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
          <Workflow size={24} className="download-icon" />
          <h3 className="color-name" style={{ fontSize: '1.25rem', marginBottom: 0 }}>MÓDULO 1: Ecosistema de Canales</h3>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1.5fr) 1fr', gap: '2rem' }}>
          <div className="glass-card" style={{ background: 'rgba(255,255,255,0.03)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
               <h4 style={{ color: 'var(--primary)', fontWeight: 800 }}>💼 LINKEDIN (70%)</h4>
               <span className="badge">Canal Primario</span>
            </div>
            <p style={{ fontSize: '0.9rem', marginBottom: '1.5rem' }}>**Rol**: Autoridad B2B, networking con CEOs, validación de la tesis de negocio.</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
               <div style={{ color: 'var(--accent)', fontSize: '0.85rem' }}>**Do's**: Artículos profundos, hilos de casos de estudio, reflexiones crudas.</div>
               <div style={{ color: '#ff4d4d', fontSize: '0.85rem' }}>**Don'ts**: Memes sin contexto, contenido informal de "estilo de vida".</div>
            </div>
            <a href="https://www.linkedin.com/company/111347513" target="_blank" rel="noopener noreferrer" className="nav-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', background: 'rgba(255,255,255,0.05)', fontSize: '0.75rem', borderRadius: '6px' }}>
               Ir al Perfil <ExternalLink size={14} />
            </a>
          </div>
          
          <div className="glass-card" style={{ background: 'rgba(255,255,255,0.03)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
               <h4 style={{ color: 'var(--primary)', fontWeight: 800 }}>📸 INSTAGRAM (30%)</h4>
               <span className="badge">Canal Secundario</span>
            </div>
            <p style={{ fontSize: '0.9rem', marginBottom: '1.5rem' }}>**Rol**: La trinchera operativa. Captura el dolor emocional del día a día.</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
               <div style={{ color: 'var(--accent)', fontSize: '0.85rem' }}>**Do's**: Carruseles de alto contraste, Reels directos, Expectativa vs Realidad.</div>
               <div style={{ color: '#ff4d4d', fontSize: '0.85rem' }}>**Don't**: Textos interminables, fotos de stock de "oficinas felices".</div>
            </div>
            <a href="https://www.instagram.com/nougram_/" target="_blank" rel="noopener noreferrer" className="nav-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', background: 'rgba(255,255,255,0.05)', fontSize: '0.75rem', borderRadius: '6px' }}>
               Ir al Perfil <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </div>

      {/* MÓDULO 2: Código Visual */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
        <div className="glass-card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <Palette size={24} className="download-icon" />
            <h4 className="color-name" style={{ marginBottom: 0 }}>MÓDULO 2: Código Visual</h4>
          </div>
          <p style={{ fontSize: '0.9rem', marginBottom: '1.5rem', opacity: 0.8 }}>
            Nougram es tecnología e ingeniería financiera. La estética debe gritar "software de alto rendimiento".
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
             <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '2px', background: 'var(--primary)' }}></div>
                <span style={{ fontSize: '0.75rem' }}>Big Orange (#EA580C)</span>
             </div>
             <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '2px', background: '#262537' }}></div>
                <span style={{ fontSize: '0.75rem' }}>Math Blue (#262537)</span>
             </div>
             <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '2px', background: '#E2E8F0' }}></div>
                <span style={{ fontSize: '0.75rem' }}>Smoth Blue (#E2E8F0)</span>
             </div>
          </div>
        </div>

        <div className="glass-card" style={{ borderLeft: '4px solid var(--primary)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <Type size={24} className="download-icon" />
            <h4 className="color-name" style={{ marginBottom: 0 }}>Tipografía Oficial</h4>
          </div>
          <div style={{ fontSize: '0.85rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <p>**Lato**: Principal y cuerpos de texto. Legibilidad técnica.</p>
            <p>**Montserrat**: Subtítulos y acentos. Estética moderna.</p>
            <p>**JetBrains Mono**: Exclusivo para KPIs y métricas (Modo Código).</p>
          </div>
        </div>
      </div>

      {/* MÓDULO 3 & 4: Arquitectura y Tono */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
        <div className="glass-card">
           <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <Target size={24} className="download-icon" />
            <h4 className="color-name" style={{ marginBottom: 0 }}>MÓDULO 3: El Embudo Invisible</h4>
          </div>
          <div style={{ fontSize: '0.95rem' }}>
             <p style={{ color: 'var(--primary)', fontWeight: 800, marginBottom: '0.5rem' }}>Elevator Pitch:</p>
             <p style={{ fontStyle: 'italic', marginBottom: '1.5rem', padding: '0.75rem', background: 'rgba(255,255,255,0.03)', borderRadius: '8px' }}>
                "El CFO digital para agencias escalables. Matamos el ojímetro. Cotizá con datos, blindá tu margen y dejá de regalar tu experiencia."
             </p>
             <div style={{ display: 'flex', gap: '1rem' }}>
                <div style={{ flex: 1 }}>
                   <p style={{ fontWeight: 800, fontSize: '0.8rem', color: 'var(--primary)' }}><Pin size={12} /> PINNED POSTS:</p>
                   <p style={{ fontSize: '0.8rem', opacity: 0.7 }}>El Manifiesto • El Producto • Prueba Social</p>
                </div>
             </div>
          </div>
        </div>

        <div className="glass-card">
           <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <Stethoscope size={24} className="download-icon" />
            <h4 className="color-name" style={{ marginBottom: 0 }}>MÓDULO 4: Tono Argento-Profesional</h4>
          </div>
          <p style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>
            **Personalidad**: El Sabio + El Creador. Directo, brutal y experto (Cirujano Financiero).
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
             <div style={{ fontSize: '0.8rem' }}>
                <p style={{ color: 'var(--primary)', fontWeight: 800 }}>SÍ:</p>
                Humor Insider, Cifra Neta, Fuga de Capital, Ironía Fina.
             </div>
             <div style={{ fontSize: '0.8rem' }}>
                <p style={{ color: '#ff4d4d', fontWeight: 800 }}>NO:</p>
                Sensacionalismo, "Echale ganas", "Vibras positivas".
             </div>
          </div>
        </div>
      </div>

      {/* MÓDULO 5: Matriz de Contenido */}
      <div className="glass-card">
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
          <BarChart3 size={24} className="download-icon" />
          <h3 className="color-name" style={{ fontSize: '1.25rem', marginBottom: 0 }}>MÓDULO 5: Matriz de Contenido</h3>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
          {[
            { title: 'Ingeniería Financiera', desc: 'Carruseles con gráficos de barras e infografía de rentabilidad real.' },
            { title: 'Física Operativa', desc: 'Diagramas de flujo de procesos e hilos sobre cuellos de botella.' },
            { title: 'Psicología del Cobro', desc: 'Videos cortos (Reels) destripando mitos de precios y autoridad.' },
            { title: 'La Trinchera', desc: 'Capturas de cotizaciones mal hechas (anonimizadas) y Building in public.' },
          ].map((col) => (
            <div key={col.title} style={{ padding: '1rem', background: 'rgba(255,255,255,0.03)', borderRadius: '12px' }}>
               <h5 style={{ color: 'var(--primary)', marginBottom: '0.5rem', fontSize: '0.9rem' }}>{col.title}</h5>
               <p style={{ fontSize: '0.8rem', opacity: 0.7 }}>{col.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginTop: '3rem', textAlign: 'center' }}>
         <img src="/social-grid.png" alt="Instagram Grid Mockup" style={{ width: '100%', maxWidth: '800px', borderRadius: '16px', border: '1px solid var(--glass-border)' }} />
      </div>
    </div>
  );
}

function DownloadsSection() {
  const assets = [
    { 
      title: 'Official Logo Pack', 
      type: 'ZIP (SVG, PNG)', 
      size: '13.2 KB', 
      link: '/Logo Assets/Logo Pack.zip' 
    },
    { 
      title: 'Lato Typeface (Main)', 
      type: 'Google Fonts', 
      size: 'Cloud Service', 
      link: 'https://fonts.google.com/specimen/Lato?preview.script=Latn' 
    },
    { 
      title: 'Montserrat Typeface', 
      type: 'Google Fonts', 
      size: 'Cloud Service', 
      link: 'https://fonts.google.com/specimen/Montserrat' 
    },
    { 
      title: 'Brand Style Guide', 
      type: 'PDF (Digital)', 
      size: '2.5 MB', 
      link: '#' 
    },
  ];

  return (
    <div className="animate-slide-in">
      <div className="section-header">
        <h2 className="section-title">Descargas</h2>
        <p className="section-subtitle">
          Recursos oficiales para la implementación de la marca Nougram.
        </p>
      </div>

      <div className="download-grid">
        {assets.map((asset, i) => (
          <a 
            key={asset.title} 
            href={asset.link} 
            download 
            className={`download-card delay-${(i+1)*100} animate-slide-in`}
            style={{ textDecoration: 'none' }}
          >
            <div className="download-info">
              <h4 style={{ color: '#fff' }}>{asset.title}</h4>
              <p>{asset.type} • {asset.size}</p>
            </div>
            <Download className="download-icon" size={24} />
          </a>
        ))}
      </div>
    </div>
  );
}

function App() {
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch(activeTab) {
      case 'overview': return <OverviewSection />;
      case 'concept': return <BrandConceptSection />;
      case 'personality': return <PersonalitySection />;
      case 'colors': return <ColorsSection />;
      case 'typography': return <TypographySection />;
      case 'photography': return <PhotographySection />;
      case 'social': return <SocialMediaSection />;
      case 'downloads': return <DownloadsSection />;
      default: return <OverviewSection />;
    }
  };

  return (
    <div className="app-container">
      {/* Background Effects */}
      <div className="bg-orbs">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
      </div>

      {/* Sidebar Navigation */}
      <aside className="sidebar">
        <div style={{ marginBottom: '3rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', padding: '0.5rem' }}>
          <img 
            src="/Logo Assets/Logo nougram f2orange.png" 
            alt="Nougram Logo" 
            style={{ width: '100%', maxWidth: '180px', height: 'auto', display: 'block' }} 
          />
          <div style={{ 
            fontSize: '0.65rem', 
            letterSpacing: '0.25em', 
            color: 'var(--primary)', 
            fontWeight: 700, 
            opacity: 0.9,
            fontFamily: 'Montserrat'
          }}>
            BRAND CENTER
          </div>
        </div>

        <nav>
          {TABS.map(tab => (
            <button
              key={tab.id}
              className={`nav-link w-full text-left ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
              style={{ width: '100%', background: 'transparent', textAlign: 'left' }}
            >
              <tab.icon size={20} />
              {tab.label}
              {activeTab === tab.id && <ChevronRight size={16} style={{ marginLeft: 'auto' }} />}
            </button>
          ))}
        </nav>

        <div style={{ marginTop: 'auto', paddingTop: '2rem' }}>
          <p className="typo-preview-body" style={{ fontSize: '0.8rem', textAlign: 'center', opacity: 0.5 }}>
            v2.1.0 — 2026<br/>
            Internal Use Only
          </p>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="main-content">
        {renderContent()}
      </main>
    </div>
  );
}

export default App;
