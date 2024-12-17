import React from 'react';
import { Share2, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

function ShareCalendar() {
  const socialNetworks = [
    { name: 'Email', icon: Mail, color: 'text-gray-600' },
    { name: 'Facebook', icon: Facebook, color: 'text-blue-600' },
    { name: 'Instagram', icon: Instagram, color: 'text-pink-600' },
    { name: 'Twitter', icon: Twitter, color: 'text-blue-400' },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white p-8 rounded-xl shadow-md">
        <div className="flex items-center space-x-4 mb-8">
          <Share2 className="h-8 w-8 text-red-600" />
          <h1 className="text-3xl font-bold text-gray-800">
            Partager votre calendrier
          </h1>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">Lien de partage</h2>
            <div className="flex">
              <input
                type="text"
                value="https://calendrier-avent.app/c/123456"
                readOnly
                className="form-input rounded-r-none flex-1"
              />
              <button className="btn-primary rounded-l-none px-4">
                Copier
              </button>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Réseaux sociaux</h2>
            <div className="grid grid-cols-2 gap-4">
              {socialNetworks.map((network) => (
                <button
                  key={network.name}
                  className="flex items-center justify-center space-x-2 p-3 rounded-md border border-gray-200 hover:bg-gray-50 transition-colors"
                >
                  <network.icon className={`h-5 w-5 ${network.color}`} />
                  <span>{network.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShareCalendar;