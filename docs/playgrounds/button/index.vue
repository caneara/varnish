<template>
    <div class="demo py-[40px] px-[64px]">

        <!-- Title -->
        <h1 class="text-[32px] font-semibold leading-snug -tracking-[.7px] mb-12">
            Button - Playground
        </h1>

        <!-- Header -->
        <h2 class="font-semibold mt-10 mb-6">
            Opaque
        </h2>

        <!-- Badges -->
        <div class="flex flex-col gap-y-2 max-w-[200px] ml-4">
            <v-button color="blue" label="Button"></v-button>
            <v-button color="green" label="Button" icon="fas fa-home"></v-button>
            <v-button color="red" label="Button" icon="fas fa-cog"></v-button>
            <v-button color="orange" label="Button"></v-button>
            <v-button color="purple" label="Button" :processing="true"></v-button>
            <v-button color="gray" label="Disabled" :disabled="true"></v-button>
        </div>

        <!-- Header -->
        <h2 class="font-semibold mt-10 mb-6">
            Outline
        </h2>

        <!-- Badges -->
        <div class="flex flex-col gap-y-2 max-w-[200px] ml-4">
            <v-button mode="outline" color="blue" label="Button"></v-button>
            <v-button mode="outline" color="green" label="Button" icon="fas fa-home"></v-button>
            <v-button mode="outline" color="red" label="Button" icon="fas fa-cog"></v-button>
            <v-button mode="outline" color="orange" label="Button"></v-button>
            <v-button mode="outline" color="purple" label="Button" :processing="true"></v-button>
            <v-button mode="outline" color="gray" label="Disabled" :disabled="true"></v-button>
        </div>

    </div>
</template>

<script>
    import ButtonComponent from '../../../src/components/button.vue';

    export default
    {
        components : {
            'v-button' : ButtonComponent,
        },
    }
</script>