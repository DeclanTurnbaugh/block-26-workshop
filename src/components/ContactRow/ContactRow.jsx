export default function ContactRow({ contact, setSelectedContactId }) {
  const { name, email, phone } = contact;
  return (
    <tr onClick={() => setSelectedContactId(contact.id)}>
      <td>{name}</td>
      <td>{email}</td>
      <td>{phone}</td>
    </tr>
  );
}
