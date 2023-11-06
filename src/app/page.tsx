import { CombatModal } from '@jdh/components/CombatModal';
import Header from '@jdh/components/Header';
import { HeroList } from '@jdh/components/HeroList';

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
        <h1 className='mr-auto text-4xl text-orange-400 md:text-6xl'>
          A Jornada do Herói
        </h1>
        <div className='relative flex w-full flex-col gap-8 overflow-clip border-2 border-black bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-400 !p-0 shadow-comic'>
          <Header />

          <HeroList heroList={response} />

          <CombatModal />
        </div>
      </div>
    </main>
  );
};

export default Home;
