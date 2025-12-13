// app/page.js
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="page-wrapper">

      {/* MAIN */}
      <main className="main-content">
        {/* SPECIALIZATIONS FIRST */}
        <section
          className="section"
          aria-labelledby="specializations-heading"
        >
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
                At Bedford Hunter Better Home, we are dedicated to providing
                compassionate and inclusive care to families. Our mission is to create a
                safe and empowering space where every person feels seen, heard,
                and valued. We recognize the unique challenges faced by
                marginalized communities within the medical system, and we
                strive to bridge that gap by offering culturally sensitive care
                and unwavering support.
              </p>
              <p>
                Our team of pecializes in providing
               full spectrum doula services and expert newborn care. We are
                committed to promoting the physical, emotional, and mental
                well-being. From prenatal guidance
                and childbirth support to postpartum care and newborn education,
                we are here to help your family 
                with ease and confidence.
              </p>
              <p>
                By cultivating a nurturing environment, we aim to empower
                families to make informed choices that align with their values
                and desires. We foster an atmosphere of respect, acceptance, and
                celebration of diverse identities and family structures. Our
                work centers those who have historically been overlooked, while
                welcoming all families seeking thoughtful, heart-centered care.
              </p>
              <p>
                Together, we can create a world where every family and every
                infant thrives.
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
