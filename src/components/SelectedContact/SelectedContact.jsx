import { useEffect, useState } from "react";

export default function SelectedContact({ selectedContactId, setSelectedContactId }) {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    const fetchSingleUser = async (userId) => {
      try {
        const res = await fetch(
          `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${userId}`
        );

        const json = await res.json();
        setContact(json);
      } catch (err) {
        console.error(err);
      }
    };
    fetchSingleUser(selectedContactId);
  }, []);

  return (
    <div>
      <p>Selected Contact: {contact?.name}</p>
      <p>Website: {contact?.website}</p>
      <p>Username: {contact?.username}</p>
      <button onClick={()=>setSelectedContactId(null)}>Return</button>
    </div>
  );
}
