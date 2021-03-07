import { useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth } from "./fire/AuthContext";
import { read_user_from_db } from "./fire/userProfiles";

const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  const { currentUser } = useAuth();

  useEffect(() => {
    const getContacts = async () => {
      const userProfile = await read_user_from_db(currentUser);
      setContacts(userProfile.contacts.filter((contact) => {
        return currentUser.email !== contact;
      }));
    }

    getContacts();
  }, [currentUser]);

  const handleClick = () => {
    console.log("Click");
  }

  return (
    <>
      <ListGroup>
        {contacts && contacts.map((contact, idx) => {
          return (
            <ListGroup.Item key={idx} onClick={handleClick}>
              <Link to={`/messages/${contact}`}>{contact}</Link>
            </ListGroup.Item>
          )
        })}
      </ListGroup>
    </>
  );
};

export default Contacts;
