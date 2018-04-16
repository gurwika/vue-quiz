<template>
    <div class="quiz-holder">
        <div class="background">
            <div class="image-container" v-for="(question, index) in questions" :key="index" v-bind:class="{ current: index === currentQuestion, showed: index < currentQuestion }">
                <img v-bind:src="question.Cover"/>
            </div>
        </div>
        <div class="question-items">
            <div class="question" v-for="(question, index) in questions" :key="index" v-bind:class="{ current: index === currentQuestion }">
                <p>
                    {{ question.Question }}
                </p>
            </div>
        </div>
        <div class="quiz-items">
            <app-question   v-for="(question, index) in questions" :key="index"
                            v-bind:current="index === currentQuestion"
                            v-bind:Id="question.Id"
                            v-bind:Image="question.Image"
                            v-bind:Cover="question.Cover"
                            v-bind:Question="question.Question"
                            v-bind:Answears="question.Answears"
                            v-bind:approved="question.approved"
                            v-on:draggedThreshold="answer($event)">
            </app-question>
        </div>

        <div class="nav">
            <div class="nav-left">
                <button @click="answer(false)">{{ questions[currentQuestion].Old }}</button>
                <button @click="answer(true)">{{ questions[currentQuestion].NotOld }}</button>
            </div>

            <div class="ls-container ls-lg-shown">
                <div class="ls-row">
                    <div class="ls-sm-12 ls-xs-12">
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
    import Question from '@/components/common/Question';

    export default {
        props:{
            questions:{
                Type: Array,
                required: true
            }
        },
        components:{
            'app-question': Question
        },
        name: 'quiz',
        data () {
            return {
                currentQuestion: 0
            }
        },
        methods: {
            answer: function(correct){
                this.$emit("answer", { Correct: correct,  Id: this.questions[this.currentQuestion].Id });

                this.questions[this.currentQuestion].approved = correct;
                if (this.currentQuestion + 1 < this.questions.length) {
                    this.currentQuestion++;
                }else{
                    this.$emit("result");
                }
            }
        },
        mounted: function() {
            var  self = this;

            document.addEventListener("keyup", function(e){
                e.keyCode == 39 && self.answer(true);
                e.keyCode == 37 && self.answer(false);
            });
        }
    }
</script>


<style>/*
    .animated {
        -webkit-transition: transform 0.5s cubic-bezier(0.18, 0.89, 0.32, 1.28), opacity 1s cubic-bezier(0.18, 0.89, 0.32, 1.28);
        transition: transform 0.5s cubic-bezier(0.18, 0.89, 0.32, 1.28), opacity 1s cubic-bezier(0.18, 0.89, 0.32, 1.28);
    }
    .swiped {
        opacity: 0.8 !important;
        z-index: 4;
        -webkit-transition: transform 4s cubic-bezier(0.18, 0.89, 0.32, 1.28), opacity 4s cubic-bezier(0.18, 0.89, 0.32, 1.28);
        transition: transform 4s cubic-bezier(0.18, 0.89, 0.32, 1.28), opacity 4s cubic-bezier(0.18, 0.89, 0.32, 1.28);
    }
    .quiz-item{
        -webkit-transform: translateY(0px) scale(0.9,0.9);
        transform: translateY(0px) scale(0.9,0.9);
    }
    .quiz-item:nth-child(1) {
        -webkit-transform: translateY(0px) scale(1);
        transform: translateY(0px) scale(1);
    }
    .quiz-item:nth-child(2) {
        opacity: 1 !important;
        -webkit-transform: translateY(0px) scale(0.9,0.9) !important;
        transform: translateY(0px) scale(0.9,0.9) !important;
        overflow: hidden;
    }

    .quiz-item img{
        -webkit-transition: filter 0.5s cubic-bezier(0.18, 0.89, 0.32, 1.28);
        transition: filter 0.5s cubic-bezier(0.18, 0.89, 0.32, 1.28);
    }

    .quiz-item:nth-child(2) img{
        -webkit-filter: grayscale(0.4) blur(4px);
        filter: grayscale(0.4) blur(4px);
    }

    .quiz-item.current {
        pointer-events: auto;
        opacity: 1;
        z-index: 3;
    }
    .question-items .question p{
        -webkit-transform: translateY(100%) translateZ(0);
        transform: translateY(100%) translateZ(0);

        -webkit-transition: transform 0.5s cubic-bezier(0.22, 0.61, 0.36, 1);
        transition: transform 0.5s cubic-bezier(0.22, 0.61, 0.36, 1);
    }
    .question-items .question.current + .question p{
        opacity: 0;
        -webkit-transform: translateY(-100%) translateZ(0);
        transform: translateY(-100%) translateZ(0);
    }
    .question-items .question.current p{
        -webkit-transform: translateY(0%) translateZ(0);
        transform: translateY(0%) translateZ(0);
    }*/
</style>