import { firebaseApp, db } from "@/firebase";
import { doc, getDoc } from "firebase/firestore";

interface authProps {
  email: string;
  password: string;
}

// Auth

export const logIn = (dataForm: authProps) => {
  return new Promise((resolve, reject) => {
    firebaseApp
      .auth()
      .signInWithEmailAndPassword(dataForm.email, dataForm.password)
      .then((response) => {
        console.log("response", response);
        localStorage.setItem("itsLogin", "true");
        resolve(response);
      })
      .catch((error) => {
        console.log("error", error);
        reject(error);
      });
  });
};

export const createUser = (dataForm: authProps) => {
  return new Promise((resolve, reject) => {
    firebaseApp
      .auth()
      .createUserWithEmailAndPassword(dataForm.email, dataForm.password)
      .then((response: any) => {
        const uid = response.user?.multiFactor.user.uid;
        localStorage.setItem("itsLogin", "true");
        resolve(uid);
      })
      .catch((error) => {
        console.log("error", error);
        reject(error);
      });
  });
};

interface createProfileProps {
  pet_name: string;
  race: string;
  email: string;
  password: string;
}

export const createProfile = (uid: string, dataForm: createProfileProps) => {
  return new Promise((resolve, reject) => {
    db.collection("pets")
      .doc(`${uid}`)
      .set({
        ...dataForm,
        created_at: new window.Date(),
        uid,
      })
      .then((res) => {
        console.log("res", res);
        localStorage.setItem("uid", uid);
        resolve(res);
      })
      .catch((error) => {
        reject(error);
        console.log(error);
      });
  });
};

export const getUser = (uid: string) => {
  console.log("id", uid);
  return new Promise(async (resolve, reject) => {
    const docRef = doc(db, "pets", uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
    } else {
      console.log("No such document!");
    }
  });
};
