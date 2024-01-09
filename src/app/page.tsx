'use client';

import Category from '@/components/componentCategory';
import ComponentList from '@/components/componentList';
import TopJumper from '@/components/topJumper';
import Tabs from '@/components/tabs';
import ProfileList from '@/components/profileList';
import Pagination from '@/components/pagination';
import { SessionProvider } from 'next-auth/react';
import LoginModal from '@/components/loginModal';
import ToastContainer from '@/components/basic/toast';
import DetailModal from '@/components/componentModal';
import  Link  from 'next/link';
import { useList } from '@/context/list';
import { tabTitles } from '@/common/config';
import Image from 'next/image';
import classNames from 'classnames';
import { londrinaSh, raleway  } from '@/app/layout';
import styles from './page.module.scss';
//import ImageFallback from "@/helpers/ImageFallback";
//import { getListPage } from "@/lib/contentParser";
import AnimationLogo from "@/components/AnimationLogo";

const Home = () => {
  const { data } = useList();

  return (
    <SessionProvider>
      <main className="">
        <div className="w-full bg-[url('/images/grid.svg')] bg-contain bg-repeat">

<div className="bg-gradient-to-b from-sky-950 via-neutral-800 grid grid-cols-9 grid-rows-13 gap-4">
    <div className="col-span-6 row-span-2">
      <h1 className='{raleway.className} text-left text-4xl leading-8 font-black bg-gradient-to-b from-neutral-500 via-gray- 400 to-neutral-300 inline-block text-transparent bg-clip-text '>Timeless</h1>
    </div>
    <div className="col-span-6 row-span-2 col-start-1 row-start-3">
      <h1 className='{raleway.className} text-left text-6xl leading-12 font-black bg-gradient-to-b from-amber-600 via-orange-600 to-neutral-200 inline-block text-transparent bg-clip-text '>Design</h1>
  
    </div>
    <div className="col-span-3 row-span-4 col-start-7 row-start-1">
    <p className="mb-2 text-right font-black text-slate-100 px-2 leading-4 text-[.57rem] sm:text-2xl md:text-3xl">&laquo;the beauty of a living thing is not the atoms that go into it -but the way those atoms are put together...&raquo;</p>

                 
    </div>
    <div className="col-span-3 row-span-4 col-start-4 row-start-5">
      
    
      <div className="col-span-3 row-span-4 col-start-4 row-start-6">
    <div className="flex flex-col items-center justify-center">
        <div className="w-64 sm:w-72">
          <AnimationLogo/>
          
       {/*<ImageFallback
                  src="/images/LogoEZ.png"
                  className="mx-auto"
                  width="400"
                  height="400"
                  alt="banner image"
                  priority
  />*/}
    </div>
                        
        </div>
        </div>
   
    
    </div>
    <div className="col-start-9 row-start-5">
    <div className="shadow-xl shadow-gray-400/50 flex flex-col items-center justify-center text-xs lg:text-xl text-white leading-3 bg-orange-400 rounded-full w-16  h-16 relative right-5 lg:w-20 lg:h-20 lg:left-56">
                      <p className="text-sm lg:text-xl font-black lg:leading-3">Carl</p>
                      <p className="text-sm lg:text-xl font-black">Sagan</p>
                  </div>
    
    </div>
    <div className="col-span-7 row-span-3 col-start-2 row-start-9">
            <Image src="/images/sideboardobg.png" alt="SideBoard" width="660" height="450"/>

      
    </div>
    <div className="col-span-3 row-span-2 col-start-4 row-start-12">

        <link className="text-center"  href="#" >send email</link>                                                                                                                                                                                                                                                                                        '


    </div>
</div>
    
        <Tabs />
        <div className={classNames(styles.main, styles[data.currentTab])}>
          {data.currentTab === tabTitles.COMPONENTS ? (
            <>
              <Category />
              <ComponentList />
            </>
          ) : (
            <>
              <ProfileList />
              <Pagination />
            </>
          )}
        </div>
        </div>
      </main>
      <TopJumper />
      <LoginModal />
      <ToastContainer />
      <DetailModal />
    </SessionProvider>
  );
};

export default Home;
