// app/page.js
import Link from "next/link";

export const metadata = {
  title: "Home",
  description:
    "Bedford Hunter Better Home offers full-spectrum doula, postpartum, and newborn care support for families across the Bay Area.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://bhbetterhome.com";
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Bedford Hunter Better Home",
    description:
      "Provider Referral Agency and Collective offering full-spectrum doula, postpartum, and newborn care services.",
    url: siteUrl,
    areaServed: "Bay Area, California",
    serviceType: [
      "Postpartum Support",
      "Prenatal & Birth/Labor Support",
      "Newborn Care & Education",
      "Sibling Care & Family Integration",
      "Nutritional Guidance & Meal Prep",
      "Infant Sleeping Strategies",
    ],
    email: "info@bhbetterhome.com",
    image: `${siteUrl}/logo.webp`,
  };

  return (
    <div className="page-wrapper">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* MAIN */}
      <main className="main-content">
        {/* SPECIALIZATIONS FIRST */}
        <section
          className="section"
          aria-labelledby="specializations-heading"
        >
<div className="announcement-banner announcement-bold" >
  <p>
    ✨ Big news — We&apos;re growing! Bedford Hunter Better Home has officially expanded from our solo practice
    to a Provider Referral Agency and Collective — connecting families with trusted perinatal professionals
    across the Bay Area{' '}
    <Link href="/contact" className="announcement-link">
      Contact us to learn more!
    </Link>
  </p>
</div>

          <h1 id="specializations-heading" className="section-heading">
            Nurturing new beginnings.
          </h1>
          {/* <p className="section-tagline">
            Gentle, grounded care with a focus on...
          </p> */}

          <article >
            <div className="mission-text">
              <p>
                We listen closely, move at your pace, and offer practical,
                evidence-informed support so you can rest, heal, and bond with
                your baby in a way that feels right for you.
              </p>

              <p className="mission-focus-intro">
                We specialize in full-spectrum support, including:
              </p>
              <div className="mission-pill-list">
                <span className="mission-pill">Postpartum Support</span>
                <span className="mission-pill">Prenatal &amp; Birth/Labor Support</span>
                <span className="mission-pill">Newborn Care &amp; Education</span>
                <span className="mission-pill">
                  Sibling Care &amp; Family Integration
                </span>
                <span className="mission-pill">
                  Nutritional Guidance &amp; Meal Prep
                </span>
                <span className="mission-pill">
                  Infant Sleeping Strategies
                </span>
              </div>
            </div>
          </article>
        </section>

        {/* THEN MISSION STATEMENT */}
        <section
          id="mission"
          className="section"
          aria-labelledby="mission-heading"
        >
          <h2 id="mission-heading" className="section-heading">
            Our Mission
          </h2>
          <p className="section-tagline">
            Creating a calm, affirming space where every family and every infant
            can thrive.
          </p>

          <article className="mission-card">
            <div className="mission-text">
              <p>
                Our mission remains the same: to nuture calm, confidence and connections through the journey of pregnancy and parenthood --
                but now we are doing it through a network of comapssionate, vetted providers who share the same commitment
                to quality care. 
              </p>
              <p>
                Whether you are a new parent seeking support or a doula looking to join a community of like-minded professionals,
                Bedford Hunter Better Home is here to connect you. 
              </p>
            </div>
          </article>
        </section>

        {/* TESTIMONIALS */}
        <section
          className="section testimonials-section"
          aria-labelledby="testimonials-heading"
        >
          <h2 id="testimonials-heading" className="section-heading">
            Families we&apos;ve supported
          </h2>
          <p className="section-tagline">
            A glimpse into how care with Bedford Hunter Better Home can feel.
          </p>

          <div className="testimonial-grid">
            <article className="testimonial-card">
              <p className="testimonial-quote">
                “We felt so held in every moment. They helped us advocate for
                ourselves and made our postpartum feel calm and grounded.”
              </p>
              <p className="testimonial-client">— A. &amp; J., first-time parents</p>
            </article>

            <article className="testimonial-card">
              <p className="testimonial-quote">
                “As a queer family of color, finding care that truly saw us was
                everything. We never had to explain or shrink who we are.”
              </p>
              <p className="testimonial-client">— M. &amp; R.</p>
            </article>

            <article className="testimonial-card">
              <p className="testimonial-quote">
                “They came in with so much knowledge and zero judgment. Our baby
                slept, we rested, and we actually enjoyed those early weeks.”
              </p>
              <p className="testimonial-client">— S., solo parent</p>
            </article>
          </div>
        </section>
      </main>

    
    </div>
  );
}
