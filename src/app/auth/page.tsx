import React from 'react'
import AuthButtons from './AuthButtons'
import Image from 'next/image'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import {redirect} from "next/navigation"
import { Button } from '@/components/ui/button'

const page = async() => {
    const{isAuthenticated}=getKindeServerSession();
    if(await isAuthenticated()) return redirect("/");

    return (
    <div className='flex h-screen w-full'>
        
        <div className='flex-1 flex overflow-hidden dark:bg-[#651c2b55] bg-[#651c2b] relative justify-center items-center'>
            <img src='/redis-logo.svg' alt='Redis Logo'
                className='absolute -left-1/4 opacity-25 bottom-52 lg:scale-125 xl:scale-100 scale-[2]
                pointer-events-none select-none -z-1'
            />
            <div className='flex flex-col gap-2 px-4 xl:ml-40 text-center md:text-start font-semibold'>
                <img 
                    src={"/logo.png"}
                    alt='RediStash Logo'
                    width={763}
                    height={173}
                    className='mt-20 w-[420px] z-0 pointer-events-none select-none'/>

                    <p >
                        The <span className='bg-red-500 px-2 font-bold text-white'>ULTIMATE</span> chat app
                    </p>

                    <AuthButtons />
            </div>
        </div>
        <div className="flex-1 relative overflow-hidden justify-center items-center hidden md:flex  bg-noise">
            <img
            src={"/hero-right.png"}
            alt="Hero Image"
            className='object-cover dark:opacity-60 opacity-90 pointer-events-none select-none h-full'></img>
        </div>

    </div>
  )
}

export default page