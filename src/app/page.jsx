import { Button } from '@/components/ui/button'; 
import { Card } from '@/components/ui/card'; 
import Layout from '@/components/layout';
import clubsData from '@/data/clubs.json'; 
import resourcesData from '@/data/resources.json'; 

const getRandomItems = (array, count) => {
  const shuffled = array.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

const Home = () => {
  const featuredClubs = getRandomItems(clubsData, 3); 
  const featuredResources = getRandomItems(resourcesData, 3); 

  return (
    <Layout>
      <section className="text-center py-16">
        <h1 className="text-5xl font-bold text-blue-900">Welcome to UR ONE!</h1>
        <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
          Everything in your hands at one click. Explore resources, clubs, societies, and more!
        </p>
        <Button className="mt-6 px-8 py-2 text-lg bg-blue-700">Get Started</Button>
      </section>

      <section className="py-16 bg-blue-100 rounded-lg shadow-md">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-semibold">Featured Clubs</h2>
          <p className="mt-2 text-gray-600">Join our vibrant community! Check out these clubs:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {featuredClubs.map((club) => (
              <Card key={club.id} className="transition-transform transform hover:scale-105 p-6">
                <h3 className="text-xl font-semibold mb-2">{club.name}</h3>
                <p className="text-gray-600">{club.description}</p>
                <Button variant="link" href={`/clubs/${club.id}`} className="mt-4">Learn more</Button>
              </Card>
            ))}
          </div>
          <p className="mt-6">
            <Button variant="link" href="/clubs" className="text-blue-600 hover:underline">For more clubs, visit here</Button>
          </p>
        </div>
      </section>

      <section className="py-16 rounded-lg shadow-md">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-semibold">Resources</h2>
          <p className="mt-2 text-gray-600">Explore useful resources available to you:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {featuredResources.map((resource) => (
              <Card key={resource.id} className="transition-transform transform hover:scale-105 p-6">
                <h3 className="text-xl font-semibold mb-2">{resource.name}</h3>
                <p className="text-gray-600">{resource.description}</p>
                <Button variant="link" href={`/resources/${resource.id}`} className="mt-4">Visit</Button>
              </Card>
            ))}
          </div>
          <p className="mt-6">
            <Button variant="link" href="/resources" className="text-blue-600 hover:underline">For more resources, visit here</Button>
          </p>
        </div>
      </section>

      <section className="py-16 bg-blue-100 rounded-lg shadow-md">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-semibold">Get Involved!</h2>
          <p className="mt-2 text-gray-600">Join a club today and become part of a vibrant community!</p>
          <Button className="mt-6 bg-blue-700" href="/clubs">Explore Clubs</Button>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
