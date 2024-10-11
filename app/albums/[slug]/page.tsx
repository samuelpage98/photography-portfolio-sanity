import { client } from '../../../sanity/lib/client';
import { albumBySlugQuery } from '../../../sanity/lib/queries';
import { Album } from '../../../types/index';
import { notFound } from 'next/navigation';
import LightboxGallery from '../../../components/LightboxGallery';
import Link from 'next/link'; // Import Link

interface Params {
  params: {
    slug: string;
  };
}

export default async function AlbumPage({ params }: Params) {
  const { slug } = params;

  const album: Album = await client.fetch(albumBySlugQuery, { slug });

  if (!album) {
    notFound();
  }

  return (
    <div>
      {/* Back to Home Link */}
      <div className="pt-8 px-4">
        <Link href="/" className="hover:underline font-cinzel">
          &larr; Back to Home
        </Link>
      </div>

      <h1 className="text-6xl text-center pt-8 pb-12 font-bold font-cinzel">{album.title}</h1>
      <p className="text-center mb-12 font-cinzel">{album.description}</p>
      <LightboxGallery photos={album.photos} />
    </div>
  );
}
