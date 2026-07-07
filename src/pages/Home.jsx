import React from 'react';
import Hero from '../components/Hero.jsx';
import About from '../components/About.jsx';
import Packages from '../components/Packages.jsx';
import Gallery from '../components/Gallery.jsx';
import Agents from '../components/Agents.jsx';
import Investors from '../components/Investors.jsx';
import Blog from '../components/Blog.jsx';
import Contact from '../components/Contact.jsx';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Packages />
      <Gallery />
      <Agents />
      <Investors />
      <Blog />
      <Contact />
    </>
  );
}
