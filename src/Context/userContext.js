import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, updateProfile, } from "firebase/auth";
import { auth, db } from "../firebase-config";
import Loader from "../Composant/Loader"
import Toast from "../Composant/Toast";
import { addDoc, collection, deleteDoc, doc, getDocs, setDoc } from "firebase/firestore";
export const UserContext = createContext()



export function UserContextProvider(props) {

    const [currentUser, setcurrentUser] = useState()
    const [loadingData, setLoadingData] = useState(true)
    const [notify, setNotify] = useState({
        isTrue: false
    })

    const signUp = (email, pwd) => createUserWithEmailAndPassword(auth, email, pwd)
    const signIn = (email, pwd) => signInWithEmailAndPassword(auth, email, pwd)



    const updateProfilePseudo = (pseudo) => {
        if (pseudo !== "" || null || undefined) {
            updateProfile(currentUser, {
                displayName: pseudo
            })
        }
    }

    const addFavoris = async (pseudo, description, imageLink, uuid) => {
        try {
            const cred = await setDoc(doc(db, currentUser.email, uuid), {
                pseudo: pseudo,
                description: description,
                imageLink: imageLink,
                uuid: uuid
            })
            console.log(cred)
        } catch (err) {

        }

    }

    const removeFavoris = async (uuid) => {
        try {
            const cred = await deleteDoc(doc(db, currentUser.email, uuid))
            console.log(cred)
        } catch (err) {

        }

    }

    const getFavoris = async () => {
        const querySnapshot = await getDocs(collection(db, currentUser.email));
        var favoris = []
        querySnapshot.forEach((doc) => {

            favoris.push(doc.data())
        });
        return favoris

    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setcurrentUser(currentUser)
            setLoadingData(false)

        })
        return unsubscribe;
    }, [])
    return (
        <UserContext.Provider value={{ signIn, signUp, currentUser, updateProfilePseudo, setNotify, addFavoris, getFavoris, removeFavoris }}>
            <Toast notify={notify} setNotify={setNotify} />
            {!loadingData ? props.children : <Loader />}
        </UserContext.Provider>




    )

}
