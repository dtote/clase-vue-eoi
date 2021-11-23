<template>
    <div>
        <VueClockDigits :color="blue" :theme="rainbow" :size="30"></VueClockDigits>
    </div>
</template>

<script>
import VueClockDigits from "./VueClockDigits.vue"

export default {
    name: "VueClock",
    components: {
        VueClockDigits
    },
}
</script>