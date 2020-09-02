import { configureStore } from '@reduxjs/toolkit';

import reducer from './items';

export default function configureAppStore() {
  return configureStore({ reducer });
}
