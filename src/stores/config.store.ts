import { defineStore } from 'pinia';
import { Stores } from './stores.ts';

export const useConfigStore = defineStore(Stores.ConfigStore, () => {
  const api = 'https://api.example.com';

  return {
    api
  }
})