// app/contact/page.js
//import "./contact.css";

export const metadata = {
  title: "Contact",
  description:
    "Contact Bedford Hunter Better Home to connect with Bay Area doula, postpartum, and newborn care support.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="contact-page" aria-labelledby="contact-heading">
      <section className="contact-intro">
        <h1 id="contact-heading" className="contact-title">
          Contact Bedford Hunter Better Home
        </h1>
        <p className="contact-subtitle">
          Whether you&apos;re looking for support for your family or hoping to
          join our doula team, we&apos;d love to hear from you.
        </p>
      </section>

      <section
        className="contact-grid"
        aria-label="Contact options for families and doulas"
      >
        {/* Potential Families */}
        <article className="contact-card">
          <h2>Families</h2>
          <p>
            Share a bit about your family
            and the kind of support you are seeking. We&apos;ll follow up
            with next steps and availability.
          </p>

          <a
            className="contact-button"
            href="https://app.doulado.co/client?eyJpbnRha2VfaWQiOiIxNzkyIn0%3D=_"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open Inquiry Form
          </a>
        </article>

        {/* Potential Providers */}
        <article className="contact-card">
          <h2> Providers</h2>
          <p>
            If you&apos;re a doula, newborn care specialist, or perinatal
            provider interested in collaborating or joining the team, we&apos;d
            love to connect.
          </p>


          <a
            className="contact-button secondary"
            href="https://app.doulado.co/client?eyJpbnRha2VfaWQiOiIxODUzIn0%3D=_"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open Provider Interest Form
          </a>
        </article>
      </section>

      <section className="contact-footer-note">
        <p>
          You can also reach us at{" "}
          <span className="contact-highlight">info@bhbetterhome.com</span>{" "}
         
            for general inquiries.
          
        </p>
      </section>
    </main>
  );
}
