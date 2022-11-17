import React from 'react';
import { Title, Subtitle } from './styles';

function Home() {
  return (
    <>
      <Title>Home</Title>
      <Subtitle>Esta es mi casa</Subtitle>
      <a href="/cart">Cart</a>
      <ul>
        <li>List 1</li>
        <li>List 2</li>
      </ul>
    </>
  );
}

export default Home;
