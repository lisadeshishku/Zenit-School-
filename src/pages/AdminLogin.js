import React, { useState } from 'react';
import { supabase } from '../lib/supabase';
import '../styles/Admin.css';

const AdminLogin = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (event) => {
    event.preventDefault();

    setLoading(true);
    setErrorMessage('');

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setErrorMessage('Email-i ose fjalëkalimi nuk është i saktë.');
      setLoading(false);
      return;
    }

    onLogin(data.session);
  };

  return (
    <main className="admin-login-page">
      <section className="admin-login-card">
        <img
          src="/zenitschoollogo.jpeg"
          alt="Zenit School"
          className="admin-login-logo"
        />

        <h1>Administrimi i lajmeve</h1>

        <p>Kyçuni për të menaxhuar lajmet dhe njoftimet.</p>

        <form onSubmit={handleLogin}>
          <label htmlFor="admin-email">Email</label>

          <input
            id="admin-email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            autoComplete="email"
            required
          />

          <label htmlFor="admin-password">Fjalëkalimi</label>

          <input
            id="admin-password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            autoComplete="current-password"
            required
          />

          <button type="submit" disabled={loading}>
            {loading ? 'Duke u kyçur...' : 'Kyçu'}
          </button>

          {errorMessage && (
            <p className="admin-login-error">{errorMessage}</p>
          )}
        </form>
      </section>
    </main>
  );
};

export default AdminLogin;