import React from 'react';
import HeadingDownLine from '../Component/HeadingDownLine';
import Skill from '../Component/Skill';
import allData from '../ultsData';

const Skills = () => {
  return (
    <div>
      <div className="bg-skills-area bg-gray-900 bg-blend-overlay md:h-screen h-full pb-20 bg-cover bg-center">
        <div className="container mx-auto md:text-center">
          <div className="md:mb-14 pt-10">
            <HeadingDownLine text="My Skills" textcolor="text-white" />
          </div>
          {allData.skills.map((item) => (
            <Skill item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
