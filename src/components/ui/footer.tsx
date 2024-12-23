import { Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Section 1 : À propos */}
        <div>
          <h3 className="text-xl font-bold mb-4">À propos de Niafrang</h3>
          <p className="text-gray-400 text-sm">
            Niafrang est une destination unique en Casamance, riche en biodiversité, culture et traditions. Découvrez les merveilles naturelles et participez à nos événements culturels.
          </p>
        </div>

        {/* Section 2 : Liens utiles */}
        <div>
          <h3 className="text-xl font-bold mb-4">Liens utiles</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="text-gray-400 hover:text-white">
                Accueil
              </a>
            </li>
            <li>
              <a href="/destinations" className="text-gray-400 hover:text-white">
                Destinations
              </a>
            </li>
            <li>
              <a href="/services" className="text-gray-400 hover:text-white">
                Services
              </a>
            </li>
            <li>
              <a href="/contact" className="text-gray-400 hover:text-white">
                Contactez-nous
              </a>
            </li>
          </ul>
        </div>

        {/* Section 3 : Contact */}
        <div>
          <h3 className="text-xl font-bold mb-4">Nous contacter</h3>
          <ul className="text-sm text-gray-400 space-y-2">
            <li>
              <span>📍 Niafrang, Casamance, Sénégal</span>
            </li>
            <li>
              <span>📧 Email : <a href="mailto:contact@niafrang.com" className="hover:text-white">contact@niafrang.com</a></span>
            </li>
            <li>
              <span>📞 Téléphone : <a href="tel:+221771234567" className="hover:text-white">+221 77 123 45 67</a></span>
            </li>
          </ul>
        </div>
      </div>

      {/* Section : Réseaux sociaux */}
      <div className="mt-10 text-center border-t border-gray-700 pt-6">
        <h3 className="text-lg font-bold mb-4">Suivez-nous</h3>
        <div className="flex justify-center space-x-6 text-2xl text-gray-400">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <Facebook />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <Twitter />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <Instagram />
          </a>
        </div>
        <p className="text-gray-500 text-sm mt-4">
          © {new Date().getFullYear()} Niafrang. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
