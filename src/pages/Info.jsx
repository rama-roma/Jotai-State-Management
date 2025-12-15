import { useAtom } from 'jotai';
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router'
import { dataById, getbyId } from '../atoms/todos';

const Info = () => {

  const { id } = useParams();
  const navigate = useNavigate();
  const [data] = useAtom(dataById);
  const [, get] = useAtom(getbyId);

  useEffect(() => {
    get(id);
  }, [id]);

  return (
    <>
      <div>
        <button onClick={() => navigate(-1)}>back</button><br /><br />
        <h1 className='text-[20px]'>{data?.name}</h1>
        <p className={data?.status ? "text-green-600" : "text-red-600"}>{data?.status ? "Active" : "Inactive"}</p>
      </div>
    </>
  )
}

export default Info