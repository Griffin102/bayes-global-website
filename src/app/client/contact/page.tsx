'use client';

import { useState } from 'react';
import zh from '@/data/zh.json';

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');

    const formData = new FormData(e.currentTarget);
    
    // TODO: Replace with actual Formspree endpoint after setup
    const FORMSPREE_URL = 'https://formspree.io/f/myknlrwq';
    
    try {
      const response = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(formData)),
      });

      if (response.ok) {
        setFormStatus('success');
        (e.target as HTMLFormElement).reset();
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      setFormStatus('error');
    }
  };

  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">{zh.contact.title}</h1>
          <p className="text-xl text-blue-100">{zh.contact.subtitle}</p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">联系方式</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <span className="text-2xl mr-4">📧</span>
                  <div>
                    <p className="text-sm text-gray-500">邮箱</p>
                    <a href={`mailto:${zh.contact.email}`} className="text-blue-600 hover:underline">
                      {zh.contact.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-2xl mr-4">📱</span>
                  <div>
                    <p className="text-sm text-gray-500">电话/微信</p>
                    <p className="text-gray-900">{zh.contact.phone}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-2xl mr-4">🌐</span>
                  <div>
                    <p className="text-sm text-gray-500">网站</p>
                    <a href={`https://${zh.contact.website}`} className="text-blue-600 hover:underline">
                      {zh.contact.website}
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-2xl mr-4">💼</span>
                  <div>
                    <p className="text-sm text-gray-500">LinkedIn</p>
                    <a href={`https://${zh.contact.linkedin}`} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                      {zh.contact.linkedin}
                    </a>
                  </div>
                </div>
              </div>

              {/* Founder Card */}
              <div className="mt-8 bg-white rounded-xl p-6 shadow-sm">
                <p className="text-sm text-gray-500 mb-2">创始人</p>
                <p className="text-lg font-semibold text-gray-900">{zh.contact.name}</p>
                <p className="text-gray-600 text-sm mt-1">
                  18 年市场调研行业经验，曾任职于百度、TNS、零点等知名机构
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">发送咨询</h2>
              
              {formStatus === 'success' ? (
                <div className="text-center py-8">
                  <div className="text-5xl mb-4">✅</div>
                  <p className="text-green-600 font-semibold">{zh.contact.formSuccess}</p>
                  <button
                    onClick={() => setFormStatus('idle')}
                    className="mt-4 text-blue-600 hover:underline"
                  >
                    发送新消息
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      {zh.contact.formName} *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                      {zh.contact.formCompany}
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      {zh.contact.formEmail} *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      {zh.contact.formPhone}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      {zh.contact.formMessage} *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:bg-gray-400"
                  >
                    {formStatus === 'submitting' ? '发送中...' : zh.contact.formSubmit}
                  </button>
                  {formStatus === 'error' && (
                    <p className="text-red-600 text-sm text-center">{zh.contact.formError}</p>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
