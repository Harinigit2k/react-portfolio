import React from 'react';
import './ResumeStyle.css';

function Hero() {
    const config = {
        link: 'https://drive.google.com/file/d/1Q_dGJcwMMmyn0qK_9a8cSs-B91FTnD24/view?usp=drivesdk'
    }
 return (
   <div id="hero" className="w-screen h-screen text-white" style={{
     background: "linear-gradient(90deg, rgba(131, 126, 226, 1) 24%, rgba(114, 114, 226, 1) 58%, rgba(0, 212, 255, 1) 100%)"
   }}>
     <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
       
       <div class="text-center lg:w-5/12 w-full">
         <h1 className="my-40 text-5xl font-bold leading-tight">
           Harini Rajendran
           <p className=" my-4 text-2xl mb-1">
           web Developer

           <p className="">
      I create dynamic, responsive web applications that bring ideas to life. Let's build something great together.
            </p>
           </p>
          
           <h1 className='res-h1'>Resume</h1>
           < button className='pb-5'>You can view my resume <a className='btn' href={config.link} download> Download</a></button>
           
         
         </h1>
         
             
         
         

         
       </div>
     </div>
   </div >
 );
}

export default Hero;
