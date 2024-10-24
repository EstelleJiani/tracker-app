import { collection, addDoc, doc, deleteDoc, getDocs, updateDoc} from "firebase/firestore"; 
import { database } from "./firebaseConfig";

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
