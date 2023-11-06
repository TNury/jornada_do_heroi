import { CombatModal } from '@jdh/components/combat/CombatModal';
import { Header } from '@jdh/components/common/Header';
import { HeroList } from '@jdh/components/hero/HeroList';

import { callAPI } from '@jdh/lib/lib';

import { SuperHero } from '@jdh/types/types';

const Home = async () => {
  const response: SuperHero[] = await callAPI(
    'http://homologacao3.azapfy.com.br/api/ps/metahumans',
    {
      method: 'GET',
    }
  );

  return (
    <main className='relative flex min-h-screen w-full justify-center px-8 py-8 md:py-16'>
      <div className='flex w-full max-w-screen-lg flex-col gap-4'>
        <div className='flex items-end justify-between'>
          <h1 className='mr-auto text-4xl text-orange-400 md:text-6xl'>
            A hero's journey
          </h1>
          <p className='text-2xl text-orange-400'>
            Made by{' '}
            <a
              href='https://www.linkedin.com/in/yuri-souza-b26bb3180/'
              className='underline underline-offset-4 hover:opacity-50'>
              Yuri Souza
            </a>
          </p>
        </div>
        <div className='relative flex gap-4'>
          <div className='relative flex w-full flex-col gap-8 overflow-clip border-2 border-black bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-400 !p-0 shadow-comic'>
            <Header />

            <HeroList heroList={response} />

            <CombatModal />
          </div>
          {/* <p className='absolute -right-[8.5rem] top-28 h-fit rotate-90 text-3xl text-orange-400'>
            Made by{' '}
            <span className='underline underline-offset-4'>Yuri Souza</span>
          </p> */}
        </div>
      </div>
    </main>
  );
};

export default Home;
