import Container from '@mui/material/Container';

import callAPI from '@/services/api';

import CombatModal from '@/components/CombatModal';
import Header from '@/components/Header';
import { HeroList } from '@/components/HeroList';

import { SuperHero } from '@/types/types';

const Home = async () => {
  const response: SuperHero[] = await callAPI(
    'http://homologacao3.azapfy.com.br/api/ps/metahumans',
    {
      method: 'GET',
    }
  );

  return (
    <main className='relative min-h-screen w-full px-8 py-8 md:py-16'>
      <Container className='shadow-comic relative gap-8 overflow-clip border-2 border-black !p-0'>
        <div className='bg-gradient-yellow absolute inset-0 -z-10' />

        <Header />

        <HeroList heroList={response.slice(0, 25)} />

        <CombatModal />
      </Container>
    </main>
  );
};

export default Home;
