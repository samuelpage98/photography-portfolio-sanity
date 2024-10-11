import { groq } from 'next-sanity';

export const allAlbumsQuery = groq`
  *[_type == "album"] | order(date desc) {
    _id,
    title,
    "slug": slug.current,
    coverImage,
    description,
    date,
    photos[]{
      _key,
      title,
      description,
      dateTaken,
      asset->{
        _id,
        url
      }
    },
    categories[]->{
      _id,
      title
    }
  }
`;

export const albumBySlugQuery = groq`
  *[_type == "album" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    coverImage,
    description,
    date,
    photos[]{
      _key,
      title,
      description,
      dateTaken,
      asset->{
        _id,
        url,
        metadata {
          dimensions {
            width,
            height
          }
        }
      }
    },
    categories[]->{
      _id,
      title
    }
  }
`;


export const allCategoriesQuery = groq`
  *[_type == "category"] | order(title asc) {
    _id,
    title,
    description
  }
`;
