<template>
    <div class="form-holder">
        <div class="centerer">
            <div class="center-holder">
                <div class="ls-container">
                    <div class="form">
                        <h2>old or not old?</h2>
                        <p>To find out your inner age enter your details below</p>

                        <div class="form-boxes">
                            <div class="box">

                                <div class="input" v-bind:class="{ error: this.errors.Name}">
                                    <input required="required" name="name" v-model="user.Name" v-on:keyup="isValidForm('Name')" autocomplete="off"/>
                                    <label for="name">Your name</label>
                                </div>

                                <div class="input" v-bind:class="{ error: this.errors.Email}">
                                    <input required="required" name="email" v-model="user.Email" v-on:keyup="isValidForm('Email')" autocomplete="off"/>
                                    <label for="email">Your email</label>
                                </div>
                                <button class="start" @click="start">
                                    SEND
                                    <i></i>
                                </button>
                            </div>
                            <div class="box">
                                <h3>Why do we use it</h3>
                                <div class="checkbox" v-bind:class="{ error: this.errors.AgreeTerms}">
                                    <label>
                                        <input type="checkbox" value="true" name="AgreeTerms" v-model="user.AgreeTerms" v-on:change="isValidForm('AgreeTerms')"/>
                                        <i class="input-helper"></i>
                                        We need to collect and store your personal details to provide you with more information. More details can be found in our <a href="https://www.example.com/web/uk/privacy" target="_blank">Privacy Policy.</a> I agree to the terms in the <a href="https://www.example.com/web/uk/privacy" target="_blank">Privacy Policy.</a>
                                    </label>
                                </div>
                                <div class="checkbox">
                                    <label>
                                        <input type="checkbox" value="true" name="AgreePublish" v-model="user.AgreePublish"/>
                                        <i class="input-helper"></i>
                                        I'd like Example to send me information about hearing aid solutions, services and offers that are relevant to me via Email.
                                    </label>
                                </div>
                                <button class="start" @click="start">
                                    <span>SEND</span>
                                    <i></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'Form',
        data () {
            return {
                errors:{},
                user:{
                    Name: '',
                    Email: '',
                    AgreeTerms: false,
                    AgreePublish: false,
                }
            }
        },
        methods: {
            validEmail: function(email){
                if (email == '' || typeof email === 'undefined')
                    return false;

                return email.match(/^([\w\!\#$\%\&\'\*\+\-\/\=\?\^\`{\|\}\~]+\.)*[\w\!\#$\%\&\'\*\+\-\/\=\?\^\`{\|\}\~]+@((((([a-z0-9]{1}[a-z0-9\-]{0,62}[a-z0-9]{1})|[a-z])\.)+[a-z]{2,6})|(\d{1,3}\.){3}\d{1,3}(\:\d{1,5})?)$/i);
            },
            isValidForm:function(property) {
                let valid = true;
                this.errors = {};

                if(this.user.Name === '' && property.includes("name")) {
                    this.errors.Name = true;
                    valid = false;
                }

                if((this.user.Email === '' || !this.validEmail(this.user.Email)) && property.includes("email")) {
                    this.errors.Email = true;
                    valid = false;
                }

                if(!this.user.AgreeTerms && property.includes("AgreeTerms")) {
                    this.errors.AgreeTerms = true;
                    valid = false;
                }

                return valid;
            },
            start: function(){
                this.isValidForm('name|email|AgreeTerms') && this.$emit("start", this.user);
            }
        }
    }
</script>