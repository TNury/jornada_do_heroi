'use client';

import { clearCombatants } from '@/redux/slices/combatSlice';
import { useAppDispatch, useAppSelector } from '@/redux/store';

import Modal from '@mui/material/Modal';

import { CombatStats } from '@/components/CombatStats';
import { HeroCard } from '@/components/HeroCard';

// @TODO - Make this mobile friendly

const CombatModal = () => {
  const combatValue = useAppSelector((state) => state.combat.value);

  const dispatch = useAppDispatch();

  if (combatValue.length < 2) return null;

  const handleOnClose = () => {
    dispatch(clearCombatants());
  };

  return (
    <Modal open onClose={handleOnClose}>
      <div className='bg-gradient-blue outline-none absolute left-2/4 top-2/4 flex h-[512px] w-[1024px] -translate-x-2/4 -translate-y-2/4 items-center justify-between gap-4 border-2 border-black p-4'>
        <HeroCard hero={combatValue[0]} className='h-fit w-80' />

        <CombatStats combatants={combatValue} />

        <HeroCard hero={combatValue[1]} className='h-fit w-80' />
      </div>
    </Modal>
  );
};

export default CombatModal;
