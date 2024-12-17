import React from 'react';
import { Link } from 'react-router-dom';
import { Gift, LogIn, UserPlus, Calendar, Share2, Settings } from 'lucide-react';
import { useAuthStore } from '../stores/authStore';

function Navbar() {
  const { isAuthenticated, user, logout } = useAuthStore();

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Gift className="h-8 w-8 text-red-600" />
            <span className="text-xl font-bold text-gray-800">Calendrier de l'Avent Custom</span>
          </Link>

          <div className="flex items-center space-x-4">
            <Link to="/" className="nav-link">
              Accueil
            </Link>

            {!isAuthenticated ? (
              <>
                <Link to="/login" className="nav-link flex items-center">
                  <LogIn className="h-4 w-4 mr-1" />
                  Connexion
                </Link>
                <Link to="/register" className="nav-link flex items-center">
                  <UserPlus className="h-4 w-4 mr-1" />
                  Inscription
                </Link>
              </>
            ) : (
              <>
                <Link to="/create" className="nav-link flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  Créer
                </Link>
                <Link to="/modify" className="nav-link flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  Modifier
                </Link>
                <Link to="/calendars" className="nav-link flex items-center">
                  <Share2 className="h-4 w-4 mr-1" />
                  Partager
                </Link>
                {user?.isAdmin && (
                  <Link to="/admin" className="nav-link flex items-center">
                    <Settings className="h-4 w-4 mr-1" />
                    Admin
                  </Link>
                )}
                <button
                  onClick={logout}
                  className="nav-link flex items-center text-red-600"
                >
                  Déconnexion
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;