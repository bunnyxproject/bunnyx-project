import { forwardRef } from 'react';

const HeroSection = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="h-screen flex flex-col justify-center items-center text-white"
    >
      <h1 className="text-5xl font-bold">
        Bunny <span className="text-[#E12750]">x</span> Project
      </h1>
      <p className="mt-2">Streetwear Drop 1</p>
      <a href="#products" className="mt-6 text-xl">
        ↓ Scroll
      </a>
    </div>
  );
});

export default HeroSection;
