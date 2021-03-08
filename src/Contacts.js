import { useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth } from "./fire/AuthContext";
import { read_user_from_db } from "./fire/userProfiles";
import Button from "react-bootstrap/Button";
import "./css/contacts.css";

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

  return (
    <div className="contacts-wrapper">
      <br/>
      <div>
        <Link to="/messages">
          <Button id="returnToMessages" type="submit" value="Submit">
            Return to Messages
          </Button>
        </Link>
      </div>
      <br/>
      <h1>
        Contacts
      </h1>
      <br/>
      <ListGroup>
        {contacts && contacts.map((contact, idx) => {
          return (
            <ListGroup.Item key={idx}>
              <Link to={`/messages/${contact}`}>{contact}</Link>
            </ListGroup.Item>
          )
        })}
      </ListGroup>
    </div>
  );
};

export default Contacts;
