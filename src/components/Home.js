import { useState } from 'react'
import image from '../assets/images/clean-sign.png'

export const Home = () => {

    const [isHover, setHover] = useState(true)

    const onEnter = () => {
        setHover(false)
    }
    const onLeave = () => {
        setHover(true)
    }

    return (

        <main className='w-screen bg-gray-900 pt-32 text-center flex justify-center'>
            <div className=" max-w-2xl mr-80">
                <div className=" text-white text-4xl font-semibold text-left mb-8">
                    <h1 className='mb-2 text-3xl text-slate-400'>👋 Hey, I'm Kris.</h1>
                    <h1>I design software</h1>
                </div>
                <div className="text-slate-200 max-w-lg text-left mb-12">
                    <h3 className="mb-4">Kris is an experienced UX designer based in the US known for creating intuitive and engaging user experiences.</h3>
                    <button onMouseEnter={onEnter} onMouseLeave={onLeave} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex">
                        <span className={`duration-100 ${isHover && '-rotate-45'}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                            </svg>
                        </span>
                        <span className="ml-2">Contact Me</span>
                    </button>
                </div>
                <div className="text-white text-left">
                    <div className="pt-2 border-t border-slate-500 mb-4">
                        <span className=" font-semibold text-sm text-gray-400 ">WHAT'S NEW</span>
                    </div>

                    <div className="bg-slate-800 rounded-lg p-5 flex mb-4">
                        <img className=' w-64 h-auto rounded-md object-cover' src={image} alt="asdasdasd" />
                        <div className='ml-4 flex-col '>
                            <h4 className='text-xl font-semibold mb-2'>CleanSign - UI KIT</h4>
                            <h5 className=' mb-4 text-gray-300 text-m'>
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly
                            </h5>
                            <button  className=" border border-slate-400 hover:bg-slate-700 text-white font-semibold py-2 px-4 rounded flex">
                                <span className="mr-2">View Details →</span>
                            </button>
                        </div>
                    </div>

                    <div className="bg-slate-800 rounded-lg p-5 flex">
                        <img className=' w-64 h-auto rounded-md object-cover' src={image} alt="asdasdasd" />
                        <div className='ml-4 flex-col '>
                            <h4 className='text-xl font-semibold mb-2'>CleanSign - UI KIT</h4>
                            <h5 className=' mb-4 text-gray-300 text-m'>
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly
                            </h5>
                            <button  className=" border border-slate-400 hover:bg-slate-700 text-white font-semibold py-2 px-4 rounded flex">
                                <span className="mr-2">View Details →</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>


        </main>


    )
}