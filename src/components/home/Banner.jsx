import { fontBangla } from '@/app/layout';
import Image from 'next/image';
import React from 'react';

const Banner = () => {
    return (
        <div className='flex justify-between items-center gap-5'>
            
            <div className='flex-1 space-y-5'>
                <h2 className={`${fontBangla.className} text-6xl font-bold`}>আপনার শিশুর জন্য গড়ে তুলুন একটি <span className='text-primary leading-20'>সুন্দর ভবিষ্যৎ</span></h2>
                <p className=''>Buy Every Toy with  up to 15% Discount</p>
                <button className='btn btn-primary btn-outline'>Explore Products</button>
            </div>
            <div className="flex-1">
                <Image width={500} height={400} alt='Buy Every Toy with  up to 15% Discount' src={'/assets/hero.png'}></Image>
            </div>
        </div>
    );
};

export default Banner;