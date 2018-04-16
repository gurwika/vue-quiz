<template>
    <div class="intro-holder">
        <div class="background"></div>

        <div class="intro">
            <div class="ls-container">
                <div class="intro-wrapper">
                    <div class="description">
                        <div class="title">
                            <h3>old or not old?</h3>
                            <p>Try the <b>test.</b></p>
                            <span>Example is listening to the <b>New Generation.</b></span>
                        </div>
                        <div class="intro-text">
                            <div class="text">
                                <h4>INSTRUCTIONS</h4>
                                <p>
                                    Press OLD or NOT OLD button to select your choice. If you don’t like buttons, you can use left or right arrow keys.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="screen">
                        <div class="image">
                            <div class="border"></div>
                            <div class="border-layer"></div>
                        </div>
                    </div>
                </div>

                <div class="intro-wrapper-mobile">
                    <div class="question">
                        <h4></h4>
                        <p></p>
                    </div>
                    <div class="image">
                        <div class="point"></div>
                        <div class="palceholder">
                            <div>
                                <span>Swipe left or right to select your choice.</span>
                            </div>
                        </div>
                    </div>
                    <div class="buttons">
                        <button></button>
                        <button></button>
                    </div>
                </div>
                <div class="intro-wrapper-mobile second">
                    <div class="question">
                        <h4></h4>
                        <p></p>
                    </div>
                    <div class="image"></div>
                    <div class="buttons">
                        <button></button>
                        <button></button>

                        <div class="palceholder">
                            <div>
                                <span>If you don’t like swiping press this…</span>
                            </div>
                        </div>
                        <div class="point"></div>
                    </div>
                </div>

                <div class="intro-wrapper-mobile third">
                    <div class="question">
                        <h4></h4>
                        <p></p>
                    </div>
                    <div class="image"></div>
                    <div class="buttons">
                        <button></button>
                        <button></button>

                        <div class="palceholder">
                            <div>
                                <span>or this...</span>
                            </div>
                        </div>
                        <div class="point"></div>
                    </div>
                </div>
            </div>
        </div>

        <div class="nav">
            <div class="ls-container">
                <div class="ls-row">
                    <div class="ls-md-6 ls-sm-12 ls-xs-12">
                        <div class="nav-left">
                            <div class="dots">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <button class="start" v-on:click="start">
                                <span>start</span>
                                <i></i>
                            </button>
                        </div>
                    </div>
                    <div class="ls-md-6 ls-sm-12 ls-xs-12 ls-xs-hidden">
                        <div class="nav-right">
                            <div class="arrow-left"></div>
                            <div class="arrow-right"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'Intro',
        data () {
            return {

            }
        },
        methods: {
            start: function(){
                this.$emit("start");
            }
        },
        mounted: function() {
            var  self = this;

            document.addEventListener("keyup", function(e){
                e.keyCode == 13 && self.start();
            });
        }
    }
</script>