import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ICommentsData, IPostData, IPostsData } from '../../interfaces/MainInterface';

export const mainApi = createApi({
  reducerPath: 'mainApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  endpoints: (builder) => ({
    getPosts: builder.query<IPostsData, void>({
      query: () => `posts`,
    }),
    getPost: builder.query<IPostData, number>({
      query: (id) => `posts/${id}`,
    }),
    getComments: builder.query<ICommentsData, number>({
      query: (id) => `posts/${id}/comments`,
    }),
  }),
})

export const { useGetPostsQuery, useGetCommentsQuery, useGetPostQuery } = mainApi;