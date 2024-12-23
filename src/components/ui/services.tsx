export default function Services() {
  const services = [
    {
      icon: "🌿",
      title: "Reforestation",
      description:
        "Participez à nos activités de plantation pour préserver la nature de Niafrang.",
    },
    {
      icon: "🎶",
      title: "Concerts",
      description:
        "Assistez à des performances musicales traditionnelles et modernes.",
    },
    {
      icon: "🛶",
      title: "Excursions en Pirogue",
      description:
        "Explorez les mangroves et découvrez la faune et la flore locales.",
    },
    {
      icon: "🥁",
      title: "Danses",
      description:
        "Vivez des moments de culture avec les danses traditionnelles.",
    },
    {
      icon: "📚",
      title: "Conférences",
      description:
        "Participez à des discussions sur la culture, l’écologie et le développement.",
    },
    {
      icon: "🤼",
      title: "Combat de Lutte",
      description:
        "Admirez les lutteurs locaux dans des compétitions palpitantes.",
    },
  ];
  return (
    <>
      <section className="py-10 bg-green-100">
        <div className="max-sm:p-5 px-14">
          <h2 className="text-4xl max-sm:text-xl font-bold text-center text-gray-800 mb-8">
           Nos services
          </h2>
          <div className="grid gap-5 md:grid-cols-3">
            {services.map((service, index) => (
              <div key={index} className="shadow-md rounded-sm p-4 text-center bg-white">
                <span className="text-4xl text-blue-500 mb-4">
                  {service.icon}
                </span>
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
