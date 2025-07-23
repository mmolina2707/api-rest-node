import { db } from "./firebase.js";

import { collection, getDocs, doc, getDoc, addDoc, deleteDoc, setDoc} from "firebase/firestore";

const productsColletion = collection(db, "products");

export const getAllProducts = async () => {
    try{
      const snapshot = await getDocs(productsColletion);
      return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
      console.error(error);
    }
};

export const getProductById = async(id) => {
  try{
      const productRef = doc(productsColletion, id);
      const snapshot = await getDoc(productRef);
      return snapshot.exists() ? { id: snapshot.id, ...snapshot.data() } : null;
    } catch (error) {
      console.error(error);
    }
};

export const createProduct = async(data) => {
  try {
    const docRef = await addDoc(productsColletion, data);
    return { id: docRef.id, ...data};
    } catch (error) {
      console.error(error);
    }
};

export const deleteProduct = async(id) => {
  try {
    const productRef = doc(productsColletion, id);
    const snapshot = await getDoc(productRef);

    if (!snapshot.exists()) {
      return false;
    }

    await deleteDoc(productRef);
    return true;
  }catch(error) {
    console.error(error);
  }
};

export const updateProduct = async (id, updatedProductData) => {
  try {
    const docRef = doc(productsColletion, id);
    await setDoc(docRef, updatedProductData, { merge: true });
    return { id, ...updatedProductData };
  } catch (error) {
    console.error(error);
    return null;
  }
};


