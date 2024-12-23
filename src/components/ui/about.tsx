import Image from "next/image";

const About = () => {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Texte à propos */}
        <div>
          <h2 className="text-3xl max-sm:text-xl font-bold text-gray-800 mb-4">
            À propos de Niafrang
          </h2>
          <p className="text-gray-600 max-sm:text-base mb-4">
            Niafrang, situé au cœur de la Casamance, est un trésor naturel et
            culturel. Entre ses forêts luxuriantes, ses rizières verdoyantes, et
            ses mangroves uniques, Niafrang offre une expérience inoubliable
            pour les amoureux de la nature et les passionnés de culture.
          </p>
          <p className="text-gray-600 mb-4">
            Venez explorer nos traditions riches, goûter à la cuisine locale, et
            participer à nos festivals. Niafrang est une destination où
            l'aventure et l'hospitalité se rencontrent pour vous offrir un
            séjour authentique.
          </p>
          <a
            href="/destinations"
            className="inline-block mt-4 bg-blue-600 text-white font-medium py-2 px-4 rounded-lg shadow hover:bg-blue-700 transition duration-300"
          >
            En savoir plus
          </a>
        </div>

        {/* Image illustrative */}
        <div className="flex justify-center">
          <Image
            src="/images/fromager.jpg"
            alt="À propos de Niafrang"
            width={500}
            height={400}
            className="rounded-lg shadow-lg max-w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
