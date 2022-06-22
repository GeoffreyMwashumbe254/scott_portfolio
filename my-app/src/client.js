import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';


export const client = sanityClient({
    projectId: 'hg5p9ap2',
    dataset: 'production',
    apiVersion: '2022-06-01',
    useCdn: true,
    token: 'sk6jhHdmfZuzlnIXhegnzAXtpcu41CaaSgPlsX5Sba6l9iES3O5GoAobYIcSn9RJUOViZx9pB65S5GWK3VgGvYyPLBSuKRc7bidHwtP8FV1zYMYOVzaC5fdypyfk9dG8jCONfqudr3UNGCyEE3ySRYBQYDGMmPYDBTqePsITmXehWqjhc1d6',
});

const builder = imageUrlBuilder( client );  

export const urlFor = (source) => builder.image(source);    