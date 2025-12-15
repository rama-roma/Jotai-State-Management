import { useAtom } from 'jotai';
import { useParams, useNavigate } from 'react-router-dom';
import { dataAtom } from '../atoms/todo'; 

const InfoSync = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data] = useAtom(dataAtom);

  const user = data.find(u => u.id === Number(id));

  return (
    <div className="p-6">
      <button onClick={() => navigate(-1)} className="mb-4">Back</button>
      <h1 className="text-2xl font-bold">{user.name}</h1>
      <p className={user.status ? "text-green-600" : "text-red-600"}>
        {user.status ? "Active" : "Inactive"}
      </p>
    </div>
  );
};

export default InfoSync;
