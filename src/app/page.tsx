'use client';
import React from 'react';
import Hero from './hero/Hero';
import Profile from './profile/Profile';
import Projects from './projects/Projects';
import TechStacks from './techStacks/TechStacks';

const page = () => {
  return (
    <div className='wrapper'>
      <Hero />
      <Profile />
      <Projects />
      <TechStacks />
    </div>
  );
};

export default page;
