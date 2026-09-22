'use client';

import { useId, useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { subscribeToNewsletter } from '@/lib/newsletter';
import styles from './SubscribeForm.module.css';

type Status = { kind: 'idle' } | { kind: 'pending' } | { kind: 'done'; ok: boolean; message: string };

export default function SubscribeForm() {
  const inputId = useId();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<Status>({ kind: 'idle' });

  const onChange = (event: ChangeEvent<HTMLInputElement>) => setEmail(event.target.value);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status.kind === 'pending') return;
    setStatus({ kind: 'pending' });
    try {
      const result = await subscribeToNewsletter(email.trim());
      setStatus({ kind: 'done', ok: result.ok, message: result.message });
      if (result.ok) setEmail('');
    } catch {
      setStatus({ kind: 'done', ok: false, message: 'Something went wrong. Please try again.' });
    }
  };

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <label htmlFor={inputId} className="visually-hidden">
        Email address
      </label>
      <input
        id={inputId}
        className={styles.input}
        type="email"
        name="email"
        placeholder="Enter your mail"
        autoComplete="email"
        required
        value={email}
        onChange={onChange}
      />
      <button type="submit" className={styles.submit} disabled={status.kind === 'pending'}>
        Suscribe
      </button>
      {/* Absolutely positioned so the message never changes the section height. */}
      <p className={styles.status} role="status" data-ok={status.kind === 'done' ? status.ok : undefined}>
        {status.kind === 'done' ? status.message : ''}
      </p>
    </form>
  );
}
