import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import AdminLogin from './AdminLogin';
import AdminDashboard from './AdminDashboard';

const AdminPage = () => {
  const [session, setSession] = useState(null);
  const [checkingSession, setCheckingSession] = useState(true);

  useEffect(() => {
    const loadSession = async () => {
      const { data } = await supabase.auth.getSession();

      setSession(data.session);
      setCheckingSession(false);
    };

    loadSession();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, newSession) => {
      setSession(newSession);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  if (checkingSession) {
    return (
      <main className="admin-loading">
        <p>Duke u ngarkuar...</p>
      </main>
    );
  }

  if (!session) {
    return <AdminLogin onLogin={setSession} />;
  }

  return (
    <AdminDashboard
      session={session}
      onLogout={() => setSession(null)}
    />
  );
};

export default AdminPage;