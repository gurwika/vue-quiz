<template>
    <div class="main" v-bind:class="{ quiz: config.condition > 2, form: config.condition == 4, in: config.condition == 3, end: config.condition == 5 }">
        <app-header></app-header>

        <app-error v-if="config.condition == 0"></app-error>
        <app-loading v-if="config.condition == 1"></app-loading>
        <app-home v-if="config.condition == 2"></app-home>
        <app-intro v-if="config.condition == 2" v-on:start="startQuiz($event)"></app-intro>
        <app-quiz v-if="config.condition == 3"
                  v-bind:questions="questions"
                  v-on:result="startForm($event)"
                  v-on:answer="answerQuestion($event)"
        ></app-quiz>
        <app-form v-if="config.condition == 4" v-on:start="registerUser($event)"></app-form>
        <app-result v-if="config.condition == 5"
                    v-on:restart="restartQuiz($event)"
                    v-bind:score="result.score"
                    v-bind:description="result.description"
        ></app-result>
    </div>
</template>
<script>
    import Loading from '@/components/common/Loading';
    import Error from '@/components/common/Error';
    import Header from '@/components/common/Header';

    import Home from '@/components/shared/Home';
    import Intro from '@/components/shared/Intro';
    import Form from '@/components/shared/Form';
    import Quiz from '@/components/shared/Quiz';
    import Result from '@/components/shared/Result';

    import MainService from '@/services/main.service';

    export default {
        components:{
            'app-loading': Loading,
            'app-error': Error,
            'app-header': Header,
            'app-home': Home,
            'app-intro': Intro,
            'app-form': Form,
            'app-quiz': Quiz,
            'app-result': Result
        },
        name: 'Main',
        data () {
            return {
                config:{
                    quota: 0,
                    condition: 1,
                    isLoaded: false,
                    isFinishedIntro: false,
                    blockThread: false
                },
                result:{
                    score: 0,
                    description: null
                },
                questions: [],
                questionAnswers: []
            }
        },
        methods: {
            init: function() {
                this.config.condition = 2;

                MainService.initQuiz()
                    .then(response => {
                        this.config.quota++;
                        this.questions = response;
                    });
            },
            startQuiz: function() {
                this.config.condition = 3;
            },
            answerQuestion: function(reqestData){
                reqestData.Quota = this.config.quota;
                this.questionAnswers.push(reqestData);
            },
            startForm: function() {
                if(this.config.quota > 1){
                    !this.config.blockThread && this.showResult();
                }else{
                    this.config.condition = 4;
                }
            },
            showResult: function() {
                this.config.condition = 5;
                this.config.blockThread = true;
                MainService.showResut({Quota: this.config.quota, Answers: this.questionAnswers})
                    .then(response => {
                        this.config.blockThread = false;
                        this.result = response.result;
                    });
            },
            restartQuiz: function() {
                this.config.quota++;
                MainService.getQuestions()
                    .then(response => {
                        this.questions = response;
                        this.questionAnswers = [];
                        this.config.condition = 3;
                    });
            },
            registerUser: function(user) {
                MainService.registerUser(user)
                    .then(response => {
                        this.showResult()
                    });
            }
        },
        computed:{

        },
        created(){
            this.init();
        }
    }
</script>