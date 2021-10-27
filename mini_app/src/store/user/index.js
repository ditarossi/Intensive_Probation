import firebase from "@/firebase";
import { def } from "@vue/shared";
import store from "..";

const state = {
    userProfile:{},
    loggedIn: false,
};

const getters = {

};

const mutation = {

};

const action = {
    async login(){
        if(store.state.loggedIn) return;

        const provider = new firebase.auth.GoogleAuthProvider();
        try{
            await firebase.auth().signInWithPopup(provider)
        } catch (error){
            console.log(error);
        }
    },

    async logout(){

    }
};

export default{
    namespaced: true,
    state,
    getters,
    mutation,
    action
};