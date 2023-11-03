'use client';

import { clearCombatants } from '@/redux/slices/combatSlice';
import { useAppDispatch, useAppSelector } from '@/redux/store';

import Modal from '@mui/material/Modal';

import { CombatCard } from '@/components/CombatCard';
import { CombatStats } from '@/components/CombatStats';

const CombatModal = () => {
  const combatValue = useAppSelector((state) => state.combat.value);

  const dispatch = useAppDispatch();

  if (combatValue.length < 2) return null;

  const handleOnClose = () => {
    dispatch(clearCombatants());
  };

  return (
    <Modal open onClose={handleOnClose}>
      <div className='absolute left-2/4 top-2/4 flex h-[512px] w-[1024px] -translate-x-2/4 -translate-y-2/4 items-center justify-between bg-slate-900 p-4 shadow-md'>
        <CombatCard hero={combatValue[0]} />
        <CombatStats combatants={combatValue} />
        <CombatCard hero={combatValue[1]} />
      </div>
    </Modal>
  );
};

export default CombatModal;
