import callAPI from '@/services/api';

import { SuperHero } from 'src/app/types/types';

import { MainScreen } from './components/MainScreen';

const Home = async () => {
  const response: SuperHero[] = await callAPI(
    'http://homologacao3.azapfy.com.br/api/ps/metahumans',
    {
      method: 'GET',
    }
  );

  return (
    <main className='min-h-screen w-full bg-slate-900 py-16'>
      <MainScreen heroList={response} />
    </main>
  );
};

export default Home;
