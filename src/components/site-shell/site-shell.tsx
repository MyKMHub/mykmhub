import Link from "next/link";
import { PreferencesMenu } from "@/components/accessibility/preferences-menu";
import { PRIMARY_NAVIGATION } from "@/content/navigation";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="site">
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>

      <header className="site-header">
        <div className="header-inner">
          <Link className="site-identity" href="/" aria-label="MyKMHub, home">
            MyKMHub
          </Link>

          <div className="site-controls">
            <nav className="primary-nav" aria-label="Primary navigation">
              <ul>
                {PRIMARY_NAVIGATION.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} aria-current={item.href === "/" ? "page" : undefined}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <PreferencesMenu />
          </div>
        </div>
      </header>

      <main id="main-content" className="main-content" tabIndex={-1}>
        {children}
      </main>

      <footer className="site-footer">
        <div className="footer-inner">
          <p>
            <strong>MyKMHub</strong>
          </p>
          <p>A public HCD Director toolkit and knowledge hub.</p>
        </div>
      </footer>
    </div>
  );
}
