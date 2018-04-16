<template>
    <div class="boxLoading"></div>
</template>
<script>
    export default {
        name: 'Loading',
        data () {
            return {

            }
        }
    }
</script>

<style scoped>
    .boxLoading {
        width: 50px;
        height: 50px;
        margin: auto;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
    }
    .boxLoading:before {
        content: '';
        width: 50px;
        height: 5px;
        background: #fff;
        opacity: 0.1;
        position: absolute;
        top: 59px;
        left: 0;
        border-radius: 50%;
        animation: shadow 0.8s linear infinite;
    }
    .boxLoading:after {
        content: '';
        width: 50px;
        height: 50px;
        background: rgba(255,255,255,0.8);
        animation: animate 0.8s linear infinite;
        position: absolute;
        top: 0;
        left: 0;
        border-radius: 3px;
    }
    @-ms-keyframes animate {
        17% {
            -webkit-border-bottom-right-radius: 3px;
            -moz-border-radius-bottomright: 3px;
            border-bottom-right-radius: 3px;
        }
        25% {
            transform: translateY(9px) rotate(22.5deg);
            -webkit-transform: translateY(9px) rotate(22.5deg);
            -moz-transform: translateY(9px) rotate(22.5deg);
        }
        50% {
            transform: translateY(18px) scale(1, 0.9) rotate(45deg);
            -webkit-transform: translateY(18px) scale(1, 0.9) rotate(45deg);
            -moz-transform: translateY(18px) scale(1, 0.9) rotate(45deg);
            -webkit-border-bottom-right-radius: 40px;
            -moz-border-radius-bottomright: 40px;
            border-bottom-right-radius: 40px;
        }
        75% {
            transform: translateY(9px) rotate(67.5deg);
            -webkit-transform: translateY(9px) rotate(67.5deg);
            -moz-transform: translateY(9px) rotate(67.5deg);
        }
        100% {
            transform: translateY(0) rotate(90deg);
            -webkit-transform: translateY(0) rotate(90deg);
            -moz-transform: translateY(0) rotate(90deg);
        }
    }
    @-moz-keyframes  animate {
        17% {
            -webkit-border-bottom-right-radius: 3px;
            -moz-border-radius-bottomright: 3px;
            border-bottom-right-radius: 3px;
        }
        25% {
            transform: translateY(9px) rotate(22.5deg);
            -webkit-transform: translateY(9px) rotate(22.5deg);
            -moz-transform: translateY(9px) rotate(22.5deg);
        }
        50% {
            transform: translateY(18px) scale(1, 0.9) rotate(45deg);
            -webkit-transform: translateY(18px) scale(1, 0.9) rotate(45deg);
            -moz-transform: translateY(18px) scale(1, 0.9) rotate(45deg);
            -webkit-border-bottom-right-radius: 40px;
            -moz-border-radius-bottomright: 40px;
            border-bottom-right-radius: 40px;
        }
        75% {
            transform: translateY(9px) rotate(67.5deg);
            -webkit-transform: translateY(9px) rotate(67.5deg);
            -moz-transform: translateY(9px) rotate(67.5deg);
        }
        100% {
            transform: translateY(0) rotate(90deg);
            -webkit-transform: translateY(0) rotate(90deg);
            -moz-transform: translateY(0) rotate(90deg);
        }
    }
    @-webkit-keyframes  animate {
        17% {
            -webkit-border-bottom-right-radius: 3px;
            -moz-border-radius-bottomright: 3px;
            border-bottom-right-radius: 3px;
        }
        25% {
            transform: translateY(9px) rotate(22.5deg);
            -webkit-transform: translateY(9px) rotate(22.5deg);
            -moz-transform: translateY(9px) rotate(22.5deg);
        }
        50% {
            transform: translateY(18px) scale(1, 0.9) rotate(45deg);
            -webkit-transform: translateY(18px) scale(1, 0.9) rotate(45deg);
            -moz-transform: translateY(18px) scale(1, 0.9) rotate(45deg);
            -webkit-border-bottom-right-radius: 40px;
            -moz-border-radius-bottomright: 40px;
            border-bottom-right-radius: 40px;
        }
        75% {
            transform: translateY(9px) rotate(67.5deg);
            -webkit-transform: translateY(9px) rotate(67.5deg);
            -moz-transform: translateY(9px) rotate(67.5deg);
        }
        100% {
            transform: translateY(0) rotate(90deg);
            -webkit-transform: translateY(0) rotate(90deg);
            -moz-transform: translateY(0) rotate(90deg);
        }
    }
    @keyframes  animate {
        17% {
            -webkit-border-bottom-right-radius: 3px;
            -moz-border-radius-bottomright: 3px;
            border-bottom-right-radius: 3px;
        }
        25% {
            transform: translateY(9px) rotate(22.5deg);
            -webkit-transform: translateY(9px) rotate(22.5deg);
            -moz-transform: translateY(9px) rotate(22.5deg);
        }
        50% {
            transform: translateY(18px) scale(1, 0.9) rotate(45deg);
            -webkit-transform: translateY(18px) scale(1, 0.9) rotate(45deg);
            -moz-transform: translateY(18px) scale(1, 0.9) rotate(45deg);
            -webkit-border-bottom-right-radius: 40px;
            -moz-border-radius-bottomright: 40px;
            border-bottom-right-radius: 40px;
        }
        75% {
            transform: translateY(9px) rotate(67.5deg);
            -webkit-transform: translateY(9px) rotate(67.5deg);
            -moz-transform: translateY(9px) rotate(67.5deg);
        }
        100% {
            transform: translateY(0) rotate(90deg);
            -webkit-transform: translateY(0) rotate(90deg);
            -moz-transform: translateY(0) rotate(90deg);
        }
    }
    @keyframes  animate {
        17% {
            -webkit-border-bottom-right-radius: 3px;
            -moz-border-radius-bottomright: 3px;
            border-bottom-right-radius: 3px;
        }
        25% {
            transform: translateY(9px) rotate(22.5deg);
            -webkit-transform: translateY(9px) rotate(22.5deg);
            -moz-transform: translateY(9px) rotate(22.5deg);
        }
        50% {
            transform: translateY(18px) scale(1, 0.9) rotate(45deg);
            -webkit-transform: translateY(18px) scale(1, 0.9) rotate(45deg);
            -moz-transform: translateY(18px) scale(1, 0.9) rotate(45deg);
            -webkit-border-bottom-right-radius: 40px;
            -moz-border-radius-bottomright: 40px;
            border-bottom-right-radius: 40px;
        }
        75% {
            transform: translateY(9px) rotate(67.5deg);
            -webkit-transform: translateY(9px) rotate(67.5deg);
            -moz-transform: translateY(9px) rotate(67.5deg);
        }
        100% {
            transform: translateY(0) rotate(90deg);
            -webkit-transform: translateY(0) rotate(90deg);
            -moz-transform: translateY(0) rotate(90deg);
        }
    }
    @-ms-keyframes shadow {
        0%,
        100% {
            transform: scale(1, 1);
            -webkit-transform: scale(1, 1);
            -moz-transform: scale(1, 1);
        }
        50% {
            transform: scale(1.2, 1);
            -webkit-transform: scale(1.2, 1);
            -moz-transform: scale(1.2, 1);
        }
    }
    @-moz-keyframes  shadow {
        0%,
        100% {
            transform: scale(1, 1);
            -webkit-transform: scale(1, 1);
            -moz-transform: scale(1, 1);
        }
        50% {
            transform: scale(1.2, 1);
            -webkit-transform: scale(1.2, 1);
            -moz-transform: scale(1.2, 1);
        }
    }
    @-webkit-keyframes  shadow {
        0%,
        100% {
            transform: scale(1, 1);
            -webkit-transform: scale(1, 1);
            -moz-transform: scale(1, 1);
        }
        50% {
            transform: scale(1.2, 1);
            -webkit-transform: scale(1.2, 1);
            -moz-transform: scale(1.2, 1);
        }
    }
    @keyframes  shadow {
        0%,
        100% {
            transform: scale(1, 1);
            -webkit-transform: scale(1, 1);
            -moz-transform: scale(1, 1);
        }
        50% {
            transform: scale(1.2, 1);
            -webkit-transform: scale(1.2, 1);
            -moz-transform: scale(1.2, 1);
        }
    }
    @keyframes  shadow {
        0%,
        100% {
            transform: scale(1, 1);
            -webkit-transform: scale(1, 1);
            -moz-transform: scale(1, 1);
        }
        50% {
            transform: scale(1.2, 1);
            -webkit-transform: scale(1.2, 1);
            -moz-transform: scale(1.2, 1);
        }
    }
</style>