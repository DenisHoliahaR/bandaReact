import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { useGetCommentsQuery } from '../../store/api/main.api';
import { useNavigate } from 'react-router-dom';

const Index = () => {
    const id = useSelector((root: RootState) => root.main.currentPost);
    const { data } = useGetCommentsQuery(id!);
    const navigate = useNavigate();

    return (
        <div className="flex flex-col gap-6 p-4 items-center justify-start">
            <button onClick={() => navigate(-1)}>Go Back</button>
            <div className="flex flex-col gap-6 p-4 items-center justify-start">
                {data?.map((elem) => (
                    <div key={elem.id}>
                        <div className='flex-row'>
                            <h3>{elem.name}</h3>
                            <p>{elem.email}</p>
                        </div>
                        <p>{elem.body}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Index;
