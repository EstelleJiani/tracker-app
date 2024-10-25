import { onSnapshot, collection, doc, addDoc, deleteDoc, updateDoc } from "firebase/firestore"; 
import { database } from "./firebaseConfig";

// Listen to a collection and call a callback with the documents
export function listenToCollection(collectionName, callback) {
  try {
    const unsubscribe = onSnapshot(
      collection(database, collectionName),
      (snapshot) => {
        // Convert the documents to an array of objects
        const docs = snapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
          date: doc.data().date.toDate()
        }));
        callback(docs);
      }

      // Alternative way to convert the documents to an array of objects
      // (querySnapshot) => {
      //   const docs = [];
      //   querySnapshot.forEach(doc => {
      //     docs.push({id: doc.id, ...doc.data()});
      //   });
      //   callback(docs);
      // }
    );
    return unsubscribe;
  } catch (error) {
    console.error("Error listening to collection: ", error);
  }
}

// Add a new document to the specified collection
export async function writeToDatabase(collectionName, data) {
  try {
    const docRef = await addDoc(collection(database, collectionName), data);
    console.log("Document written with ID: ", docRef.id);
  } catch (error) {
    console.error("Error adding document: ", error);
  }
}

// Update a document in the specified collection
export async function updateInDatabase(collectionName, id, data) {
  try {
    await updateDoc(doc(database, collectionName, id), data);
    console.log("Document updated with ID: ", id);
  } catch (error) {
    console.error("Error updating document: ", error);
  }
}

// Delete a document from the specified collection
export async function deleteFromDatabase(collectionName, id) {
  try {
    await deleteDoc(doc(database, collectionName, id));
    console.log("Document deleted with ID: ", id);
  } catch (error) {
    console.error("Error deleting document: ", error);
  }
}
