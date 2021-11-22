<template>
    <div class="container">
        <h1 v-if="showTitle">{{title}}</h1>

        <!-- Este añade un display none con css -->
        <h1 v-show="showTitle2">{{title2}}</h1> 

        <ul>
            <li v-for="u, index in users" :key="index">{{u.name}}</li>
        </ul>
        <ul>
            <li v-for="index in range" :key="index">{{index}}</li>
        </ul>

        <div>
            <!-- @click es lo mismo que v-on: -->
            <!-- @mouseover y @mousemove también están-->
            <!-- Podriamos especificar el boton a clicar @click.right -->
            <h3>{{counter}}</h3>
            <button @click="inc">+</button>
            <button @click="dec">-</button>
            <button @click="evento($event, 4)">X</button>
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
            users: [{name: "pepe"},{name: "pepe"},{name: "pepe"},{name: "pepe"}],
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

</style>