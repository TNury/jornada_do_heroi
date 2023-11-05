'use client';

import {
  clearCombatants,
  selectCombatWinner,
  selectCombatants,
} from '@/redux/slices/combatSlice';
import { useAppDispatch, useAppSelector } from '@/redux/store';

import Modal from '@mui/material/Modal';

import { CombatStats } from '@/components/CombatStats';
import { CombatWinnerLabel } from '@/components/CombatWinnerLabel';
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
        <CombatWinnerLabel combatWinner={combatWinner} />

        <div className='flex w-full items-center justify-between gap-8 overflow-scroll p-8'>
          <HeroCard
            data-isLoser={combatants[0].id !== combatWinner.id}
            hero={combatants[0]}
            className='h-96 w-64 min-w-[256px] data-[isLoser="true"]:grayscale'
          />

          <CombatStats combatants={combatants} />

          <HeroCard
            data-isLoser={combatants[1].id !== combatWinner.id}
            hero={combatants[1]}
            className='h-96 w-64 min-w-[256px] data-[isLoser="true"]:grayscale'
          />
        </div>
      </div>
    </Modal>
  );
};

export default CombatModal;
