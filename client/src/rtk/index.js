import {configureStore} from '@reduxjs/toolkit';
import { articleSlice } from './articlesSlice';

const store = configureStore({
  reducer:{
    articles:articleSlice.reducer
  }
})

export default store;