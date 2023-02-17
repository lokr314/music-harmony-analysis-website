<script>
    import { ref, onMounted, onUnmounted } from 'vue'

    export default {
        setup() {
            const Showable = ref(null)

            const show = () => {
                if (Showable.value.style.height == '0px') {
                    Showable.value.style.height = '176px'
                } else {
                    Showable.value.style.height = '0px'
                }
            }

            onMounted(() => {
                Showable.value.style.height = '0px'
            })

            onUnmounted(() => {
                Showable.value.style.height = '176px'
            })

            return {
                Showable,
                show
            }
        }
    }
</script>

<template>
    <div class="flex bg-amber-100 justify-center items-start">
        <button @click="show()" class="bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2 px-4 rounded-lg">Hey</button>
    </div>
    <div ref="Showable" class="h-40 bg-gradient-to-b from-amber-100 to-rose-200">
        
    </div>
</template>