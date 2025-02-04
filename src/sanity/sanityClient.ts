import { createClient } from '@sanity/client';


const client = createClient({
  projectId: 't6iwv7qh', // Replace with your Sanity project ID
  dataset: 'production', // Replace with your dataset name
  apiVersion: '2025-01-25',
  useCdn: true,
  token: 'skwAnEHzCIfqJgtbkrVhiiIvS2uidPoHbuXHPfWn1Uq2g3u6VecKna6ccRbOCuOgAPELWn28aGpzyJI5c7Ap1n0qYqZs5gKaVzzDKg1EOZjKy9A63MZSV00uUK5JU68B8HGnP8OlSFMLXzVx7Ny9E7mfCsGBN6bd4F923a58G6TO2oqvdN3d', // Replace with your Sanity API token
});


export default client;
