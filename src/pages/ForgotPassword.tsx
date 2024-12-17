import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { KeyRound, Mail } from 'lucide-react';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // TODO: Implement password reset logic
    setTimeout(() => {
      setIsLoading(false);
      setIsSent(true);
    }, 1000);
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="bg-white p-8 rounded-xl shadow-md">
        <div className="flex items-center justify-center mb-8">
          <KeyRound className="h-12 w-12 text-red-600" />
        </div>

        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
          Mot de passe oublié
        </h2>

        {!isSent ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-input pl-10"
                  placeholder="votre@email.com"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="btn-primary w-full flex items-center justify-center"
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
              ) : (
                'Réinitialiser le mot de passe'
              )}
            </button>
          </form>
        ) : (
          <div className="text-center">
            <div className="bg-green-50 text-green-600 p-4 rounded-md mb-6">
              Un email de réinitialisation a été envoyé à {email}
            </div>
            <Link to="/login" className="text-red-600 hover:text-red-700 font-medium">
              Retour à la connexion
            </Link>
          </div>
        )}

        <div className="mt-6 text-center">
          <Link to="/login" className="text-gray-600 hover:text-gray-700">
            Retour à la connexion
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;