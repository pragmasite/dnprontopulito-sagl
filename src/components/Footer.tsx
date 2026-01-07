import { Link } from "react-router-dom";
import { useLanguage } from "@/hooks/useLanguage";

const Footer = () => {
  const { t, otherLangPath, otherLang } = useLanguage();

  const navLinks = [
    { id: "about-us", label: t.aboutUs.label },
    { id: "services", label: t.services.label },
    { id: "gallery", label: t.gallery.label },
    { id: "hours", label: t.hours.label },
    { id: "contact", label: t.contact.label },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-12 md:grid-cols-4 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex flex-col gap-2 mb-6">
              <h3 className="font-serif text-xl font-bold">Pronto Pulito</h3>
              <p className="text-sm text-primary-foreground/70">
                {t.footer.tagline}
              </p>
            </div>
            <p className="text-sm text-primary-foreground/70">
              {t.footer.description}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">
              {t.footer.navigation}
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Languages */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">
              {t.footer.languages}
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  Italiano
                </a>
              </li>
              <li>
                <Link
                  to={otherLangPath}
                  className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  {otherLang === "en" ? "English" : "Italiano"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">
              {t.contact.label}
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="tel:+41796204927"
                  className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  +41 79 620 49 27
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@prontopulito.ch"
                  className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  info@prontopulito.ch
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20" />

        {/* Copyright */}
        <div className="mt-8 text-center text-sm text-primary-foreground/60">
          <p>
            &copy; {new Date().getFullYear()} Pronto Pulito Sagl.{" "}
            {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
