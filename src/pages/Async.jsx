import { useAtom } from 'jotai'
import React, { useEffect, useState } from 'react'
import { addAtom, dataAtom, getAtom, editAtom, checkedbox } from '../atoms/todos'
import { DeleteFilled, EditOutlined, InfoCircleOutlined } from '@ant-design/icons';
import { deleteAtom } from '../atoms/todos';

import { Button, Checkbox, Input, Modal, Select } from 'antd';
import MenuItem from 'antd/es/menu/MenuItem';
import { Link } from 'react-router-dom';


const Async = () => {

  const [data] = useAtom(dataAtom);
  const [, getUser] = useAtom(getAtom);
  const [, deleteUser] = useAtom(deleteAtom); 
  const [, addUser] = useAtom(addAtom);
  const [, editUser] = useAtom(editAtom);
  const [, checkedes] = useAtom(checkedbox);


  const [openEdit, setOpenEdit] = useState(false);
  const [editId, setEditId] = useState(null);
  const [editName, setEditName] = useState("");
  const [editStatus, setEditStatus] = useState(false);

  const [openAdd, setOpenAdd] = useState(false);
  const [newName, setNewName] = useState("");
  const [newStatus, setNewStatus] = useState(false);

  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState("all");

  const handleAdd = () => {
    addUser({
      id: Date.now(),
      name: newName,
      status: newStatus
    });
    setOpenAdd(false);
    setNewName("");
    setNewStatus(false);
  }

  const handleEdit = () => {
    editUser({
      id: editId,
      name: editName,
      status: editStatus
    });
    setOpenEdit(false);
    setEditId(null);
    setEditName("");
    setEditStatus(false);
  }



  const filteredData = data
  .filter((e) => e.name.toLowerCase().includes(search.toLowerCase()))
  .filter((e) => {
    if(selected === "active") return e.status === true;
    if(selected === "inactive") return e.status === false;
    return true;
  }) 

  useEffect(() => {
    getUser();
  },[]);

  return (
    <>
      <main>
        <div className='flex items-center justify-between gap-[10px] mb-10'>
          <Button onClick={() => setOpenAdd(true)}>Add User</Button>
          <Input placeholder='Search...' value={search} onChange={(e) => setSearch(e.target.value)} />
          <Select style={{width:"200px"}} value={selected} label="Status"  onChange={(value) => setSelected(value)} >
            <MenuItem value="all">All</MenuItem>
            <MenuItem value="active">Active</MenuItem>
            <MenuItem value="inactive">Inactive</MenuItem>
          </Select>
        </div>
        <section className='flex flex-wrap items-center justify-center gap-[20px]'>
          {
            filteredData.map((e) => {
              return(
                <div key={e.id} className='flex flex-col items-center justify-center gap-[10px] border-[5px] border-[white] p-4 w-50 h-50 shadow-2xl rounded-2xl'>
                  <h1>{e.name}</h1>
                  <p className={e.status ? "text-green-600" : "text-red-600"}>{e.status ? "Active" : "Inactive"}</p>
                  <div className='flex items-center gap-[10px]'>
                    <DeleteFilled onClick={() => deleteUser(e.id)} />
                    <EditOutlined onClick={() => {
                      setOpenEdit(true);
                      setEditId(e.id);
                      setEditName(e.name);
                      setEditStatus(e.status);
                    }} />
                    <Link to={`/info/${e.id}`}>
                      <InfoCircleOutlined  />
                    </Link>
                    <Checkbox checked={e.status} onChange={() => checkedes(e.id)} />
                  </div>
                </div>
              )
            })
          }
        </section>
      </main>

      <Modal
        title="Add Modal"
        closable={{ 'aria-label': 'Custom Close Button' }}
        open={openAdd}
        onOk={handleAdd}
        onCancel={() => setOpenAdd(false)}
      >
        <Input placeholder='Name' value={newName} onChange={(e) => setNewName(e.target.value)} />
        <Checkbox checked={newStatus} onChange={(e) => setNewStatus(e.target.checked)} />
      </Modal>

      <Modal
        title="Edit Modal"
        closable={{ 'aria-label': 'Custom Close Button' }}
        open={openEdit}
        onOk={handleEdit}
        onCancel={() => setOpenEdit(false)}
      >
        <Input placeholder='Name' value={editName} onChange={(e) => setEditName(e.target.value)} />
        <Checkbox checked={editStatus} onChange={(e) => setEditStatus(e.target.checked)} />
      </Modal>
    </>
  )
}

export default Async