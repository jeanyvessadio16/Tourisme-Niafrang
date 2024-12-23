import Image from "next/image";

export default function Destinations() {
  const destinations = [
    {
      title: "Forêt de Niafrang",
      imageUrl: "/images/fromager.jpg",
      description:
        "Explorez la beauté naturelle de la forêt de Niafrang, un lieu riche en biodiversité.",
    },
    {
      title: "Rizières de Niafrang",
      imageUrl: "/images/image2.jpg",
      description:
        "Découvrez les magnifiques rizières qui caractérisent le paysage de Niafrang.",
    },
    {
      title: "Mangroves de Niafrang",
      imageUrl: "/images/image3.jpg",
      description:
        "Naviguez à travers les mangroves et observez une faune exceptionnelle.",
    },
  ];

  return (
    <>
      <section className="py-10">
        <div>
          <div className="px-14 max-sm:p-5">
            <h2 className="text-4xl max-sm:text-xl font-bold text-center text-gray-800 mb-8">
              Découvrez les merveilles de Niafrang
            </h2>
            <div className="w-full grid gap-6 md:grid-cols-3 place-content-center place-items-center">
              {destinations.map((dest, index) => (
                <div key={index} className="shadow-md rounded">
                  <Image src={dest.imageUrl} alt="" width={300} height={200} className="w-full max-h-80 rounded-t-md" />
                  <div className="p-3">
                    <h3 className="text-xl max-sm:text-lg font-semibold">{dest.title}</h3>
                    <p>{dest.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
