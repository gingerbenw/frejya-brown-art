import React from 'react';

// Components
import Hero from '../components/Hero';
import Content from '../components/Content';

// Markdown
import content from '../content/home.md';

const Home = () => {
  const {
    html,
    attributes: { title, featuredImage },
  } = content;
  return (
    <article>
      <Hero title={title} background={featuredImage} />
      <Content src={html} />
      {/* <ul>
        {cats.map((cat, k) => (
          <li key={k}>
            <h2>{cat.name}</h2>
            <p>{cat.description}</p>
          </li>
        ))}
      </ul> */}
    </article>
  );
};

export default Home;
