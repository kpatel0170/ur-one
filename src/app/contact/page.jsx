import Layout from '../../components/layout';
import { Button } from '@/components/ui/button';

const Contact = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold text-center text-blue-900">Contact Us</h2>
        <p className="mt-4 text-center text-gray-700">
          We would love to hear from you! Please fill out the form below.
        </p>
        <div className="mt-6">
          <iframe
            src="YOUR_GOOGLE_FORM_LINK"
            width="100%"
            height="600"
            className="border rounded-md shadow-md"
            title="Contact Form"
          >
            Loading…
          </iframe>
        </div>
       
      </div>
    </Layout>
  );
};

export default Contact;
