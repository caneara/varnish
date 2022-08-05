<template>
    <div class="demo py-[40px] px-[64px]">

        <!-- Title -->
        <h1 class="text-[32px] font-semibold tracking-[-0.7px]">
            Error - Playground
        </h1>

        <!-- First Error -->
        <v-error :scrollDelay="1000"
                 :text="first_error"
                 :beforeScroll="beforeScroll()">
        </v-error>

        <!-- Gap -->
        <div class="gap bg-green-700/[.30] min-h-[1500px] p-6">
            This is a gap created to test scrolling to the first error.
            Scroll to the bottom of the page to find the test button.
        </div>

        <!-- Second Error -->
        <v-error :text="second_error"></v-error>

        <!-- Gap -->
        <div class="gap bg-green-700/[.30] min-h-[1500px] p-6">
            This is a gap created to test scrolling to the first error.
            Scroll to the bottom of the page to find the test button.
        </div>

        <!-- Third Error -->
        <v-error :text="third_error"></v-error>

        <!-- Button -->
        <button @click="scrollToFirstError()"
                class="bg-sky-700 text-white px-3 py-1 mt-6 mb-12 rounded-md">

            <!-- Text -->
            Show & scroll to first error

        </button>

    </div>
</template>

<script>
    import ErrorComponent from '../../../src/components/error.vue';

    export default
    {
        components : {
            'v-error' : ErrorComponent,
        },

        data() {
            return {
                first_error  : 'First error',
                second_error : 'Second error',
                third_error  : '',
            }
        },

        methods :
        {
            beforeScroll()
            {
                document.querySelectorAll('.gap').forEach(
                    element => element.classList.add('bg-purple-700/[.30]')
                );
            },

            scrollToFirstError()
            {
                this.first_error  = 'Changed first error';
                this.second_error = 'Changed second error';
                this.third_error  = 'Changed third error';
            },
        },
    }
</script>