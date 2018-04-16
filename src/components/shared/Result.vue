<template>
    <div class="result-holder">
        <div class="centerer">
            <div class="center-holder">
                <div class="ls-container">
                    <div class="result">
                        <div class="view">
                            <div class="view-holder">
                                <div class="centerer">
                                    <div class="center-holder">
                                        <div v-html="description"></div>
                                        <button @click="restart">PLAY AGAIN</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="register">
                            <a href="https://www.example.com/web/uk/old-or-not#form" target="_blank" class="hidden-md">
                                    <span>
                                        Book your free<br />
                                        <b>hearing test</b>
                                    </span>
                                <i></i>
                            </a>
                            <a href="https://www.example.com/web/uk/old-or-not" target="_blank" class="ls-xs-hidden">
                                    <span>
                                        Book your free<br />
                                        <b>hearing test</b>
                                    </span>
                                <i></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props:{
            score:{
                type: Number,
            },
            description: {
                type: String
            }
        },
        name: 'Result',
        data () {
            return {

            }
        },
        methods: {
            restart: function(){
                this.$emit("restart");
            }
        }
    }
</script>