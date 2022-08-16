<template>
    <div class="demo py-[40px] px-[64px]">

        <!-- Title -->
        <h1 class="text-[32px] font-semibold leading-snug -tracking-[.7px] mb-12">
            Banner - Playground
        </h1>

        <!-- Banners -->
        <div class="flex flex-col gap-y-5 ml-4">
            <v-banner color="blue" icon="fas fa-cog" title="New features coming..." message="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid rerum aliquam ullam impedit a cum debitis vitae ipsum aperiam pariatur voluptatibus, libero?"></v-banner>
            <v-banner color="green" icon="fas fa-cog" title="New features coming..." message="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid rerum aliquam ullam impedit a cum debitis vitae ipsum aperiam pariatur voluptatibus, libero?"></v-banner>
            <v-banner color="orange" icon="fas fa-home" title="New features coming..." message="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid rerum aliquam ullam impedit a cum debitis vitae ipsum aperiam pariatur voluptatibus, libero?"></v-banner>
            <v-banner color="red" icon="fas fa-cog" :dismiss="true" id="test" title="New features coming..." message="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid rerum aliquam ullam impedit a cum debitis vitae ipsum aperiam pariatur voluptatibus, libero?"></v-banner>
        </div>

    </div>
</template>

<script>
    import BannerComponent from '../../../src/components/banner.vue';

    export default
    {
        components : {
            'v-banner' : BannerComponent,
        },
    }
</script>