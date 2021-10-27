<template>
        <img class="bg" src="../assets/background.jpg" alt="Login using Facebook">
        <div class="login" :style="login">
            <h3>Welcome!</h3>
            <input type="text" name="username" id="username" placeholder="Username" :style="input">
            <br>
            <input type="password" name="password" id="password" placeholder="Password" :style="input">
            <br>
            <a class="link" href="#">Forgot Password?</a>
            <br>
            <br>
            <a class="btn btn-outline-success" @click="props.login" >Login</a>
            <a class="btn btn-outline-dark" href="/register">Register</a>
            <br>
            <img class="logo" src="../assets/google.svg" alt="Login using Google">
        </div>
</template>

<script>
    import {mapActions} from "vuex"

    export default {
        name: 'Login',
        methods : {
        ...mapActions('user', {
            login : 'login',
        })
        }
    }
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
    template{
        /*background-image: url("https://mdbootstrap.com/img/new/fluid/city/008.jpg");*/
        background-image: url("../assets/background.jpg");
    }
    
    .login {
        /*background: url("/assets/background.jpg") center center;
        background: rgba(255, 255, 255, 0.4);
        background-color: lightblue;*/
        background-color: rgb(228, 228, 228);
        /*background: rgba(255, 255, 255, 0.4);*/
        position: absolute;
        top: 20%;
        left: 30%;
        width: 40%;
        text-align: center;
        padding: 5px;
        border-radius: 1rem;
        box-shadow: 0px 0px 10px 0px;
        padding-top: 3%;
        padding-bottom: 5%;
        font-family: 'Poppins', sans-serif;
    }
    h3 {
        cursor: default;
        user-select: none;
    }
    input {
        border-radius: 0.5rem;
        border: none;
        padding: 10px;
        text-align: center;
        outline: none;
        margin: 10px;
        width: 75%;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }
    input:hover {
        box-shadow: 0px 0px 5px 0px;
    }
    input:active {
        box-shadow: 0px 0px 5px 0px;
    }
    .link{
        font-size: 10px;
    }
    .btn{
        font-size: 15px;
        border-radius: 0.5rem;
        border: none;
        padding: 10px;
        text-align: center;
        outline: none;
        margin: 10px;
        width: 30%;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }
    #done {
        background: lightgreen;
    }
    .button {
        cursor: pointer;
        user-select: none;
    }
    .logo {
        height: 2.2rem;
        margin: 10px;
        user-select: none;
    }
    .logo:hover {
        box-shadow: 0px 0px 5px 0px;
        cursor: pointer;
        border-radius: 200rem;
    }

    .bg{
        width: 100%;
        height: 100%;
    }
</style>
