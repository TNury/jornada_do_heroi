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
        <div className='flex flex-col md:flex-row md:items-end md:justify-between'>
          <h1 className='text-4xl text-orange-400 md:text-6xl'>
            A hero's journey
          </h1>
          <p className='text-xl text-orange-400 md:text-2xl'>
            Made by{' '}
            <a
              href='https://www.linkedin.com/in/yuri-souza-b26bb3180/'
              className='border-b-2 border-orange-400 hover:opacity-50'
              target='_blank'>
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
        </div>
      </div>
    </main>
  );
};

export default Home;
