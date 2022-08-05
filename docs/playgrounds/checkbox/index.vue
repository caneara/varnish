<template>
    <div class="demo py-[40px] px-[64px]">

        <!-- Title -->
        <h1 class="text-[32px] font-semibold tracking-[-0.7px] mb-12">
            CheckBox - Playground
        </h1>

        <!-- CheckBoxes -->
        <div class="flex flex-col gap-y-6 max-w-[150px]">
            <v-checkbox label="On" v-model="first"></v-checkbox>
            <v-checkbox label="Off" v-model="second"></v-checkbox>
        </div>

    </div>
</template>

<script>
    import CheckBoxComponent from '../../../src/components/checkbox.vue';

    export default
    {
        components : {
            'v-checkbox' : CheckBoxComponent,
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