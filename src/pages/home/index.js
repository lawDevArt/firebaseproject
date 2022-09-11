import { useState } from 'react';
import * as React from 'react';
import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { Navigate } from 'react-router-dom';
import { useContext, useEffect } from 'react'
import { AuthGoogleContext } from '../../contexts/authGoogle'
import { addDoc, collection, doc, getDocs, getFirestore } from 'firebase/firestore';
import { app } from '../../services/firebaseConfig';
import { Grid, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Menu from '../../components/menu';


export const Home = () => {
    const [users, setUsers] = useState([]);
    const [mensagem, setMensagem] = useState()
    const [name, setName] = useState();
    const { user, signOut } = useContext(AuthGoogleContext)
    const db = getFirestore(app);
    const userCollect = collection(db, "users")
    
    const HandleChange = (event) => {
        setMensagem(event.target.value)
        console.log(mensagem)
    }

    async function CreateMensage() {
        let name = user.displayName;
        const usuario = await addDoc(userCollect, {
            mensagem,
            name
        });
    }

    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(userCollect);
            let us = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
            console.log(us)
            setUsers(us)
        }
        getUsers();
    }, []);

    return (
        <Grid container spacing={2}>
            {/* <button onClick={() => signOut()}>Sair</button> */}
            <h1>SSS</h1>
            <Grid style={{position: "relative"}}>
                <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            </Grid>
        </Grid>
    )

}

export default Home