import { client } from '../sanity/lib/client';
import { allAlbumsQuery } from '../sanity/lib/queries';
import { Album } from '../types';
import Polaroid from '../components/Polaroid';

export default async function Home() {
  const albums: Album[] = await client.fetch(allAlbumsQuery);

  return (
    <div>
      <h1 className="text-6xl font-bold text-center pt-20 pb-24 font-cinzel">Sam's Travels</h1>
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="grid gap-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {albums.map((album) => (
            <Polaroid key={album._id} album={album} />
          ))}
        </div>
      </div>
    </div>
  );
}
