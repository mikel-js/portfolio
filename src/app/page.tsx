'use client';
import React from 'react';
import Hero from './hero/Hero';
import Profile from './profile/Profile';
import Projects from './projects/Projects';
import TechStacks from './techStacks/TechStacks';
import Copyright from './copyright/Copyright';
const page = () => {
  return (
    <div className='wrapper'>
      <Hero />
      <Profile />
      <Projects />
      <TechStacks />
      <Copyright />
    </div>
  );
};

export default page;
