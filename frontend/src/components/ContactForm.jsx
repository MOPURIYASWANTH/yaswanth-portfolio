import { useState } from 'react';
import { Send } from 'lucide-react';

const API = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState({ type: 'idle', text: '' });
  const update = (event) => setForm({ ...form, [event.target.name]: event.target.value });

  async function submit(event) {
    event.preventDefault();
    setStatus({ type: 'loading', text: 'Sending your message…' });
    try {
      const response = await fetch(`${API}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.message || 'Unable to send message. Please try again.');
      setForm({ name: '', email: '', subject: '', message: '' });
      setStatus({ type: 'success', text: 'Thanks — your message was sent successfully.' });
    } catch (error) {
      setStatus({ type: 'error', text: `${error.message} You can email me directly instead.` });
    }
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="form-row">
        <label>Name<input name="name" autoComplete="name" minLength="2" maxLength="80" value={form.name} onChange={update} required /></label>
        <label>Email<input name="email" type="email" autoComplete="email" maxLength="150" value={form.email} onChange={update} required /></label>
      </div>
      <label>Subject<input name="subject" maxLength="120" value={form.subject} onChange={update} /></label>
      <label>Message<textarea name="message" rows="5" minLength="10" maxLength="3000" value={form.message} onChange={update} required /></label>
      <button className="button button-primary" type="submit" disabled={status.type === 'loading'}>
        <Send size={16} /> {status.type === 'loading' ? 'Sending…' : 'Send message'}
      </button>
      <p className={`form-status ${status.type}`} role="status" aria-live="polite">{status.text}</p>
    </form>
  );
}
