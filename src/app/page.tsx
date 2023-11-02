import Container from '@mui/material/Container';

import callAPI from '@/services/api';

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
    <main className='min-h-screen w-full bg-slate-900 py-16'>
      <Container>
        <Header />

        <HeroList heroList={response} />
      </Container>
    </main>
  );
};

export default Home;
