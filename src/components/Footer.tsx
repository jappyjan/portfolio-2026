import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Mail, href: "mailto:hello@janjaap.dev", label: "Email" },
];

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <p className="text-muted-foreground text-sm">
            Built with curiosity by <span className="text-foreground font-medium">JanJaap</span> 🦝
          </p>

          {/* Social links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="p-2 text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Fun tagline */}
        <p className="text-center text-xs text-muted-foreground/50 mt-8">
          Probably coding something new right now 🌙
        </p>
      </div>
    </footer>
  );
};

export default Footer;
