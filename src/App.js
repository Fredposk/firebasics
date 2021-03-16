import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import React, { useState } from 'react';
import './App.css';

import {
    useCreateUserWithEmailAndPassword,
    useSignInWithEmailAndPassword,
} from 'react-firebase-hooks/auth';
// import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp(
    // Add config here
    {
        apiKey: 'AIzaSyBNvvN3m0bvECbuh75-NshFeMJwTTb5oYk',
        authDomain: 'learning-firebase-9cb31.firebaseapp.com',
        projectId: 'learning-firebase-9cb31',
        storageBucket: 'learning-firebase-9cb31.appspot.com',
        messagingSenderId: '1002311605588',
        appId: '1:1002311605588:web:2f7ac4d7e899e6cd3dfcc1',
    }
);

// const auth = firebase.auth();
// const firestore = firebase.firestore();

function App() {
    return (
        <div className='App'>
            <header></header>
            <section>
                {' '}
                <SignIn />
            </section>
            {/* <section>{user ? <ChatRoom /> : <SignIn />}</section> */}
        </div>
    );
}

function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [
        createUserWithEmailAndPassword,
        user,
    ] = useCreateUserWithEmailAndPassword(firebase.auth());
    console.log(user);

    const signInWithEmailAndPassword = async () => {
        try {
            const userCredential = await firebase
                .auth()
                .signInWithEmailAndPassword(email, password);
            console.log(userCredential);
            console.log('signedin');
        } catch (error) {
            console.log(error);
        }
    };

    const signOut = () =>
        firebase
            .auth()
            .signOut()
            .then(() => {
                // Sign-out successful.
                console.log('signed out');
            })
            .catch((error) => {
                // An error happened.
                console.log('error');
            });

    return (
        <>
            <input
                type='text'
                onChange={(e) => {
                    setEmail(e.target.value);
                }}
                placeholder='Email'
            ></input>
            <br />
            <input
                onChange={(e) => {
                    setPassword(e.target.value);
                }}
                type='password'
                placeholder='Password'
            ></input>

            <button
                className='sign-in'
                onClick={() => createUserWithEmailAndPassword(email, password)}
            >
                Registering
            </button>
            <button className='sign-in' onClick={signInWithEmailAndPassword}>
                Sign in with email and password
            </button>
            <button className='sign-out' onClick={signOut}>
                Sign out
            </button>
        </>
    );
}

export default App;
