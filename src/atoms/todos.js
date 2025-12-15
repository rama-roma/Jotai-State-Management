import { atom } from "jotai";

export const dataAtom = atom([]);
export const dataById = atom(null);

let url = "http://localhost:3000/data"

export const getAtom = atom(
    null,
    async (get, set) => {
        try {
          const response  = await fetch(url);
          const data = await response.json();
          set(dataAtom, data);    
        } 
        catch (error) {
            console.log(error);
        }
    }
)

export const getbyId = atom(
  null,
  async (get, set, id) => {
    try {
      const response = await fetch(`${url}/${id}`);
      const data = await response.json();
      set(dataById, data);  
    }
    catch (error) {
      console.log(error);
    }
  }
)

export const deleteAtom = atom(
    null,
    async (get, set, id) => {
        try {
          await fetch(`${url}/${id}`, {
            method: "DELETE"
          });
          set(getAtom);
        } 
        catch (error) {
            console.log(error);
        }
    }
)



export const addAtom = atom(
  null,
  async (get, set, newUser) => {
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });

      const data = await res.json();
      const prev = get(dataAtom);
      const updated = [...prev, data];
      set(dataAtom, updated);
    } catch (error) {
      console.log(error);
    }
  }
);


export const editAtom = atom(
  null,
  async (get, set, updateUser) => {
    try {
      const res = await fetch(`${url}/${updateUser.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateUser),
      });

      const data = await res.json();

      const prev = get(dataAtom);
      const updated = prev.map(item =>
        item.id === data.id ? data : item
      );

      set(dataAtom, updated);
    } catch (error) {
      console.log(error);
    }
  }
);


export const checkedbox = atom(
  null,
  async (get, set, id) => {
    const user = get(dataAtom).find(u => u.id === id);
    const status = !user.status;

    await fetch(`${url}/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status })
    });

    set(
      dataAtom,
      get(dataAtom).map(u => (u.id === id ? { ...u, status } : u))
    );
  }
);
