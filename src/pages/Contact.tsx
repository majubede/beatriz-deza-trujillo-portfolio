import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import Layout from '@/components/layout/Layout';
import { toast } from 'sonner';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [searchParams] = useSearchParams();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const subjects = [
    { value: 'press', label: t('contact.subjects.press') },
    { value: 'exhibition', label: t('contact.subjects.exhibition') },
    { value: 'contest', label: t('contact.subjects.contest') },
    { value: 'prints', label: t('contact.subjects.prints') },
    { value: 'licensing', label: t('contact.subjects.licensing') },
    { value: 'collaboration', label: t('contact.subjects.collaboration') },
  ];

  useEffect(() => {
    const subjectParam = searchParams.get('subject');
    if (subjectParam && subjects.some(s => s.value === subjectParam)) {
      setFormData(prev => ({ ...prev, subject: subjectParam }));
    }
  }, [searchParams]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast.success(t('contact.success'));
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <Layout>
      <article className="container mx-auto px-6 py-16 md:py-24">
        <div className="max-w-2xl mx-auto">
          <h1 className="section-title mb-4 fade-in">{t('contact.title')}</h1>
          <p className="body-curatorial mb-10 fade-in">{t('contact.intro')}</p>

          <form onSubmit={handleSubmit} className="space-y-6 fade-in-up">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm tracking-wide mb-2">
                {t('contact.name')}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-transparent border border-border focus:border-foreground outline-none transition-colors duration-300"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm tracking-wide mb-2">
                {t('contact.email')}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-transparent border border-border focus:border-foreground outline-none transition-colors duration-300"
              />
            </div>

            {/* Subject */}
            <div>
              <label htmlFor="subject" className="block text-sm tracking-wide mb-2">
                {t('contact.subject')}
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-transparent border border-border focus:border-foreground outline-none transition-colors duration-300 appearance-none cursor-pointer"
              >
                <option value="">—</option>
                {subjects.map(subject => (
                  <option key={subject.value} value={subject.value}>
                    {subject.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm tracking-wide mb-2">
                {t('contact.message')}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-transparent border border-border focus:border-foreground outline-none transition-colors duration-300 resize-none"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-gallery-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? '...' : t('contact.send')}
            </button>
          </form>

          {/* Email fallback */}
          <p className="mt-8 text-center text-sm text-muted-foreground">
            beatrizdezaphoto@gmail.com
          </p>
        </div>
      </article>
    </Layout>
  );
};

export default Contact;
