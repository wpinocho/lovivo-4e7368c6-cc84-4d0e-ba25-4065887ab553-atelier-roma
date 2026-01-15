import { useState } from 'react'
import { EcommerceTemplate } from '@/templates/EcommerceTemplate'
import { Button } from '@/components/ui/button'
import { Mail } from 'lucide-react'

const content = {
  en: {
    nav: {
      story: 'Story',
      retail: 'Retail',
      collection: 'Collection',
      contact: 'Contact'
    },
    hero: {
      title: 'The Souvenir You\'ll Actually Wear',
      subtitle: 'Designed in Mexico for travelers who want meaning, not mass market.'
    },
    story: {
      label: 'Origin Story',
      title: 'Inspired by Mexico\'s Cultural Richness',
      text1: 'Mexico City has an extraordinary cultural wealth—its neighborhoods, street energy, craftsmanship, and creative spirit are unmatched.',
      text2: 'We saw an opportunity to translate that richness into contemporary design: pieces that capture the essence of the place while honoring its authenticity.',
      text3: 'Atelier Roma was born from a love for this city and a desire to create wearable cultural objects that travelers could carry with them—not as souvenirs, but as memories they\'re proud to wear.',
      text4: 'Design that honors. Culture that travels.'
    },
    why: {
      label: 'Why Travelers Choose Us',
      title: 'Not a Souvenir. A Memory You Wear.',
      reason1: {
        title: 'Culturally Authentic',
        text: 'Every design tells a story about Mexico City—from neighborhood culture to local humor. Real. Not generic.'
      },
      reason2: {
        title: 'Premium Design',
        text: 'Typography, illustration, and craft meet to create pieces that feel curated, not mass-produced.'
      },
      reason3: {
        title: 'Worn With Pride',
        text: '90% of our customers are international tourists who buy for themselves—not just as gifts.'
      },
      reason4: {
        title: 'Made in Mexico',
        text: 'Designed and produced locally. Every piece connects travelers to the craftsmanship of the place they visited.'
      }
    },
    retail: {
      label: 'Why Airports & Concept Stores',
      title: 'Built for Travel Retail',
      text1: 'Atelier Roma thrives in high-traffic cultural spaces: concept stores in Roma and Condesa, boutiques frequented by tourists looking for something special.',
      text2: 'We\'re designed for the moment a traveler decides: "I want to take this city with me."',
      stat1: '90% foreign customers',
      stat2: 'Proven concept store success',
      stat3: 'Limited drops + core collection',
      vision: 'Our vision for airport retail is simple: become the first choice for travelers seeking a meaningful, wearable memory of Mexico.',
      cta: 'Perfect for duty-free, departure lounges, and travel retail environments where design and culture meet wanderlust.'
    },
    collection: {
      label: 'Collection',
      title: 'Culture as Design',
      text: 'Each piece is inspired by the neighborhoods, rituals, and street energy of Mexico City. Limited drops. Timeless staples. All made to be worn, not stored.'
    },
    partnership: {
      label: 'Retail Partnerships',
      title: 'Let\'s Bring This to Your Space',
      text: 'We\'re actively seeking partnerships with airports, concept stores, and travel retail curators who value cultural authenticity and premium design.',
      cta: 'Reach Out',
      email: 'partnerships@atelierroma.mx'
    },
    footer: {
      tagline: 'Wearable culture for travelers',
      rights: 'All rights reserved',
      contact: 'Contact'
    }
  },
  es: {
    nav: {
      story: 'Historia',
      retail: 'Retail',
      collection: 'Colección',
      contact: 'Contacto'
    },
    hero: {
      title: 'El Souvenir Que Si Usaras',
      subtitle: 'Disenado en Mexico para viajeros que buscan significado, no mercado masivo.'
    },
    story: {
      label: 'Historia de Origen',
      title: 'Inspirado por la Riqueza Cultural de México',
      text1: 'La Ciudad de México tiene una riqueza cultural extraordinaria: sus barrios, su energía callejera, su artesanía y su espíritu creativo son inigualables.',
      text2: 'Vimos la oportunidad de traducir esa riqueza en diseño contemporáneo: piezas que capturan la esencia del lugar mientras honran su autenticidad.',
      text3: 'Atelier Roma nació del amor por esta ciudad y el deseo de crear objetos culturales vestibles que los viajeros puedan llevar consigo—no como souvenirs, sino como recuerdos que usan con orgullo.',
      text4: 'Diseño que honra. Cultura que viaja.'
    },
    why: {
      label: 'Por Que los Viajeros nos Eligen',
      title: 'No es un Souvenir. Es un Recuerdo que Usas.',
      reason1: {
        title: 'Culturalmente Auténtico',
        text: 'Cada diseño cuenta una historia sobre la Ciudad de México: cultura de barrio, humor local. Real. No genérico.'
      },
      reason2: {
        title: 'Diseño Premium',
        text: 'Tipografía, ilustración y artesanía se unen para crear piezas que se sienten curadas, no producidas en masa.'
      },
      reason3: {
        title: 'Usado con Orgullo',
        text: 'El 90% de nuestros clientes son turistas internacionales que compran para sí mismos, no solo como regalo.'
      },
      reason4: {
        title: 'Hecho en México',
        text: 'Diseñado y producido localmente. Cada pieza conecta a los viajeros con la artesanía del lugar que visitaron.'
      }
    },
    retail: {
      label: 'Por Qué Aeropuertos y Concept Stores',
      title: 'Diseñado para Retail de Viajes',
      text1: 'Atelier Roma prospera en espacios culturales de alto tráfico: concept stores en Roma y Condesa, boutiques frecuentadas por turistas buscando algo especial.',
      text2: 'Estamos diseñados para el momento en que un viajero decide: "Quiero llevar esta ciudad conmigo."',
      stat1: '90% clientes extranjeros',
      stat2: 'Éxito comprobado en concept stores',
      stat3: 'Drops limitados + colección core',
      vision: 'Nuestra visión para retail aeroportuario es simple: convertirnos en la primera opción para viajeros que buscan una memoria significativa y vestible de México.',
      cta: 'Perfecto para duty-free, salas de salida y ambientes de retail de viajes donde el diseño y la cultura encuentran el wanderlust.'
    },
    collection: {
      label: 'Colección',
      title: 'Cultura como Diseño',
      text: 'Cada pieza está inspirada en los barrios, rituales y energía callejera de la Ciudad de México. Drops limitados. Básicos atemporales. Todo hecho para ser usado, no guardado.'
    },
    partnership: {
      label: 'Alianzas Retail',
      title: 'Llevemos Esto a tu Espacio',
      text: 'Buscamos activamente alianzas con aeropuertos, concept stores y curadores de retail de viajes que valoren la autenticidad cultural y el diseño premium.',
      cta: 'Contáctanos',
      email: 'partnerships@atelierroma.mx'
    },
    footer: {
      tagline: 'Cultura vestible para viajeros',
      rights: 'Todos los derechos reservados',
      contact: 'Contacto'
    }
  }
}

export default function Index() {
  const [lang, setLang] = useState<'en' | 'es'>('en')
  const t = content[lang]

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <EcommerceTemplate>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <img 
              src="/logo-atelier-roma.png" 
              alt="Atelier Roma" 
              className="h-6 md:h-7"
            />

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-8 text-sm">
              <button onClick={() => scrollToSection('story')} className="hover:text-accent transition-colors">
                {t.nav.story}
              </button>
              <button onClick={() => scrollToSection('retail')} className="hover:text-accent transition-colors">
                {t.nav.retail}
              </button>
              <button onClick={() => scrollToSection('collection')} className="hover:text-accent transition-colors">
                {t.nav.collection}
              </button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-accent transition-colors">
                {t.nav.contact}
              </button>
            </nav>

            {/* Language Toggle */}
            <div className="flex items-center gap-2 text-sm">
              <button
                onClick={() => setLang('en')}
                className={`px-3 py-1 rounded transition-all ${
                  lang === 'en' 
                    ? 'bg-foreground text-background' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLang('es')}
                className={`px-3 py-1 rounded transition-all ${
                  lang === 'es' 
                    ? 'bg-foreground text-background' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                ES
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="/hero-roma-neighborhood.jpg" 
            alt="Roma neighborhood" 
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/70 to-background"></div>
        </div>
        
        <div className="container mx-auto px-6 lg:px-12 py-24 relative z-10">
          <div className="max-w-5xl">
            <h1 className="editorial-heading text-foreground mb-6">The Clothing Souvenir You'll Actually Wear{t.hero.title}
            </h1>
            <p className="brand-text text-foreground/80 max-w-2xl">Designed in Mexico for travelers who want meaning, not mass market.{t.hero.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section id="story" className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <p className="brand-label text-muted-foreground mb-6">{t.story.label}</p>
              <h2 className="brand-subheading mb-8">{t.story.title}</h2>
              <div className="space-y-6 brand-text text-muted-foreground">
                <p>{t.story.text1}</p>
                <p>{t.story.text2}</p>
                <p className="text-foreground font-normal">{t.story.text3}</p>
                <p className="text-accent italic">{t.story.text4}</p>
              </div>
            </div>
            <div className="relative aspect-[4/5] rounded overflow-hidden">
              <img 
                src="https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/message-images/temp_1768333531361_86919d2e/1768333531361-ivcm3f2ez8l.jpg" 
                alt="Travelers at Teotihuacan" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="py-24 md:py-32 bg-secondary/30">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mb-16">
            <p className="brand-label text-muted-foreground mb-6">{t.why.label}</p>
            <h2 className="brand-subheading">{t.why.title}</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            <div className="space-y-4">
              <h3 className="text-xl font-normal">{t.why.reason1.title}</h3>
              <p className="brand-text text-muted-foreground">{t.why.reason1.text}</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-normal">{t.why.reason2.title}</h3>
              <p className="brand-text text-muted-foreground">{t.why.reason2.text}</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-normal">{t.why.reason3.title}</h3>
              <p className="brand-text text-muted-foreground">{t.why.reason3.text}</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-normal">{t.why.reason4.title}</h3>
              <p className="brand-text text-muted-foreground">{t.why.reason4.text}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Retail Section */}
      <section id="retail" className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="relative aspect-[3/2] rounded overflow-hidden order-2 lg:order-1">
              <img 
                src="/airport-retail-vision.jpg" 
                alt="Airport retail vision" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <p className="brand-label text-muted-foreground mb-6">{t.retail.label}</p>
              <h2 className="brand-subheading mb-8">{t.retail.title}</h2>
              <div className="space-y-6 brand-text text-muted-foreground mb-12">
                <p>{t.retail.text1}</p>
                <p className="text-foreground font-normal">{t.retail.text2}</p>
              </div>

              <div className="grid grid-cols-3 gap-6 mb-12">
                <div>
                  <p className="text-3xl font-light mb-2">90%</p>
                  <p className="text-sm text-muted-foreground">{t.retail.stat1}</p>
                </div>
                <div>
                  <p className="text-3xl font-light mb-2">✓</p>
                  <p className="text-sm text-muted-foreground">{t.retail.stat2}</p>
                </div>
                <div>
                  <p className="text-3xl font-light mb-2">∞</p>
                  <p className="text-sm text-muted-foreground">{t.retail.stat3}</p>
                </div>
              </div>

              <div className="space-y-4 brand-text text-muted-foreground">
                <p className="text-foreground font-normal">{t.retail.vision}</p>
                <p className="text-sm">{t.retail.cta}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collection Section */}
      <section id="collection" className="py-24 md:py-32 bg-foreground text-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mb-16">
            <p className="brand-label text-background/60 mb-6">{t.collection.label}</p>
            <h2 className="brand-subheading mb-8">{t.collection.title}</h2>
            <p className="brand-text text-background/80">{t.collection.text}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="aspect-square bg-background/5 rounded overflow-hidden">
              <img 
                src="https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/message-images/temp_1768333531361_86919d2e/1768333531361-ir4f9mso20f.jpg" 
                alt="Cabrones Athletic Club - Black" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="aspect-square bg-background/5 rounded overflow-hidden">
              <img 
                src="https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/message-images/temp_1768333531361_86919d2e/1768333531361-cxh5ye38jfh.jpg" 
                alt="Cabrones Athletic Club - White" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="aspect-square bg-background/5 rounded overflow-hidden">
              <img 
                src="https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/message-images/temp_1768333531361_86919d2e/1768333531361-9hisjb7c6jc.jpg" 
                alt="México Taco Club" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="aspect-square bg-background/5 rounded overflow-hidden">
              <img 
                src="https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/message-images/temp_1768333531361_86919d2e/1768333531361-6jy62sujnxq.jpg" 
                alt="Store display" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Partnership CTA Section */}
      <section id="contact" className="py-24 md:py-32 bg-accent text-accent-foreground">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <p className="brand-label text-accent-foreground/60 mb-6">{t.partnership.label}</p>
            <h2 className="brand-subheading mb-8">{t.partnership.title}</h2>
            <p className="brand-text text-accent-foreground/90 mb-12">
              {t.partnership.text}
            </p>
            <Button 
              size="lg" 
              variant="outline"
              className="bg-accent-foreground text-accent hover:bg-accent-foreground/90 border-0 h-14 px-12 text-base"
              asChild
            >
              <a href={`mailto:${t.partnership.email}`} className="flex items-center gap-3">
                <Mail className="h-5 w-5" />
                {t.partnership.cta}
              </a>
            </Button>
            <p className="text-sm text-accent-foreground/70 mt-6">{t.partnership.email}</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-foreground text-background border-t border-background/10">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <img 
                src="/logo-atelier-roma.png" 
                alt="Atelier Roma" 
                className="h-5 brightness-0 invert"
              />
              <p className="text-sm text-background/60">{t.footer.tagline}</p>
            </div>
            <div className="flex items-center gap-6 text-sm text-background/60">
              <a href={`mailto:${t.partnership.email}`} className="hover:text-background transition-colors">
                {t.footer.contact}
              </a>
              <span>© 2024 Atelier Roma</span>
              <span>{t.footer.rights}</span>
            </div>
          </div>
        </div>
      </footer>
    </EcommerceTemplate>
  )
}