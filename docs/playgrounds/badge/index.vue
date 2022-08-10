<template>
    <div class="demo py-[40px] px-[64px]">

        <!-- Title -->
        <h1 class="text-[32px] font-semibold -tracking-[.7px] mb-12">
            Badge - Playground
        </h1>

        <!-- Header -->
        <h2 class="font-semibold mt-10 mb-6">
            Opaque
        </h2>

        <!-- Badges -->
        <div class="flex flex-col gap-y-2 ml-4">
            <v-badge tooltip="Hello there!" value="Blue"></v-badge>
            <v-badge color="green" value="Green"></v-badge>
            <v-badge color="red" :uppercase="false" value="Red"></v-badge>
            <v-badge color="yellow" value="Yellow"></v-badge>
            <v-badge color="purple" value="Purple"></v-badge>
            <v-badge color="gray" value="Gray"></v-badge>
        </div>

        <!-- Header -->
        <h2 class="font-semibold mt-10 mb-6">
            Transparent
        </h2>

        <!-- Badges -->
        <div class="flex flex-col gap-y-2 ml-4">
            <v-badge mode="transparent" color="blue" value="Blue"></v-badge>
            <v-badge mode="transparent" color="green" value="Green"></v-badge>
            <v-badge mode="transparent" color="red" :uppercase="false" value="Red"></v-badge>
            <v-badge mode="transparent" color="yellow" value="Yellow"></v-badge>
            <v-badge mode="transparent" color="purple" value="Purple"></v-badge>
            <v-badge mode="transparent" color="gray" value="Gray"></v-badge>
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