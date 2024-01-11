import '../global.css';
import Link from "next/link";
import React from "react";
import Particles from "./components/particles";
import Image from 'next/image';

const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Home() {
  return (
    <div id="Body" >
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
    
      <div className="Nav">
        
      <nav className="my-16 animate-fade-in">
      
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      </div>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <div className="Body" >
      <Image
  src="/me.png"
  alt="Your Image Alt Text"
  className="pb-8 justify-center items-center mx-auto"
  width={100} // Specify the actual width of your image
  height={100} // Specify the actual height of your image
  
/>
      <h1 className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
        Harshith
      </h1>
      </div>

<div className="Text" >
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 text-center animate-fade-in">
        <h2 className="text-sm text-zinc-500 ">
         I build products that further human progress, deeply engaged in Web3 with a focus on growth and marketing.
         
      
        </h2>
        <p className="text-sm text-zinc-500 "> Currently exploring the intersection of LLMs and Blockchain to address critical pain points.</p>
    
        <h2 className="text-sm text-zinc-500 "> Additionally, I produce content sharing insights around the impact of these technologies.</h2>

        <a href="https://etherscan.io/address/0x19cF6A65f05e850b85138d3392bce898D5723394" target="_blank" rel="noopener noreferrer">
          <div className="text-sm duration-500 text-zinc-500 pt-10 hover:text-zinc-300">0x19cF6A65f05e850b85138d3392bce898D5723394</div>
        </a>
        
        
      </div>
      
    </div>
    </div>
    </div>
  );

}
