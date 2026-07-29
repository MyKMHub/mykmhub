import Link from "next/link";

export default function NotFound() {
  return (
    <article className="not-found-page">
      <header>
        <p className="eyebrow">Error 404</p>
        <h1>This page could not be found</h1>
        <p className="hero-summary">
          The address may be outdated, the content may still be in draft, or
          the page may have moved.
        </p>
      </header>

      <section className="not-found-help" aria-labelledby="recovery-heading">
        <div>
          <h2 id="recovery-heading">Choose another path</h2>
          <p>
            Return to the homepage, browse portfolio case studies, or explore
            the working tools and concepts.
          </p>
        </div>
        <nav aria-label="Page recovery">
          <ul>
            <li>
              <Link href="/">Go to the homepage</Link>
            </li>
            <li>
              <Link href="/portfolio">Browse the portfolio</Link>
            </li>
            <li>
              <Link href="/tools">Explore tools</Link>
            </li>
          </ul>
        </nav>
      </section>
    </article>
  );
}
