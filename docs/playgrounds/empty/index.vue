<template>
    <div class="demo py-[40px] px-[64px]">

        <!-- Title -->
        <h1 class="text-[32px] font-semibold leading-snug -tracking-[.7px] mb-12">
            Empty - Playground
        </h1>

        <!-- Heading -->
        <h2 class="font-semibold mt-10 mb-6">
            Default
        </h2>

        <!-- Default -->
        <div class="relative min-h-[50px]">
            <v-empty :visible="true"></v-empty>
        </div>

        <!-- Heading -->
        <h2 class="font-semibold mt-10 mb-6">
            Custom
        </h2>

        <!-- Custom -->
        <div class="relative min-h-[50px]">
            <v-empty :visible="true"
                     icon="fas fa-face-frown"
                     title="Nothing here, sadly"
                     message="We could not find anything">
            </v-empty>
        </div>

        <!-- Heading -->
        <h2 class="font-semibold mt-10 mb-6">
            Action
        </h2>

        <!-- Action -->
        <div class="relative min-h-[50px]">
            <v-empty :visible="true"
                     actionLabel="Click Me!"
                     :actionCommand="() => sayHello()">
            </v-empty>
        </div>

    </div>
</template>

<script>
    import EmptyComponent from '../../../src/components/empty.vue';

    export default
    {
        components : {
            'v-empty' : EmptyComponent,
        },

        methods :
        {
            sayHello()
            {
                alert('You clicked me!');
            }
        },
    }
</script>