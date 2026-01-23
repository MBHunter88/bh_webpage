// app/about/page.js  (App Router)
// or pages/about.js  (Pages Router)

import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="bh-page bh-about">
      {/* Intro Section */}
      <section className="bh-section bh-section-intro">
        <h1 className="bh-section-title">About Bedford Hunter Better Home</h1>
        <p className="bh-section-text">
          Bedford Hunter Better Home is a family-owned Provider Referral Agency
          and Collective rooted in compassion, education, and culturally
          responsive care. We connect families with with experienced, insured
          and compassionate professionals who align with each family&apos;s unique
          needs. Every provider in our network upholds our values of care,
          integrity, and professionalism.
        </p>
        <p className="bh-section-text">
          We handle the coordination so you can focus on family, rest, and
          recovery.
        </p>
      </section>

      {/* Team Section */}
      <section className="bh-section bh-section-team">
        <h2 className="bh-subtitle">Meet the Owners</h2>

        <div className="bh-team-grid">
          {/* Paisley */}
          <article className="bh-team-card">
            <div className="bh-team-image-wrapper">
              <Image
                src="/Paisley_Headshot.webp"
                alt="Portrait of Paisley Bedford Hunter"
                width={400}
                height={400}
                className="bh-team-image"
              />
            </div>

            <div className="bh-team-content">
              <h3 className="bh-team-name">Paisley Bedford Hunter</h3>
              <p className="bh-team-role">Owner & Full-Spectrum Doula</p>

              <p className="bh-team-text">
                Paisley’s philosophy of care is simple: create a safe space
                where adults and children feel seen, supported, and respected.
                With a background in <strong>Psychology</strong>,{" "}
                <strong>Child Development</strong>, and{" "}
                <strong>Human &amp; Family Development</strong>, she understands
                that each family’s needs look different—and that honoring those
                differences is essential for genuine, connected care.
              </p>
              <p className="bh-team-text">
                Over the past 12 years, Paisley has worked as a{" "}
                <strong>Nanny</strong>, <strong>Newborn Care Specialist</strong>
                , and <strong>Postpartum Doula</strong>, guided by a commitment
                to nurturing care and ongoing education. She believes deeply in
                staying informed through evidence-based learning so families
                receive thoughtful, current, and trustworthy guidance.
              </p>
              <p className="bh-team-text">
                Her ultimate goal is to foster relationships that nurture
                happier, well-rounded, and compassionate individuals and
                families.
              </p>
            </div>
          </article>

          {/* Michelle */}
          <article className="bh-team-card">
            <div className="bh-team-image-wrapper">
              <Image
                src="/slack_photo.jpeg" // <-- update with your actual path
                alt="Portrait of Michelle Bedford Hunter"
                width={400}
                height={400}
                className="bh-team-image"
              />
            </div>

            <div className="bh-team-content">
              <h3 className="bh-team-name">Michelle Bedford Hunter</h3>
              <p className="bh-team-role">Owner & Postpartum Doula</p>

              <p className="bh-team-text">
                Michelle brings over a decade of professional childcare
                experience, with a background spanning babysitting, nannying,
                newborn care, and postpartum support. Her work is grounded in
                warmth, intention, and a deep respect for the transitions that
                families navigate.
              </p>
              <p className="bh-team-text">
                Her journey began at 16, when she was entrusted with the care of
                a 3-month-old cousin. That early responsibility sparked a
                lifelong passion for supporting families and building meaningful
                relationships. Today, Michelle approaches doula work with that
                same sense of care and purpose.
              </p>
              <p className="bh-team-text">
                As a lifelong learner, she continues to expand her training and
                skills, valuing every family she serves as both teacher and
                collaborator. At the heart of her work is a desire to help
                parents feel confident, informed, and supported as they grow
                their families.
              </p>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
