// src/app/clubs/page.tsx
import Layout from '../../components/layout';
import clubsData from '../../data/clubs.json';
import { Card } from "@/components/ui/card";
import Link from "next/link";

const Clubs = () => {
  return (
    <Layout>
      <section className="text-center mt-8 mb-4">
        <h2 className="text-4xl font-bold">University Clubs</h2>
        <p className="text-lg text-gray-700 mb-8">
          Discover our vibrant community of clubs and societies that cater to all interests. Join us and make the most of your university experience!
        </p>
      </section>
      
      <section className="mb-8">
        <h3 className="text-2xl font-semibold text-center mb-4">Featured Clubs</h3>
        <p className="text-center text-gray-600 mb-4">
          Explore some of our most popular clubs that are currently active and welcoming new members.
        </p>
      </section>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {clubsData.map((club, index) => (
          <Card key={index} className="p-4 transition-transform transform hover:scale-105 shadow-lg">
            <h3 className="text-xl font-semibold mb-2">{club.name}</h3>
            <p className="text-gray-600 mb-4">{club.description}</p>
            <Link 
              href={`/clubs/${club.id}`} 
              className="text-blue-600 hover:text-blue-800 transition duration-200">
              Learn More
            </Link>
          </Card>
        ))}
      </div>

      <section className="mt-8 text-center">
        <h3 className="text-2xl font-semibold mb-4">Join a Club Today!</h3>
        <p className="text-gray-600 mb-4">
          Ready to dive in? Click below to see all clubs and find the perfect fit for you!
        </p>
        <Link 
          href="/clubs/all" 
          className="inline-block bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200">
          View All Clubs
        </Link>
      </section>
    </Layout>
  );
};

export default Clubs;
