import React from 'react';
import { useInView } from 'react-intersection-observer';


const Timeline = () => {
  const [ref1, inView1] = useInView({ triggerOnce: true });
  const [ref2, inView2] = useInView({ triggerOnce: true });
  const [ref3, inView3] = useInView({ triggerOnce: true });
  const [ref4, inView4] = useInView({ triggerOnce: true });
  const [ref5, inView5] = useInView({ triggerOnce: true });
  const [ref6, inView6] = useInView({ triggerOnce: true });

  return (
    <div className="flex justify-center items-left min-h-[35rem] text-white pt-10"  id="roadmap">
      <div>
        <ol className="relative border-l border-gray-700">
          <li className={`mb-10 ml-6 ${inView1 ? 'animate-fadeInLeft delay-0' : 'opacity-0'}`} ref={ref1}>
            <span className="absolute flex items-center justify-center w-6 h-6 bg-n-14 rounded-full -left-9 ring-8 ring-black">
              <svg aria-hidden="true" className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-18a10 10 0 110 20A10 10 0 0110 0z" /></svg>
            </span>
            <div className={`${inView1 ? 'animate-textFadeInLeft delay-200' : 'opacity-0'}`}>
              <h3 className="flex items-center mb-1 text-lg font-semibold">Discovery Call</h3>
              <p className="text-base font-normal text-gray-400">Initial consultation to understand client's needs and goals.</p>
            </div>
          </li>
          <li className={`mb-10 ml-6 ${inView2 ? 'animate-fadeInRight delay-400' : 'opacity-0'}`} ref={ref2}>
            <span className="absolute flex items-center justify-center w-6 h-6 bg-n-14 rounded-full -left-9 ring-8 ring-black">
              <svg aria-hidden="true" className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-18a10 10 0 110 20A10 10 0 0110 0z" /></svg>
            </span>
            <div className={`${inView2 ? 'animate-textFadeInRight delay-600' : 'opacity-0'}`}>
              <h3 className="flex items-center mb-1 text-lg font-semibold">Research & Planning</h3>
              <p className="text-base font-normal text-gray-400">Thorough market research and project planning.</p>
            </div>
          </li>
          <li className={`mb-10 ml-6 ${inView3 ? 'animate-fadeInLeft delay-800' : 'opacity-0'}`} ref={ref3}>
            <span className="absolute flex items-center justify-center w-6 h-6 bg-n-14 rounded-full -left-9 ring-8 ring-black">
              <svg aria-hidden="true" className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-18a10 10 0 110 20A10 10 0 0110 0z" /></svg>
            </span>
            <div className={`${inView3 ? 'animate-textFadeInLeft delay-1000' : 'opacity-0'}`}>
              <h3 className="flex items-center mb-1 text-lg font-semibold">Wireframes</h3>
              <p className="text-base font-normal text-gray-400">Creating detailed wireframes for each page of the website.</p>
            </div>
          </li>
          <li className={`mb-10 ml-6 ${inView4 ? 'animate-fadeInRight delay-1200' : 'opacity-0'}`} ref={ref4}>
            <span className="absolute flex items-center justify-center w-6 h-6 bg-n-14 rounded-full -left-9 ring-8 ring-black">
              <svg aria-hidden="true" className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-18a10 10 0 110 20A10 10 0 0110 0z" /></svg>
            </span>
            <div className={`${inView4 ? 'animate-textFadeInRight delay-1400' : 'opacity-0'}`}>
              <h3 className="flex items-center mb-1 text-lg font-semibold">Design</h3>
              <p className="text-base font-normal text-gray-400">Crafting high-fidelity designs and prototypes.</p>
            </div>
          </li>
          <li className={`mb-10 ml-6 ${inView5 ? 'animate-fadeInLeft delay-1600' : 'opacity-0'}`} ref={ref5}>
            <span className="absolute flex items-center justify-center w-6 h-6 bg-n-14 rounded-full -left-9 ring-8 ring-black">
              <svg aria-hidden="true" className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-18a10 10 0 110 20A10 10 0 0110 0z" /></svg>
            </span>
            <div className={`${inView5 ? 'animate-textFadeInLeft delay-1800' : 'opacity-0'}`}>
              <h3 className="flex items-center mb-1 text-lg font-semibold">Development</h3>
              <p className="text-base font-normal text-gray-400">Coding and integrating the design into a functional website.</p>
            </div>
          </li>
          <li className={`mb-10 ml-6 ${inView6 ? 'animate-fadeInRight delay-2000' : 'opacity-0'}`} ref={ref6}>
            <span className="absolute flex items-center justify-center w-6 h-6 bg-n-14 rounded-full -left-9 ring-8 ring-black">
              <svg aria-hidden="true" className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-18a10 10 0 110 20A10 10 0 0110 0z" /></svg>
            </span>
            <div className={`${inView6 ? 'animate-textFadeInRight delay-2200' : 'opacity-0'}`}>
              <h3 className="flex items-center mb-1 text-lg font-semibold">Launch & Support</h3>
              <p className="text-base font-normal text-gray-400">Launching the website and providing ongoing support.</p>
            </div>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Timeline;
