import React from 'react';
import styled from 'styled-components';
import AsyncLoadBackground from 'components/AsyncLoadBackground';

// Images
const headshot = '/static/images/about.jpg';

const About = () => (
  <AboutWrapper src={headshot} id="about">
    <Header>
      <h2>About me</h2>
    </Header>
    <Content>
      <Row>
        <Lead>
          My name is Freya Brown and I am an artist that specialises in the use
          of biro/ballpoint pens to create both hyper-realistic portraits and my
          own creative designs.
        </Lead>
      </Row>
      <Col>
        <Lead>I began art from a very young age...</Lead>
        <P>
          ...and it has been my passion ever since. I have dabbled in a lot of
          mediums during this time, but began working predominantly with biro
          around 4 years ago. I have since completed commissions for various
          clients as well as creating my own worlds and drawings with just the
          use of a Bic ballpoint pen or a combination of ink and digital
          techniques.
        </P>
        <P>Thank you for visiting my page, and I hope you enjoy my work.</P>
      </Col>
    </Content>
  </AboutWrapper>
);

export default About;

const AboutWrapper = styled(AsyncLoadBackground)`
  background-color: rgba(255, 255, 255, 0.25);

  padding: 3rem 15px;
`;

const Header = styled.div`
  text-align: center;
  padding: 15px 1rem;

  color: #fff;
  /* mix-blend-mode: difference; */

  font-size: 1rem;
  letter-spacing: 2rem;
  text-transform: uppercase;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);

  max-width: 900px;
  margin: auto;
  padding: 15px 1rem;
`;

const Row = styled.div`
  grid-column: span 10;
`;

const Col = styled.div`
  grid-column: span 7;
`;

const Lead = styled.p`
  font-size: 1.2rem;
  line-height: 2rem;
  color: #fff;
  letter-spacing: 0.125rem;
`;

const P = styled.p`
  line-height: 1.6rem;
  color: #ddd;
`;
