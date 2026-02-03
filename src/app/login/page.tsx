'use client';

import { useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

function LoginForm() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get('redirect') || '/';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const res = await fetch('/api/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      router.push(redirect);
      router.refresh();
    } else {
      setError('Invalid password');
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500"
          autoFocus
        />
      </div>

      {error && (
        <p className="text-red-400 text-sm text-center">{error}</p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full py-3 bg-cyan-500 hover:bg-cyan-400 disabled:bg-cyan-700 text-slate-900 font-semibold rounded-lg transition-all"
      >
        {loading ? 'Checking...' : 'Enter'}
      </button>
    </form>
  );
}

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center px-4">
      <div className="bg-slate-800/80 rounded-xl p-8 border border-slate-700 w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-white mb-2">USDM Western Region</h1>
          <p className="text-slate-400 text-sm">Enter password to access</p>
        </div>

        <Suspense fallback={<div className="text-slate-400 text-center">Loading...</div>}>
          <LoginForm />
        </Suspense>

        <p className="text-slate-500 text-xs text-center mt-6">
          USDM Life Sciences • Confidential
        </p>
      </div>
    </div>
  );
}
