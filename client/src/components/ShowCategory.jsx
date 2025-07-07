import React from 'react'
import SlideOne from './SlideOne'
import SlideTwo from './SlideTwo';
import SlideThree from './SlideThree';

export default function ShowCategory() {
  return (
    <div className='w-full h-auto'>
      <SlideOne />
      <SlideTwo />
      <SlideThree />
    </div>
  );
}
