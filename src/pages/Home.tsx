import React from 'react';
import { Link } from 'react-router-dom';
import { Gift, Calendar, Share2, Heart } from 'lucide-react';

function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Créez votre Calendrier de l'Avent Personnalisé
        </h1>
        <p className="text-xl text-gray-600">
          Partagez la magie de Noël avec vos proches en créant un calendrier unique
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="feature-card">
          <Calendar className="h-12 w-12 text-red-600 mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Création Simple</h2>
          <p className="text-gray-600">
            Personnalisez chaque case avec vos propres images, messages et surprises
          </p>
        </div>

        <div className="feature-card">
          <Share2 className="h-12 w-12 text-green-600 mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Partage Facile</h2>
          <p className="text-gray-600">
            Envoyez votre calendrier via email ou réseaux sociaux en un clic
          </p>
        </div>

        <div className="feature-card">
          <Gift className="h-12 w-12 text-blue-600 mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Surprises Quotidiennes</h2>
          <p className="text-gray-600">
            Une nouvelle surprise à découvrir chaque jour jusqu'à Noël
          </p>
        </div>

        <div className="feature-card">
          <Heart className="h-12 w-12 text-purple-600 mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Moments Magiques</h2>
          <p className="text-gray-600">
            Créez des souvenirs uniques avec vos proches pendant la période des fêtes
          </p>
        </div>
      </div>

      <div className="text-center">
        <Link
          to="/register"
          className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
        >
          Commencer à Créer
        </Link>
      </div>
    </div>
  );
}

export default Home;