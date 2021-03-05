import React, { useEffect, useState } from "react";
import { Card, ListGroup } from "react-bootstrap";
import { useAuth } from "./fire/AuthContext";
import { db } from "./fire/Fire";

const Contacts = () => {
  const { currentUser } = useAuth();
  const [contactsList, setContactsList] = useState([]);

  useEffect(() => {
    let docRef = db.collection("user_profiles").doc(currentUser.email);

    docRef.get().then((doc) => {
      if (doc.exists) {
        console.log("Document found!");
        setContactsList(doc.data().contacts);
      } else {
        console.log("No such document");
      }
    }).catch((error) => {
      console.log("Error getting document:", error);
    });
  })

  return (
    <>
      <Card style={{ width: "18rem" }}>
        <ListGroup variant="flush">
          <ListGroup.Item><strong>Contacts</strong></ListGroup.Item>
          {contactsList.map((contact, idx) => {
            return (
              <ListGroup.Item key={idx}>{contact}</ListGroup.Item>
            );
          })}
        </ListGroup>
      </Card>
    </>
  )
};

export default Contacts;
