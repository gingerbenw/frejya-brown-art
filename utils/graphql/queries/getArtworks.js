import gql from 'graphql-tag';

export default gql`
  {
    artworks {
      id
      Title
      Description
      Categories {
        Title
      }
      Images {
        url
      }
    }
  }
`;
