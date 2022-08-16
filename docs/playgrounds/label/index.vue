<template>
    <div class="demo py-[40px] px-[64px]">

        <!-- Title -->
        <h1 class="text-[32px] font-semibold leading-snug -tracking-[.7px] mb-12">
            Label - Playground
        </h1>

        <!-- Heading -->
        <h2 class="font-semibold mt-10 mb-6">
            No Icon, Required
        </h2>

        <!-- No Icon, Required -->
        <div class="relative min-h-[50px]">
            <v-label icon=""
                     value="First name">
            </v-label>
        </div>

        <!-- Heading -->
        <h2 class="font-semibold mt-10 mb-6">
            Icon, Required
        </h2>

        <!-- Icon, Required -->
        <div class="relative min-h-[50px]">
            <v-label value="First name"
                     icon="fas fa-user">
            </v-label>
        </div>

        <!-- Heading -->
        <h2 class="font-semibold mt-10 mb-6">
            No Icon, Optional
        </h2>

        <!-- No Icon, Optional -->
        <div class="relative min-h-[50px]">
            <v-label icon=""
                     :optional="true"
                     value="First name">
            </v-label>
        </div>

        <!-- Heading -->
        <h2 class="font-semibold mt-10 mb-6">
            Icon, Optional
        </h2>

        <!-- Icon, Optional -->
        <div class="relative min-h-[50px]">
            <v-label :optional="true"
                     value="First name"
                     icon="fas fa-user">
            </v-label>
        </div>

        <!-- Heading -->
        <h2 class="font-semibold mt-10 mb-6">
            Icon, Optional, Custom Text
        </h2>

        <!-- Icon, Optional, Custom Text -->
        <div class="relative min-h-[50px]">
            <v-label :optional="true"
                     value="First name"
                     icon="fas fa-user"
                     optionalText="Not Required">
            </v-label>
        </div>

        <!-- Heading -->
        <h2 class="font-semibold mt-10 mb-6">
            Icon, Optional, Focused
        </h2>

        <!-- Icon, Optional, Focused -->
        <div class="relative min-h-[50px]">
            <v-label :focus="true"
                     :optional="true"
                     value="First name"
                     icon="fas fa-user">
            </v-label>
        </div>

        <!-- Heading -->
        <h2 class="font-semibold mt-10 mb-6">
            Icon, Optional, Filled
        </h2>

        <!-- Icon, Optional, Filled -->
        <div class="relative min-h-[50px]">
            <v-label :filled="true"
                     :optional="true"
                     value="First name"
                     icon="fas fa-user">
            </v-label>
        </div>

    </div>
</template>

<script>
    import LabelComponent from '../../../src/components/label.vue';

    export default
    {
        components : {
            'v-label' : LabelComponent,
        },
    }
</script>