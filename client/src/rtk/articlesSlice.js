import { createSlice } from "@reduxjs/toolkit";

const articleSlice = createSlice({
  name: "article",
  initialState: {
    articles: []
  },
  reducers:{
    getArticles(state,action){

      return {...state, articles: action.payload}
    },
    getSearchArticles(state, action) {
      return { ...state, articles: [...action.payload] };
    },
    clearArticles(state, action) {
      return { ...state, articles: [] };
    }
  }
});

export { articleSlice };
export const { getArticles, getSearchArticles, clearArticles } =
  articleSlice.actions;
