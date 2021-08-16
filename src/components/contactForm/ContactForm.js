import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContacts } from "../../redux/contacts/contactSelectors";
import { addContact, fetchContacts } from "../../redux/contacts/contactsOperations";
import { ContactFormStyled } from "./ContactFormStyled";
import AccessibilityNewIcon from "@material-ui/icons/AccessibilityNew";
import { useEffect } from "react";

const initialState = {
  name: "",
  number: "",
};

const ContactForm = () => {
  const [state, setState] = useState(initialState);
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleInputChange = (event) => {
    const { name, value } = event.currentTarget;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();

    // const contact = {
    //   name: this.state.name,
    //   number: this.state.number,
    // };

    const sameContact = contacts.find((contact) => contact.name.toLowerCase() === state.name.toLowerCase());
    if (sameContact) {
      return alert(`${state.name} is already exists in the Phonebook`);
    }

    dispatch(addContact({ ...state }));
    setState({ ...initialState });
  };
  return (
    <ContactFormStyled>
      <form onSubmit={onHandleSubmit}>
        <label className="label">
          <AccessibilityNewIcon style={{ color: "green" }} />
          Name
          <input
            value={state.name}
            onChange={handleInputChange}
            type="text"
            name="name"
            className="inputName"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т.п."
            required
          />
          <input
            type="tel"
            name="number"
            className="inputName"
            value={state.number}
            onChange={handleInputChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять из цифр, может содержать пробелы, тире, круглые скобки и начинаться с +"
            required
          />
        </label>
        <button type="submit" className="btnAdd">
          Add contact
        </button>
      </form>
    </ContactFormStyled>
  );
};

export default ContactForm;

// class ContactForm extends Component {
//   // state = { name: "", number: "" };

//   componentDidMount() {
//     this.props.fetchContacts();
//   }

//   render() {
//     return (

//     );
//   }
// }

// const mapStateToProps = (state) => ({
//   contacts: getContacts(state),
//   // contacts: state.contacts.items,
//   // filter: state.contacts.filter,
// });

// const mapDispatchToProps = (dispatch) => ({
//   onSubmit: (contact) => dispatch(addContact(contact)),
//   fetchContacts: () => dispatch(fetchContacts()),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
