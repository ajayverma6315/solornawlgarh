import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PrivacyPolicy() {
  return (
    <div className="pt-24 pb-16 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/" className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
        
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Privacy Policy</h1>
        
        <div className="prose prose-slate max-w-none space-y-6 text-slate-600">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900">1. Information We Collect</h2>
            <p>At Solar Nawalgarh, we collect information that you provide directly to us when you fill out our contact form, request a quote, or communicate with us. This may include:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Name and contact information (email address, phone number)</li>
              <li>Property address and location details</li>
              <li>Energy consumption details and requirements</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900">2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Provide, maintain, and improve our services</li>
              <li>Process your solar installation requests and provide accurate quotes</li>
              <li>Communicate with you about products, services, offers, and promotions</li>
              <li>Send you technical notices, updates, and support messages</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900">3. Information Sharing</h2>
            <p>We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900">4. Data Security</h2>
            <p>We implement a variety of security measures to maintain the safety of your personal information when you enter, submit, or access your personal information.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900">5. Contact Us</h2>
            <p>If there are any questions regarding this privacy policy, you may contact us using the information below:</p>
            <p className="font-medium text-slate-900">
              Solar Nawalgarh<br />
              Main Market, near Bus Stand<br />
              Nawalgarh, Rajasthan 333042<br />
              Email: info@solarnawalgarh.com<br />
              Phone: +91 98765 43210
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
