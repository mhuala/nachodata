"use client"
import Link from 'next/link'
import TypingAnimator from 'react-typing-animator';

const Info = () => {
  const textArray = ["Nacho Huala",'Data Analyst',"Freelancer","Programador"];
    return (
          <div className='flex flex-col gap-12 h-full mx-auto items-center justify-center'>
            <div className=' text-white font-bebas font-bold rounded-2xl text-start'> 
              <div className="w-[600px] md:w-[900px] flex flex-row mx-auto items-center justify-center lg:justify-start  gap-8">
                <h2 className='text-start text-5xl md:ml-8 xl:ml-12 2xl:ml-16 md:text-6xl 2xl:text-8xl'>Soy</h2>
                <div className="flex md:hidden font-gothic h-[66px]">
                <TypingAnimator
                  textArray={textArray}
                  cursorColor="#333"
                  textColor="#CE3F73"
                  fontSize="48px"
                  typingSpeed={60}
                  delaySpeed={1000}
                  backspace
                />
                </div>
                <div className="hidden font-gothic md:flex 2xl:hidden h-[86px]">
                <TypingAnimator
                  textArray={textArray}
                  cursorColor="#333"
                  textColor="#CE3F73"
                  fontSize="60px"
                  typingSpeed={60}
                  delaySpeed={1000}
                  backspace
                />
               </div>
                <div className="hidden font-gothic 2xl:flex h-[135px]">
                <TypingAnimator
                  textArray={textArray}
                  cursorColor="#333"
                  textColor="#CE3F73"
                  fontSize="96px"
                  typingSpeed={60}
                  delaySpeed={1000}
                  backspace
                />
                </div>
              </div>
            </div>
  <p className="w-5/6 text-center lg:w-full text-white  md:text-base xl:text-xl 2xl:text-2xl"> Quiero ayudarte a tomar decisiones <b><u>impulsadas por datos</u></b>. Chile📍</p>
  {/* GLOWING BUTTON*/}
  <div className="flex flex-col mt-12 mb-12 lg:mt-32 items-center  w-full ">  
  <div className="max-w-7xl h-16 ">
    <div className="relative group">
      <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
      <div className="relative px-7 py-6 bg-gray-300 ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
        <div className="flex items-center justify-center ">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6  text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
          <Link href="/search" className="text-lg text-slate-800 transition duration-200 pl-4" target="_blank">Read Article →</Link>
        </div>
      </div>
    </div>
  </div>
            </div>

          </div>
    );
}

export default Info;