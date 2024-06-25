import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store';

import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import PostsPage from './pages/PostsPage';
import PostPage from './pages/PostPage';
import CommentsPage from './pages/CommentsPage';

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
            path: '/posts',
            element: <PostsPage />
        },
        {
            path: '/post/:id',
            element: <PostPage />
        },
        {
            path: '/posts/:id/comments',
            element: <CommentsPage />
        },
      ]
    },
  ]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>
);
