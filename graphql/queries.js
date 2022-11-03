import { gql } from '@apollo/client';

const GET_ALL_SLUGS = gql`
  query(pagination: { limit: 1000 }) {
    blogPosts {
      data {
        attributes {
          urlSlug
        }
      }
    }
  }
`;

const GET_ALL_TAGS = gql`
  query {
    tags(pagination: { limit: 1000 }) {
      data {
        attributes {
          tagName
          image {
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

const GET_POSTS_FROM_TAG = gql`
  query ($tag: String!, pagination: { limit: 100 }) {
    tags(filters: { tagName: { eq: $tag } }) {
      data {
        attributes {
          tagName
          blog_posts {
            data {
              attributes {
                heading
                description
                urlSlug
                createdAt
                content
                tag {
                  data {
                    attributes {
                      tagName
                    }
                  }
                }
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
      }
    }
  }
`;

const GET_INDIVIDUAL_POST = gql`
  query ($slugUrl: String!, pagination: { limit: 100 }) {
    blogPosts(filters: { urlSlug: { eq: $slugUrl } }) {
      data {
        attributes {
          heading
          content
          createdAt
          description
          tags
          tag {
            data {
              attributes {
                tagName
              }
            }
          }
          socialImage {
            data {
              attributes {
                url
                caption
              }
            }
          }
        }
      }
    }
  }
`;

const GET_LATEST_POSTS = gql`
  query ($type: String!, pagination: { limit: 100 }) {
    blogPosts(filters: { type: { eq: $type } }) {
      data {
        attributes {
          heading
          content
          description
          urlSlug
          createdAt
          tag {
            data {
              attributes {
                tagName
              }
            }
          }
          socialImage {
            data {
              attributes {
                url
                caption
              }
            }
          }
        }
      }
    }
  }
`;

export {
  GET_ALL_SLUGS,
  GET_INDIVIDUAL_POST,
  GET_LATEST_POSTS,
  GET_ALL_TAGS,
  GET_POSTS_FROM_TAG
};
