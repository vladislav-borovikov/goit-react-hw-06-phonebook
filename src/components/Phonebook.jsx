import Form from "./Form/Form";
import Filter from "./Filter";
import { useDispatch, useSelector } from "react-redux";
import {addItems, deleteItems, addFilter} from '../Redax/redusers'


import RenderContacts from "./RenderContact";



const  Phonebook = () => {
  const stateContacts = useSelector(state => state.contacts.items)
  const dispatch = useDispatch()

  const stateFilter = useSelector(state => state.contacts.filter)


  

  const submitData = ({name, number}) => {

    const findedContact = stateContacts.find(
      (contact) => contact.name.toLocaleLowerCase() === name.toLowerCase()
    );
    if (findedContact) {
      alert(`${name} is already in contacts.`);
    } else
    dispatch(addItems({ name, number }));
  };

  const changFilter = (event) => {
    dispatch(addFilter(event.currentTarget.value))
  };

  const visibleRender = () => {
    const normalizedFilter = stateFilter.toLowerCase();
    return stateContacts.filter(item => 
      item.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deletContact = (id) => {
    dispatch(deleteItems({id}))

  };


      return (
      <div>
        <h1> Phonebook </h1>
        <Form onSubmit={submitData} />
        <h2>Contacts</h2>
        <Filter value={stateFilter} onChange={changFilter} />
        <RenderContacts
          value={visibleRender()}
          onDelete={deletContact}
        />
      </div>
    );
  
}

export default Phonebook;
