import PropTypes from "prop-types";
import { ItemContact, BtnDelete } from "./ContactsList.styles";
import { MdDelete } from "react-icons/md";
import { RiUser3Line } from "react-icons/ri";

const ContactsList = ({ contactList, onDelete }) => {
  return (
    <ul>
      {contactList.map(contact => (
        <ItemContact key={contact.id}>
          <div>
            <RiUser3Line size={14} style={{ marginRight: 10 }} />
            {contact.name}: {contact.number}
          </div>
          <BtnDelete type="submit" onClick={() => onDelete(contact.id)}>
            delete
            <MdDelete size={16} color="#8919FA" style={{ marginLeft: 10 }} />
          </BtnDelete>
        </ItemContact>
      ))}
    </ul>
  );
};

ContactsList.propTypes = {
  contactList: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactsList;
