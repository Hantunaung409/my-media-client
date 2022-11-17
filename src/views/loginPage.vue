<template>
    <div class="d-flex justify-content-center align-item-center mt-4">
        <p class="btn btn-sm btn-danger text-white me-4" @click="home()">Home</p>
        <p class="btn btn-sm btn-dark text-white" @click="loginPage()">Login</p>
    </div>
    <!-- login form -->
    <div class="container col-6 shadow my-5 p-3">
            <legend class=" border-bottom">Login Form</legend>
            <div class="alert alert-danger" v-if="userStatus">
                The Credentials do not Match!
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" v-model="accData.email"/>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="password" v-model="accData.password"/>
            </div>
            <button type="button" class="btn btn-dark text-white" @click="loginProcess()">Submit</button>
    </div>
</template>
<script src="../js/loginPage.js"></script>
