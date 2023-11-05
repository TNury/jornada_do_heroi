import { PayloadAction, createSelector, createSlice } from '@reduxjs/toolkit';

import { returnSummedStats } from '@/lib/lib';

import { SuperHero } from '@/types/types';

import { RootState, useAppSelector } from '../store';

type CombatState = {
  value: SuperHero[];
};

const initialState: CombatState = {
  value: [],
};

export const combatSlice = createSlice({
  name: 'combat',
  initialState,
  reducers: {
    addCombatant: (state, action: PayloadAction<SuperHero>) => {
      const heroExists = state.value.find(
        (hero) => hero.id === action.payload.id
      );

      if (heroExists) {
        state.value = state.value.filter((hero) => hero.id !== heroExists.id);

        return;
      }

      if (state.value.length === 2) return;

      state.value.push(action.payload);
    },
    clearCombatants: (state) => {
      state.value = [];
    },
  },
});

export const { addCombatant, clearCombatants } = combatSlice.actions;

export const selectCombatants = (state: RootState) => state.combat.value;

export const selectCombatWinner = createSelector(
  (state: RootState) => state.combat.value,
  (combatants) => {
    if (combatants.length !== 2) return null;

    const combatantOne = returnSummedStats(combatants[0]);
    const combatantTwo = returnSummedStats(combatants[1]);

    if (combatantOne > combatantTwo) {
      return combatants[0];
    } else if (combatantOne < combatantTwo) {
      return combatants[1];
    } else {
      return null;
    }
  }
);

export default combatSlice.reducer;
