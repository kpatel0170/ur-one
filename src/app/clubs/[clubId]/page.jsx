"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Layout from '@/components/layout';
import clubsData from '@/data/clubs.json';
import { Button } from '@/components/ui/button';

const ClubDetail = ({ params }) => {
  const { clubId } = params;
  const [logo, setLogo] = useState('');

  const club = clubsData.find(c => c.id === clubId);

  useEffect(() => {
    const loadLogo = async () => {
      if (club && club.logo) {
        try {
          const logoPath = await import(`../../../images/clubs/${club.logo}`);
          setLogo(logoPath.default);
        } catch (error) {
          console.error("Error loading logo:", error);
        }
      }
    };

    loadLogo();
  }, [club]);

  if (!club) {
    return <Layout><p className="text-center text-red-600">Club not found</p></Layout>;
  }

  return (
    <Layout>
      <div className="flex flex-col items-center p-6 bg-white shadow-md rounded-lg">
        {logo && (
          <Image 
            src={logo} 
            alt={`${club.name} logo`} 
            width={128} 
            height={128} 
            className="rounded-full mb-4" 
          />
        )}
        <h2 className="text-4xl font-bold text-gray-900">{club.name}</h2>
        <p className="text-gray-700 text-lg mt-2">{club.description}</p>
        <h3 className="text-xl font-semibold mt-4">Contact Info:</h3>
        <p className="text-gray-600">{club.contact}</p>
      </div>

      <div className="flex justify-center space-x-4 mt-6">
        {club.socialLinks.discord && (
          <Button 
            variant="outline" 
            as="a" 
            href={club.socialLinks.discord} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Discord
          </Button>
        )}
        {club.socialLinks.website && (
          <Button 
            variant="outline" 
            as="a" 
            href={club.socialLinks.website} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Website
          </Button>
        )}
        {club.socialLinks.instagram && (
          <Button 
            variant="outline" 
            as="a" 
            href={club.socialLinks.instagram} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Instagram
          </Button>
        )}
      </div>
    </Layout>
  );
};

export default ClubDetail;
