<template>
    <div class="demo py-[40px] px-[64px]">

        <!-- Title -->
        <h1 class="text-[32px] font-semibold leading-snug -tracking-[.7px] mb-12">
            Switch - Playground
        </h1>

        <!-- Switches -->
        <div class="flex flex-col gap-y-6 max-w-[150px]">
            <v-switch label="On" v-model="first"></v-switch>
            <v-switch label="Off" v-model="second"></v-switch>
        </div>

    </div>
</template>

<script>
    import SwitchComponent from '../../../src/components/switch.vue';

    export default
    {
        components : {
            'v-switch' : SwitchComponent,
        },

        /**
         * Define the data model.
         *
         */
        data() { return {
            first  : true,
            second : false,
        }},
    }
</script>