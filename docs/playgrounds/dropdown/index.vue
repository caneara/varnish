<template>
    <div class="demo py-[40px] px-[64px]">

        <!-- Title -->
        <h1 class="text-[32px] font-semibold -tracking-[.7px] mb-12">
            DropDown - Playground
        </h1>

        <!-- Textboxes -->
        <div class="flex flex-col gap-y-4 max-w-[300px]">

            <!-- Heading -->
            <h2 class="font-semibold mt-6">
                DropDown (plain / no generation)
            </h2>

            <!-- DropDown (plain / no generation) -->
            <v-dropdown :generate="false"></v-dropdown>

            <!-- Heading -->
            <h2 class="font-semibold mt-6">
                DropDown (with icon)
            </h2>

            <!-- DropDown (with icon) -->
            <v-dropdown icon="fas fa-key"></v-dropdown>

            <!-- Heading -->
            <h2 class="font-semibold mt-6">
                DropDown (with custom label)
            </h2>

            <!-- DropDown (with custom label) -->
            <v-dropdown label="DropDown"
                        icon="fas fa-key">
            </v-dropdown>

            <!-- Heading -->
            <h2 class="font-semibold mt-6">
                Populated DropDown (with custom label)
            </h2>

            <!-- Populated DropDown (with custom label) -->
            <v-dropdown label="DropDown"
                        icon="fas fa-key"
                        v-model="dropdown">
            </v-dropdown>

        </div>

    </div>
</template>

<script>
    import DropDownComponent from '../../../src/components/dropdown.vue';

    export default
    {
        components : {
            'v-dropdown' : DropDownComponent,
        },

        data() {
            return {
                dropdown : 'DropDown1',
            }
        },
    }
</script>