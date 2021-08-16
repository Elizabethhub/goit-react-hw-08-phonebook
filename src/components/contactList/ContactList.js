import React from "react";
import PropTypes from "prop-types";
import ContactListItem from "./contactListItem/ContactListItem";
import { useSelector } from "react-redux";
import { getFilter, getFilteredContacts } from "../../redux/contacts/contactSelectors";

const ContactList = () => {
  const contacts = useSelector(getFilteredContacts);
  const filter = useSelector(getFilter);
  // const loading = useSelector(getLoading);

  return (
    <ol>
      {contacts
        .filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()))
        .map((contact) => (
          <ContactListItem key={contact.id} {...contact} />
        ))}
    </ol>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  filter: PropTypes.string,
  onDeleteContact: PropTypes.func.isRequired,
};

// const mapStateToProps = (state) => ({
//   contacts: getFilteredContacts(state),
//   filter: state.contacts.filter,
//   loading: getLoading(state),
// });

// export default connect(mapStateToProps, { onDeleteContact: deleteContact })(ContactList);
export default ContactList;
