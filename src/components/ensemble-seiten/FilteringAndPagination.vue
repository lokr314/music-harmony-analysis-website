<script setup lang="ts">
    import { onMounted } from 'vue';
    import { reactive, ref, computed } from 'vue';

    var urlparams = reactive(new URLSearchParams());
    var param = ref("h");
    console.log(param);
    var x = ref(0);

    const param2 = computed(() => {
        //console.log("param2");
        return urlparams.get("param")
    });

    onMounted(() => {
        urlparams = new URLSearchParams(window.location.search);

        console.log(urlparams);

        param = ref(urlparams.get("param"));
        console.log(param);
        console.log(param.value);

    });
</script>

<template>
    <div>
        <p>URL-Parameter:</p>
        <p>{{param}}</p>
        <p>{{x}}</p>
        <p>{{param2}}</p>
    </div>
</template>