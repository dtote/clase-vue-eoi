<template>
    <div class="container">
        <h1>{{title}} Esto es reactivo</h1>
        <p v-pre>{{title}} Esto no se interpola</p>
        <h1 v-once>{{title}} esto no se re renderiza</h1>
        <p>💥💥💥 Mi primera app vue 3 💥💥💥</p>
        <p v-cloak>Cuando este elemento cargue, se muestra</p>
        <p v-html="titlev2"></p>
        <img :title="picTitle" src="https://www.kindpng.com/picc/m/80-800188_random-user-random-icon-png-transparent-png.png" alt="">
        <input v-model="title">
    </div>
</template>

<script>
export default {
    name: "App",
    data() {
        return {
            title: "¡Vue 3.0!",
            titlev2: "<em>ola</em>",
            picTitle: "this is a title"
        }
    }
}
</script>

<style>
/* Cuando todo lo que tenga esta etiqueta haya cargado, aplica x estilos */
[v-cloak] {
    display: none
}
body {
    margin: 0;
    background: #01AAFC;
}
h1 {
    color: green
}
</style>