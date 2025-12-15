import { atom } from "jotai";

export const dataAtom = atom([
    {
        id: 1,
        name: "Ramziya",
        status: false
    },
    {
        id: 2,
        name: "Rohila",
        status: true
    },
    {
        id: 3,
        name: "Mijgona",
        status: false
    },
    {
        id: 4,
        name: "Sabrina",
        status: true
    }
])

export const deleteAtom = atom(
    null,
    (get, set, id) => {
        const prev = get(dataAtom);
        const update = prev.filter(item => item.id !== id);
        set(dataAtom, update);
    }
)

export const editAtom = atom(
    null,
    (get, set, updated) => {
        const prev = get(dataAtom);
        const update = prev.map(item => item.id === updated.id ? { ...item, ...updated } : item);
        set(dataAtom, update);
    }
)

export const addAtom = atom(
    null,
    (get, set, newUser) => {
        const prev = get(dataAtom);
        const update = [...prev, newUser];
        set(dataAtom, update);
    }
)


export const checkedbox = atom(
    null,
    (get, set, id) => {
        const prev = get(dataAtom);
        const update = prev.map(item =>
            item.id === id ? { ...item, status: !item.status } : item
        );
        set(dataAtom, update);
    }
);