import Layout from '../../components/layout';
import { Button } from '@/components/ui/button'; 
import { Card } from '@/components/ui/card'; 
import resourcesData from '@/data/resources.json';

const Resources = () => {
  return (
    <Layout>
      <h2 className="text-4xl font-bold text-center mt-8">Resources</h2>
      <p className="text-center mt-4 text-gray-600">
        Explore useful resources available to you:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {resourcesData.map((resource) => (
          <Card key={resource.id} className="p-6">
            <h3 className="text-xl font-semibold">{resource.name}</h3>
            <p className="text-gray-600 mt-2">{resource.description}</p>
            <Button variant="link" href={`/resources/${resource.id}`} className="mt-4">Learn more</Button>
          </Card>
        ))}
      </div>
      <div className="text-center mt-8">
        <Button variant="outline" href="/contact" className="mt-4">Need Assistance? Contact Us</Button>
      </div>
    </Layout>
  );
};

export default Resources;
