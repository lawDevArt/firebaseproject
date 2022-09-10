import { connectAuthEmulator } from "firebase/auth"
import React, { useState } from 'react';
import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { useContext, useEffect } from 'react'
import { AuthGoogleContext } from '../../contexts/authGoogle'
import { addDoc, collection, doc, getDocs, getFirestore } from 'firebase/firestore';
import { app } from '../../services/firebaseConfig';

function Home(){
    return (
        <div>
            <h1>Home</h1>
            <p>Conteudo da pagina</p>
        </div>
    )
}

export default Home;