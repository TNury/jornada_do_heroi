'use client';

import {
  clearCombatants,
  selectCombatWinner,
  selectCombatants,
} from '@/redux/slices/combatSlice';
import { useAppDispatch, useAppSelector } from '@/redux/store';

import Modal from '@mui/material/Modal';

import { CombatStats } from '@/components/CombatStats';
import { HeroCard } from '@/components/HeroCard';

const CombatModal = () => {
  const combatants = useAppSelector(selectCombatants);
  const combatWinner = useAppSelector(selectCombatWinner);

  const dispatch = useAppDispatch();

  if (combatants.length < 2) return null;

  const handleOnClose = () => {
    dispatch(clearCombatants());
  };

  return (
    <Modal
      open
      onClose={handleOnClose}
      className='flex items-center justify-center !p-4'>
      <div className='bg-gradient-blue shadow-comic flex w-full flex-col overflow-hidden border-2 border-black outline-none md:w-[1024px]'>
        <div className='-ml-2 w-fit -skew-x-6 border-b-2 border-r-2 border-black bg-white p-4 pl-6'>
          <p className='text-center text-2xl text-[#6ecfef] md:text-3xl'>
            And the winner is...{' '}
            <span className='text-shadow text-green-500'>
              {combatWinner?.name}!
            </span>
          </p>
        </div>

        <div className='flex w-full items-center justify-between gap-8 overflow-scroll p-8'>
          <HeroCard hero={combatants[0]} className='h-96 w-64 min-w-[256px]' />

          <CombatStats combatants={combatants} />

          <HeroCard hero={combatants[1]} className='h-96 w-64 min-w-[256px]' />
        </div>
      </div>
    </Modal>
  );
};

export default CombatModal;
