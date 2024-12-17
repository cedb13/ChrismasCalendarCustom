import React from 'react';
import { Users, Calendar, Settings } from 'lucide-react';

function AdminDashboard() {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">
        Tableau de bord administrateur
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="flex items-center space-x-3 mb-4">
            <Users className="h-6 w-6 text-blue-600" />
            <h2 className="text-xl font-semibold">Gestion des utilisateurs</h2>
          </div>
          <p className="text-gray-600 mb-4">
            Gérez les comptes utilisateurs, les permissions et les accès.
          </p>
          <button className="btn-primary w-full">
            Voir les utilisateurs
          </button>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="flex items-center space-x-3 mb-4">
            <Calendar className="h-6 w-6 text-green-600" />
            <h2 className="text-xl font-semibold">Calendriers</h2>
          </div>
          <p className="text-gray-600 mb-4">
            Supervisez tous les calendriers créés sur la plateforme.
          </p>
          <button className="btn-primary w-full">
            Gérer les calendriers
          </button>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="flex items-center space-x-3 mb-4">
            <Settings className="h-6 w-6 text-purple-600" />
            <h2 className="text-xl font-semibold">Configuration</h2>
          </div>
          <p className="text-gray-600 mb-4">
            Paramètres généraux de l'application et maintenance.
          </p>
          <button className="btn-primary w-full">
            Paramètres
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;