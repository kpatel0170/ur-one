// src/app/clubs/page.tsx
import Layout from '../../components/layout';
import clubsData from '../../data/clubs.json';
import { Card } from "@/components/ui/card";
import Link from "next/link";

const Clubs = () => {
  return (
    <Layout>
      <h2 className="text-3xl font-bold text-center mt-8 mb-4">University Clubs</h2>
      <p className="text-center text-gray-700 mb-8">
        Discover our vibrant community of clubs and societies that cater to all interests. Join us and make the most of your university experience!
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {clubsData.map((club, index) => (
          <Card key={index} className="p-4 transition-transform transform hover:scale-105">
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
    </Layout>
  );
};

export default Clubs;
