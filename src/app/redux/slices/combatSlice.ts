import { PayloadAction, createSelector, createSlice } from '@reduxjs/toolkit';

import { RootState } from '@jdh/redux/store';

import { returnSummedStats } from '@jdh/lib/lib';

import { SuperHero } from '@jdh/types/types';

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
      // Find if the hero already exists in the array.
      const heroExists = state.value.find(
        (hero) => hero.id === action.payload.id
      );

      // If so, remove them from the array.
      if (heroExists) {
        state.value = state.value.filter((hero) => hero.id !== heroExists.id);

        return;
      }

      // Checks if there are already two combatants. If so, do nothing.
      if (state.value.length === 2) return;

      // Otherwise, add the hero to the array.
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
