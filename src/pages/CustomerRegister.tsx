import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Removed useNavigate
import { useTranslation } from 'react-i18next'; // Import useTranslation
import { supabase } from '../lib/supabaseClient';
// We might need findOrCreateCustomer if we want to prevent duplicate customer entries
// even if auth signup fails later, but let's keep it simple for now.
// We'll create the customer record *after* successful auth signup.

const CustomerRegister: React.FC = () => {
  const { t } = useTranslation(); // Initialize translation hook
  // Removed navigate initialization
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null); // For success messages (e.g., check email)

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setMessage(null);

    try {
      // 1. Sign up the user with Supabase Auth
      const { data: authData, error: signUpError } = await supabase.auth.signUp({
        email: email,
        password: password,
        options: {
          // Optional: Add user metadata here if needed immediately
          // data: { full_name: name, phone: phone }
        }
      });

      if (signUpError) {
        throw signUpError;
      }

      // Check if user object exists and has an ID
      if (!authData.user?.id) {
          // Use translation key
          throw new Error(t('auth.register.errorUserIdNotFound'));
      }

      const userId = authData.user.id;

      // 2. Create the corresponding customer record in the public.customers table
      const { error: customerError } = await supabase
        .from('customers')
        .insert({
            auth_user_id: userId, // Link to the auth user
            name: name,
            email: email, // Store email here too for easier access/display
            phone: phone || null,
        });

       if (customerError) {
           // Note: Ideally, we might want to roll back the auth user creation
           // if the customer record fails, but that's more complex (e.g., using edge functions).
           // For now, log the error and inform the user.
           console.error("Error creating customer profile:", customerError);
           // Use translation key with interpolation
           throw new Error(t('auth.register.errorProfileSave', { message: customerError.message }));
       }

      // Registration successful
      // Use translation key
      setMessage(t('auth.register.successMessage'));
      // Don't navigate immediately, user needs to confirm email usually
      // navigate('/login');

    } catch (err: unknown) {
      console.error('Registration error:', err);
      // Type guard for error message
      // Use translation key for default error
      let errorMessage = t('auth.register.errorGeneric');
      if (err instanceof Error) {
        errorMessage = err.message; // Keep specific DB/Auth errors if available
      } else if (typeof err === 'object' && err !== null && 'error_description' in err && typeof err.error_description === 'string') {
        errorMessage = err.error_description; // Supabase specific error field
      } else if (typeof err === 'object' && err !== null && 'message' in err && typeof err.message === 'string') {
        errorMessage = err.message;
      }
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"> {/* Changed background */}
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-lg shadow-md">
        <div>
          {/* Use translation key */}
          <h2 className="mt-6 text-center text-3xl font-serif text-gray-900"> {/* Changed font */}
            {t('auth.register.title')}
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleRegister}>
          {error && <div className="p-3 bg-red-100 text-red-700 rounded">{error}</div>}
          {message && <div className="p-3 bg-green-100 text-green-700 rounded">{message}</div>}

          <div className="rounded-md shadow-sm -space-y-px">
             <div>
              {/* Use translation key */}
              <label htmlFor="name" className="sr-only">{t('auth.register.nameLabel')}</label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-[#D4AF37] focus:border-[#D4AF37] focus:z-10 sm:text-sm"
                // Use translation key
                placeholder={t('auth.register.namePlaceholder')}
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={loading}
              />
            </div>
            <div>
              {/* Use translation key */}
              <label htmlFor="email-address" className="sr-only">{t('auth.register.emailLabel')}</label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#D4AF37] focus:border-[#D4AF37] focus:z-10 sm:text-sm"
                // Use translation key
                placeholder={t('auth.register.emailPlaceholder')}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
              />
            </div>
             <div>
              {/* Use translation key */}
              <label htmlFor="phone" className="sr-only">{t('auth.register.phoneLabel')}</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#D4AF37] focus:border-[#D4AF37] focus:z-10 sm:text-sm"
                // Use translation key
                placeholder={t('auth.register.phonePlaceholder')}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                disabled={loading}
              />
            </div>
            <div>
              {/* Use translation key */}
              <label htmlFor="password" className="sr-only">{t('auth.register.passwordLabel')}</label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-[#D4AF37] focus:border-[#D4AF37] focus:z-10 sm:text-sm"
                // Use translation key
                placeholder={t('auth.register.passwordPlaceholder')}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={loading}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={loading}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#D4AF37] hover:bg-[#B4941F] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#D4AF37] disabled:opacity-50"
            >
              {/* Use translation keys */}
              {loading ? t('auth.register.loadingButton') : t('auth.register.submitButton')}
            </button>
          </div>
        </form>
         <div className="text-sm text-center">
          <p>
            {/* Use translation keys */}
            {t('auth.register.alreadyHaveAccount')}{' '}
            <Link to="/login" className="font-medium text-[#D4AF37] hover:text-[#B4941F]">
              {t('auth.register.signInLink')}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CustomerRegister;
