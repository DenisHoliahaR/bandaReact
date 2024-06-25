import React from 'react'
import { useGetPostsQuery } from '../../store/api/main.api';
import { IPostData } from '../../interfaces/MainInterface';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCurrentPost } from '../../store/slices/main.slice';

const Index = () => {
  const { data } = useGetPostsQuery();
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const cardHandler = (id: number) => {
    dispatch(setCurrentPost(id))
    navigate(`/post/${id}`);
  }
  
  return (
    <div className='flex items-center gap-10 flex-wrap justify-center p-8'>
      {data?.map((elem: IPostData) => (
        <div onClick={() => cardHandler(elem.id)} key={elem.id} className='p-2 bg-slate-300 flex flex-col items-center gap-5 max-w-96 min-h-48 max-h-48 overflow-auto rounded-md transition-shadow shadow-md hover:shadow-lg' style={{scrollbarWidth: 'none'}}>
          <h1 className='text-wrap text-center font-bold text-lg'>{elem.title}</h1>
          <p className='text-wrap text-center'>{elem.body}</p>
        </div>
      ))}
    </div>
  )
}

export default Index