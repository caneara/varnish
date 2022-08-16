<template>
    <div class="demo py-[40px] px-[64px]">

        <!-- Title -->
        <h1 class="text-[32px] font-semibold leading-snug -tracking-[.7px] mb-12">
            Password - Playground
        </h1>

        <!-- Textboxes -->
        <div class="flex flex-col gap-y-4 max-w-[300px]">

            <!-- Heading -->
            <h2 class="font-semibold mt-6">
                Password (plain / no generation)
            </h2>

            <!-- Password (plain / no generation) -->
            <v-password :generate="false"></v-password>

            <!-- Heading -->
            <h2 class="font-semibold mt-6">
                Password (with icon)
            </h2>

            <!-- Password (with icon) -->
            <v-password icon="fas fa-key"></v-password>

            <!-- Heading -->
            <h2 class="font-semibold mt-6">
                Password (with custom label)
            </h2>

            <!-- Password (with custom label) -->
            <v-password label="Password"
                        icon="fas fa-key">
            </v-password>

            <!-- Heading -->
            <h2 class="font-semibold mt-6">
                Populated Password (with custom label)
            </h2>

            <!-- Populated Password (with custom label) -->
            <v-password label="Password"
                        icon="fas fa-key"
                        v-model="password">
            </v-password>

        </div>

    </div>
</template>

<script>
    import PasswordComponent from '../../../src/components/password.vue';

    export default
    {
        components : {
            'v-password' : PasswordComponent,
        },

        data() {
            return {
                password : 'Password1',
            }
        },
    }
</script>