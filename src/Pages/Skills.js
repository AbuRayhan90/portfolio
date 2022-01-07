import React from 'react';
import HeadingDownLine from '../Component/HeadingDownLine';
import Skill from '../Component/Skill';
import AllData from '../ultsData';
import { Zoom } from 'react-reveal';

const Skills = () => {
  return (
    <>
      <div className="bg-skill-area bg-gray-800 bg-blend-overlay md:h-screen h-full pb-20 bg-cover bg-center pt-20">
        <div className="container mx-auto md:text-center">
          <div className="md:mb-14 ">
            <HeadingDownLine text="My Skills" textcolor="text-white" />
          </div>
          <Zoom>
            {AllData.skills.map((item) => (
              <Skill item={item} key={item.id} />
            ))}
          </Zoom>
        </div>
      </div>
    </>
  );
};

export default Skills;
