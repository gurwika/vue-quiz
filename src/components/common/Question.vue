<template>
    <div v-if="showing" class="quiz-item"
         v-bind:class="{ animated: animating, current: current, swiped:  swiped}"
         v-bind:style="{ transform: returnTransformString, opacity: current ? 1 - image.opacity : 0}">
        <div class="image">
            <div class="image-container">
                <img v-bind:src="Image" />
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            Id: {
                type: Number,
                required: true
            },
            Image: {
                type: String,
                required: true
            },
            Cover: {
                type: String,
                required: true
            },
            Question: {
                type: String,
                required: true
            },
            Answears: {
                Type: Array,
                required: true
            },
            current: {
                type: Boolean,
                required: true
            },
            approved: {
                type: Boolean
            }
        },
        name: 'Question',
        data () {
            return {
                showing: true,
                swiped: false,
                animating: true,
                threshold: window.innerWidth / 3,
                maxRotation: 40,
                position: {
                    x: 0,
                    y: 0,
                    rotation: 0
                },
                image: {
                    opacity: 0,
                    type: null
                }
            }
        },
        computed: {
            returnTransformString: function() {
                if (this.animating === false || this.approved !== null) {
                    const x = this.position.x;
                    const y = this.position.y;
                    const rotate = this.position.rotation;
                    return 'translate3D(' + x + 'px, ' + y + 'px, 0) rotate(' + rotate + 'deg)';
                }
                else {
                    return null;
                }
            }
        },
        watch: {
            approved: function() {
                if (this.approved !== null) {
                    const self = this;

                    interact(this.$el).unset();
                    this.swiped = true;
                    this.animating = false;

                    const x = window.innerWidth + (window.innerWidth / 2) + this.$el.offsetWidth;

                    if (this.approved === true) {
                        this.position.x = x;
                        this.position.rotation = this.maxRotation;
                    }
                    else if (this.approved === false) {
                        this.position.x = -x;
                        this.position.rotation = -this.maxRotation;
                    }

                    this.image.opacity = 1;

                    setTimeout(function() {
                        self.showing = false;
                    }, 300);
                }
            }
        },
        mounted: function() {
            const element = this.$el;
            const self = this;

            interact(element).draggable({
                inertia: false,
                onstart: function() {
                    self.animating = false;
                },
                onmove: function(event) {
                    const x = (self.position.x || 0) + event.dx;
                    const y = (self.position.y || 0) + event.dy;

                    let rotate = self.maxRotation * (x / self.threshold)  * Math.abs(y) * 0.003;

                    if (rotate > self.maxRotation) {
                        rotate = self.maxRotation;
                    }
                    else if (rotate < -self.maxRotation) {
                        rotate = -self.maxRotation;
                    }

                    self.position.x = x;
                    self.position.y = y;
                    self.position.rotation = rotate;
                    //self.position.rotation = rotate * (Math.abs(y) / y)

                    const opacityAmount = Math.abs(rotate) / self.maxRotation;

                    self.image.opacity = opacityAmount;
                    self.$emit('draggedActive', self.image.type, opacityAmount);

                },
                onend: function(event) {
                    self.animating = true;

                    if (self.position.x > self.threshold) {
                        self.$emit('draggedThreshold', true);
                        self.image.opacity = 1;
                    }
                    else if (self.position.x < -self.threshold) {
                        self.$emit('draggedThreshold', false);
                        self.image.opacity = 1;
                    }
                    else {
                        self.position.x = 0;
                        self.position.y = 0;
                        self.position.rotation = 0;
                        self.image.opacity = 0;
                    }

                    self.$emit('draggedEnded');
                }
            });
        },
    }
</script>