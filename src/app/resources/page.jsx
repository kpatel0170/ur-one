import Layout from '../../components/layout';
import { Button } from '@/components/ui/button'; 
import { Card } from '@/components/ui/card'; 
import resourcesData from '@/data/resources.json';

const Resources = () => {
  return (
    <Layout>
      <section className="text-center mt-8">
        <h2 className="text-5xl font-bold text-blue-900">Resources</h2>
        <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
          Explore a curated list of useful resources available to you. Find what you need to enhance your experience!
        </p>
      </section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {resourcesData.map((resource) => (
          <Card key={resource.id} className="p-6 transition-transform transform hover:scale-105 shadow-lg">
            <h3 className="text-2xl font-semibold text-blue-800">{resource.name}</h3>
            <p className="text-gray-600 mt-2">{resource.description}</p>
            <Button variant="link" href={`/resources/${resource.id}`} className="mt-4 text-blue-600 hover:underline">Learn more</Button>
          </Card>
        ))}
      </div>
      <div className="text-center mt-8">
        <Button variant="outline" href="/contact" className="mt-4 bg-blue-600 text-white hover:bg-blue-700 transition duration-200">Need Assistance? Contact Us</Button>
      </div>
    </Layout>
  );
};

export default Resources;
