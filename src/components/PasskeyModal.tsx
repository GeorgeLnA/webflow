import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, Eye, EyeOff, X } from 'lucide-react';

interface PasskeyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PasskeyModal: React.FC<PasskeyModalProps> = ({ isOpen, onClose }) => {
  const [passkey, setPasskey] = useState('');
  const [showPasskey, setShowPasskey] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const correctPasskey = 'IslandPalm2025';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Simulate a brief loading delay for better UX
    await new Promise(resolve => setTimeout(resolve, 500));

    if (passkey === correctPasskey) {
      // Store authentication in sessionStorage
      sessionStorage.setItem('admin_authenticated', 'true');
      onClose();
      navigate('/admin');
    } else {
      setError('Invalid passkey. Please try again.');
    }

    setIsLoading(false);
  };

  const handleClose = () => {
    setPasskey('');
    setError('');
    setShowPasskey(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
      <div className="bg-white shadow-2xl max-w-md w-full border border-gray-100">
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-6 border-b border-gray-200" style={{ backgroundColor: '#0b1c26' }}>
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-white bg-opacity-20 rounded-lg">
              <Lock className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-xl font-medium text-white" style={{ fontFamily: 'Inter, sans-serif' }}>Admin Access</h2>
          </div>
          <button
            onClick={handleClose}
            className="p-2 hover:bg-white hover:bg-opacity-20 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Content */}
        <form onSubmit={handleSubmit} className="px-8 py-6">
          <div className="space-y-6">
            <div>
              <label htmlFor="passkey" className="block text-sm font-medium text-[#0d0c09] mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>
                Enter Admin Passkey
              </label>
              <div className="relative">
                <input
                  id="passkey"
                  type={showPasskey ? 'text' : 'password'}
                  value={passkey}
                  onChange={(e) => setPasskey(e.target.value)}
                  placeholder="Enter passkey..."
                  className="w-full px-4 py-3 pr-12 border border-gray-300 focus:ring-2 focus:ring-[#0b1c26] focus:border-transparent text-lg tracking-wider"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                  autoComplete="off"
                  autoFocus
                />
                <button
                  type="button"
                  onClick={() => setShowPasskey(!showPasskey)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 hover:bg-gray-100 rounded transition-colors"
                >
                  {showPasskey ? (
                    <EyeOff className="w-5 h-5 text-gray-400" />
                  ) : (
                    <Eye className="w-5 h-5 text-gray-400" />
                  )}
                </button>
              </div>
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 p-4">
                <p className="text-red-700 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>{error}</p>
              </div>
            )}

            <div className="flex space-x-4 pt-4">
              <button
                type="submit"
                disabled={isLoading || !passkey.trim()}
                className="flex-1 bg-[#0b1c26] text-white py-3 px-6 hover:bg-[#0b1c26]/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    <span>Verifying...</span>
                  </>
                ) : (
                  <>
                    <Lock className="w-4 h-4" />
                    <span>Access Admin Panel</span>
                  </>
                )}
              </button>
              <button
                type="button"
                onClick={handleClose}
                className="px-6 py-3 border border-gray-300 text-[#0d0c09] hover:bg-gray-50 transition-colors"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Cancel
              </button>
            </div>
          </div>
        </form>

        {/* Footer */}
        <div className="px-8 pb-6">
          <p className="text-xs text-gray-500 text-center" style={{ fontFamily: 'Inter, sans-serif' }}>
            Secure access required for administrative functions
          </p>
        </div>
      </div>
    </div>
  );
};

export default PasskeyModal;
