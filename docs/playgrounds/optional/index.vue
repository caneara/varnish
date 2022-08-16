<template>
    <div class="demo py-[40px] px-[64px]">

        <!-- Title -->
        <h1 class="text-[32px] font-semibold leading-snug -tracking-[.7px] mb-12">
            Optional - Playground
        </h1>

        <!-- Optional -->
        <v-optional :value="value"></v-optional>

    </div>
</template>

<script>
    import OptionalComponent from '../../../src/components/optional.vue';

    export default
    {
        components : {
            'v-optional' : OptionalComponent,
        },

        data() {
            return {
                value : 'Field is not required',
            }
        },
    }
</script>