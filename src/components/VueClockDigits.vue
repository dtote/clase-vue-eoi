<template>
    <div class="clock-digits-container">
        <span class="clock-digits" :style="cssVars">{{ hours }}:{{ minutes }}:{{ seconds }}</span>
    </div>
</template>

<script>
export default {
    name: "ClockDigits",
    data() {
        return {
            hours: "",
            minutes: "",
            seconds: "",
        }
    },
    props: {
        theme: {
            type: String,
            default: 'black',
        },
        size: {
            type: Number,
            default: 80
        },
        color: {
            type: String,
            default: "white"
        }
    },
    computed: {
        cssVars() {
            return {
                '--bgColor': this.theme === 'rainbow' ? 'linear-gradient(red, gold, blue, green)' : this.theme,
                '--color': this.color,
                '--fontSize': this.size
            }
        }
    },
    methods: {
        setTime() {
            const date = new Date();

            this.hours = this.padWithZero(date.getHours())
            this.minutes = this.padWithZero(date.getMinutes())
            this.seconds = this.padWithZero(date.getSeconds())
        },
        updateTime() {
            setInterval(() => this.setTime(), 1000)
        },
        padWithZero(num) {
            return String(num).padStart(2, "0")
        }
    },
    mounted() {
        this.updateTime()
    }
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Alfa+Slab+One&display=swap");
.clock-digits-container {
    background: var(--bgColor);
    text-align: center;
}

.clock-digits {
    font-family: "Alfo Slab One", cursive;
    font-weight: bold;
    font-size: var(--fontSize);
    color: var(--color);
}
</style>