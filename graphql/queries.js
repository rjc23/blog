import { gql } from '@apollo/client';

const GET_ALL_SLUGS = gql`
  query {
    blogPosts {
      data {
        attributes {
          urlSlug
        }
      }
    }
  }
`;

const GET_INDIVIDUAL_POST = gql`
  query ($slugUrl: String!) {
    blogPosts(filters: { urlSlug: { eq: $slugUrl } }) {
      data {
        attributes {
          heading
          content
          createdAt
          minsToRead
          description
          tags
          socialImage {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;

const GET_LATEST_POSTS = gql`
  query ($type: String!) {
    blogPosts(filters: { type: { eq: $type } }) {
      data {
        attributes {
          heading
          description
          urlSlug
          createdAt
          minsToRead
        }
      }
    }
  }
`;

export { GET_ALL_SLUGS, GET_INDIVIDUAL_POST, GET_LATEST_POSTS };
