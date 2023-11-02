import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { SuperHero } from '@/types/types';

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
  },
});

export const { addCombatant } = combatSlice.actions;

export default combatSlice.reducer;
