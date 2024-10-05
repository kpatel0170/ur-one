import Layout from '../../components/layout';

const Contact = () => {
  return (
    <Layout>
      <h2 className="text-2xl font-bold">Contact Us</h2>
      <p className="mt-4">
        We would love to hear from you! Please fill out the form below.
      </p>
      <div className="mt-6">
        <iframe
          src="YOUR_GOOGLE_FORM_LINK"
          width="100%"
          height="600"
          className="border rounded-md"
          title="Contact Form"
        >
          Loading…
        </iframe>
      </div>
    </Layout>
  );
};

export default Contact;
