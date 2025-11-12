import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Facebook, Linkedin, Youtube } from "lucide-react";
import logo from "@/assets/pbts-logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={logo} alt="PBTS" className="h-12 w-12" />
              <div className="font-heading font-bold text-lg">PBTS</div>
            </div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              World-class technical and professional training for the oil, gas, and industrial sectors.
            </p>
            <div className="flex gap-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">About Us</Link></li>
              <li><Link to="/courses" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">Our Courses</Link></li>
              <li><Link to="/verify" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">Verify Certificate</Link></li>
              <li><Link to="/dashboard" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">Student Portal</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-primary-foreground/80">
                <MapPin className="h-5 w-5 shrink-0 mt-0.5" />
                <span>Km 17 Port Harcourt/Aba Expressway, By Old Toll Gate, Iriebe, Port Harcourt, Nigeria</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-primary-foreground/80">
                <Phone className="h-5 w-5 shrink-0" />
                <span>+234 806 228 4991</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-primary-foreground/80">
                <Mail className="h-5 w-5 shrink-0" />
                <span>training@petrobasegroup.com</span>
              </li>
            </ul>
          </div>

          {/* Training Areas */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Training Areas</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>HSE Training</li>
              <li>NDT Certification</li>
              <li>Crane & Forklift Operation</li>
              <li>Engineering Design (AutoCAD)</li>
              <li>Project Management (Primavera)</li>
              <li>Riggers Training</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/70">
            <p>© 2025 Petro-Base Training School, a Division of Petro-Base Group Limited. All Rights Reserved.</p>
            <div className="flex gap-6">
              <Link to="/privacy" className="hover:text-primary-foreground transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-primary-foreground transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
