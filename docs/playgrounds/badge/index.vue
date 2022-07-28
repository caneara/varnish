<template>
    <div class="demo py-[40px] px-[64px]">

        <!-- Title -->
        <h1 class="text-[32px] font-semibold tracking-[-0.7px] mb-12">
            Badge - Playground
        </h1>

        <!-- Header -->
        <h2 class="font-semibold mt-10 mb-6">
            Opaque
        </h2>

        <!-- Badges -->
        <div class="flex flex-col gap-y-2 ml-4">
            <v-badge tooltip="Hello there!">Blue</v-badge>
            <v-badge color="green">Green</v-badge>
            <v-badge color="red" :uppercase="false">Red</v-badge>
            <v-badge color="yellow">Yellow</v-badge>
            <v-badge color="purple">Purple</v-badge>
            <v-badge color="gray">Gray</v-badge>
            <v-badge scheme="bg-teal-500/[.15] dark:bg-teal-700 text-teal-700 dark:text-teal-200">Teal</v-badge>
        </div>

        <!-- Header -->
        <h2 class="font-semibold mt-10 mb-6">
            Transparent
        </h2>

        <!-- Badges -->
        <div class="flex flex-col gap-y-2 ml-4">
            <v-badge mode="transparent" color="blue">Blue</v-badge>
            <v-badge mode="transparent" color="green">Green</v-badge>
            <v-badge mode="transparent" color="red" :uppercase="false">Red</v-badge>
            <v-badge mode="transparent" color="yellow">Yellow</v-badge>
            <v-badge mode="transparent" color="purple">Purple</v-badge>
            <v-badge mode="transparent" color="gray">Gray</v-badge>
            <v-badge scheme="text-teal-700 dark:text-teal-400">Teal</v-badge>
        </div>

        <!-- No Content -->
        <v-badge color="gray"></v-badge>

    </div>
</template>

<script>
    import BadgeComponent from '../../../src/components/badge.vue';

    export default
    {
        components : {
            'v-badge' : BadgeComponent,
        },
    }
</script>