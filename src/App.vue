<template>
    <div class="new-div"></div>
    <div class="container">
        <h1 class="title" v-if="showTitle">{{ title }}</h1>

        <!-- Este añade un display none con css -->
        <h1 v-show="showTitle2">{{ title2 }}</h1>

        <div class="for-container">
            <div class="simple-for">
                <h2>This is a simple for</h2>
                <ul>
                    <li v-for="u, index in users" :key="index">{{ u.name }}</li>
                </ul>
            </div>
            <div class="range-for">
                <h2>This is a for using range</h2>
                <ul>
                    <li v-for="index in range" :key="index">{{ index }}</li>
                </ul>
            </div>
        </div>

        <div class="calculator-container">
            <!-- @click es lo mismo que v-on: -->
            <!-- @mouseover y @mousemove también están-->
            <!-- Podriamos especificar el boton a clicar @click.right -->
            <h2>This is a vue simple calculator</h2>
            <h3>Actual value: {{ counter }}</h3>
            <div class="calculator">
                <button @click="inc">+</button>
                <button @click="dec">-</button>
                <button @click="evento($event, 4)">X</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "App",
    data() {
        return {
            title: "Vue title",
            showTitle: true,
            showTitle2: false,
            users: [{ name: "pepe" }, { name: "pepe" }, { name: "pepe" }, { name: "pepe" }],
            range: 5,
            counter: 0
        }
    },
    methods: {
        inc() {
            this.counter++
        },
        dec() {
            this.counter--
        },
        evento(event, args) {
            console.log(event, args)
        }
    }
}
</script>

<style>
body {
    margin: 0;
    background: #a55067;
    display: flex;
    justify-content: center;
    flex-direction: column;
}
h2 {
    border-bottom: 1px solid black;
}
.title {
    text-align: center;
    color: white;
}
.calculator {
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
.calculator > button {
    margin: 5px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    font-weight: bold;
    background: #c56d55;
    border: 1px solid white;
    box-shadow: 1px 1px 2px white;
}
.calculator > button:hover {
    background: #784233;
}
</style>