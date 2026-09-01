import { siteClose } from "@/lib/content";

export function Footer() {
  return (
    <footer
      id="cierre"
      className="site-close px-[4.861vw] pt-10 pb-16"
      aria-labelledby="site-close-note"
    >
      <div className="site-close-frame">
        <img
          src="/images/footer-montana.jpg?v=3"
          alt={siteClose.artAlt}
          className="site-close-art"
        />
        <p id="site-close-note" className="site-close-note">
          <span className="site-close-thanks">{siteClose.thanks}</span>
          <span className="site-close-invite">{siteClose.invite}</span>
          <span className="site-close-name">{siteClose.name}</span>
        </p>
      </div>
    </footer>
  );
}
