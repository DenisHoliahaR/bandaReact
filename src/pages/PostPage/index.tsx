import React from 'react'
// import { useDispatch } from 'react-redux';
import { useGetPostQuery } from '../../store/api/main.api';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const id = useSelector((root: RootState) => root.main.currentPost);
  const { data } = useGetPostQuery(id!);
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  
  return (
    <div className='flex flex-col gap-6 p-4 items-center justify-start'>
      <h1 className='text-wrap text-center font-bold text-2xl'>{data?.title}</h1>
      <p className='text-wrap text-center'>{data?.body}</p>
      <div className='flex flex-row gap-10 p-2 items-center justify-between'>
        <p className='text-wrap text-center'>{data?.id}</p>
        <p className='text-wrap text-center'>{data?.userId}</p>
      </div>

      <button onClick={() => navigate(`/posts/${id}/comments`)}>Go to comments</button>
    </div>
  )
}

export default Index