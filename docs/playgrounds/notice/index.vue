<template>
    <div class="demo py-[40px] px-[64px]">

        <!-- Title -->
        <h1 class="text-[32px] font-semibold tracking-[-0.7px] mb-12">
            Notice - Playground
        </h1>

        <!-- Header -->
        <h2 class="font-semibold mt-10 mb-6">
            Opaque (Tabs)
        </h2>

        <!-- Notices -->
        <div class="flex flex-col gap-y-5 ml-4">
            <v-notice type="info" value="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid rerum aliquam ullam impedit a cum debitis vitae ipsum aperiam pariatur voluptatibus, libero provident accusantium odit saepe ad totam?"></v-notice>
            <v-notice type="success" value="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid rerum aliquam ullam impedit a cum debitis vitae ipsum aperiam pariatur voluptatibus, libero provident accusantium odit saepe ad totam?"></v-notice>
            <v-notice type="warning" value="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid rerum aliquam ullam impedit a cum debitis vitae ipsum aperiam pariatur voluptatibus, libero provident accusantium odit saepe ad totam?"></v-notice>
            <v-notice type="danger" :dismiss="true" id="test" value="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid rerum aliquam ullam impedit a cum debitis vitae ipsum aperiam pariatur voluptatibus, libero provident accusantium odit saepe ad totam?"></v-notice>
        </div>

        <!-- Header -->
        <h2 class="font-semibold mt-10 mb-6">
            Transparent (Tabs)
        </h2>

        <!-- Notices -->
        <div class="flex flex-col gap-y-4 ml-4">
            <v-notice mode="transparent" type="info" value="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid rerum aliquam ullam impedit a cum debitis vitae ipsum aperiam pariatur voluptatibus, libero provident accusantium odit saepe ad totam?"></v-notice>
            <v-notice mode="transparent" type="success" value="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid rerum aliquam ullam impedit a cum debitis vitae ipsum aperiam pariatur voluptatibus, libero provident accusantium odit saepe ad totam?"></v-notice>
            <v-notice mode="transparent" type="warning" value="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid rerum aliquam ullam impedit a cum debitis vitae ipsum aperiam pariatur voluptatibus, libero provident accusantium odit saepe ad totam?"></v-notice>
            <v-notice mode="transparent" type="danger" value="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid rerum aliquam ullam impedit a cum debitis vitae ipsum aperiam pariatur voluptatibus, libero provident accusantium odit saepe ad totam?"></v-notice>
        </div>

        <!-- Header -->
        <h2 class="font-semibold mt-10 mb-6">
            Opaque (Icons)
        </h2>

        <!-- Notices -->
        <div class="flex flex-col gap-y-5 ml-4">
            <v-notice format="icon" type="info" value="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid rerum aliquam ullam impedit a cum debitis vitae ipsum aperiam pariatur voluptatibus, libero provident accusantium odit saepe ad totam?"></v-notice>
            <v-notice format="icon" type="success" value="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid rerum aliquam ullam impedit a cum debitis vitae ipsum aperiam pariatur voluptatibus, libero provident accusantium odit saepe ad totam?"></v-notice>
            <v-notice format="icon" type="warning" value="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid rerum aliquam ullam impedit a cum debitis vitae ipsum aperiam pariatur voluptatibus, libero provident accusantium odit saepe ad totam?"></v-notice>
            <v-notice format="icon" type="danger" :dismiss="true" value="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid rerum aliquam ullam impedit a cum debitis vitae ipsum aperiam pariatur voluptatibus, libero provident accusantium odit saepe ad totam?"></v-notice>
        </div>

        <!-- Header -->
        <h2 class="font-semibold mt-10 mb-6">
            Transparent (Icons)
        </h2>

        <!-- Notices -->
        <div class="flex flex-col gap-y-4 ml-4">
            <v-notice mode="transparent" format="icon" type="info" value="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid rerum aliquam ullam impedit a cum debitis vitae ipsum aperiam pariatur voluptatibus, libero provident accusantium odit saepe ad totam?"></v-notice>
            <v-notice mode="transparent" format="icon" type="success" value="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid rerum aliquam ullam impedit a cum debitis vitae ipsum aperiam pariatur voluptatibus, libero provident accusantium odit saepe ad totam?"></v-notice>
            <v-notice mode="transparent" format="icon" type="warning" value="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid rerum aliquam ullam impedit a cum debitis vitae ipsum aperiam pariatur voluptatibus, libero provident accusantium odit saepe ad totam?"></v-notice>
            <v-notice mode="transparent" format="icon" type="danger" :dismiss="true" value="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid rerum aliquam ullam impedit a cum debitis vitae ipsum aperiam pariatur voluptatibus, libero provident accusantium odit saepe ad totam?"></v-notice>
        </div>

    </div>
</template>

<script>
    import NoticeComponent from '../../../src/components/notice.vue';

    export default
    {
        components : {
            'v-notice' : NoticeComponent,
        },
    }
</script>