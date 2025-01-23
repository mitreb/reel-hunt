import { defineStore } from 'pinia';

export const useMessageStore = defineStore('message', () => {
  const message = ref('');
  const showMessage = ref(false);

  return { message, showMessage };
});
