export interface Category {
  _id: string;
  title: string;
}

export interface Photo {
  _key: string;
  title?: string;
  description?: string;
  dateTaken?: string;
  asset: {
    _id: string;
    url: string;
    metadata?: {
      dimensions?: {
        width: number;
        height: number;
      };
    };
  };
}

export interface Album {
  _id: string;
  title: string;
  slug: string;
  coverImage: any;
  description?: string;
  date?: string;
  photos: Photo[];
  categories?: Category[];
}
