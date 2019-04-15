import gql from 'graphql-tag';

export default gql`
  query GetArtwork($id: ID!) {
    caseStudyContent: casestudy(id: $id) {
      ...caseStudyFields
    }
    relatedCaseStudies: casestudies(where: { id_ne: $id }, limit: 10) {
      ...relatedCaseStudyFields
    }
  }

  fragment caseStudyFields on Casestudy {
    Title
    Client
    Location
    Description
    Value
    Content
    Media {
      url
      mime
    }
    Sector {
      Name
    }
  }
`;
