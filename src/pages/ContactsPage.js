import React from "react";
import ContactForm from "../components/contactForm/ContactForm";
import ContactList from "../components/contactList/ContactList";
import Filter from "../components/filter/Filter";
import Section from "../components/section/Section";

const ContactsPage = () => {
  return (
    <>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Filter />
      <Section title="Contacts">
        <ContactList />
      </Section>
    </>
  );
};

export default ContactsPage;
