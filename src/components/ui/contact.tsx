const Contact = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl max-sm:text-2xl font-bold text-center text-gray-800 mb-6">
          Contactez-nous
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Vous avez des questions ou souhaitez en savoir plus ? Envoyez-nous un
          message !
        </p>
        <form className="bg-white p-8 rounded-lg shadow-md">
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Nom complet
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Votre nom complet"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Adresse email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Votre email"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Votre message"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-medium py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300"
          >
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
