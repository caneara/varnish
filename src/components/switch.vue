<template>
    <div class="varnish-switch varnish-font">

        <!-- Container -->
        <div class="varnish-container flex justify-between items-center">

            <!-- Hidden -->
            <input :id="name"
                   :name="name"
                   type="hidden"
                   :value="active ? 1 : 0">

            <!-- Label -->
            <label class="varnish-label font-semibold text-[13px] text-gray-600/[.65] dark:text-gray-500 uppercase relative mr-5">
                {{ label }}
            </label>

            <!-- Button -->
            <button :dusk="name"
                    :id="`toggle-${name}`"
                    @click.prevent="change(active ? 0 : 1)"
                    class="varnish-toggle w-[60px] h-[31px] relative transition-all duration-200 rounded-full cursor-pointer
                           after:h-[25px] after:w-[25px] after:bg-white dark:after:bg-gray-300 after:absolute after:transition-all after:duration-200 after:top-[3px] after:rounded-full"
                    :class="active ? 'varnish-active after:left-[32px] bg-emerald-600/[.80] dark:bg-emerald-600' : 'after:left-[3px] bg-gray-400/[.40] dark:bg-gray-700'">
            </button>

        </div>

        <!-- Error -->
        <v-error :value="fault"></v-error>

    </div>
</template>

<script>
    import ErrorComponent from './error.vue';
    import Foundation from '../mixins/Foundation';

    export default
    {
        /**
         * Define the mixins.
         *
         */
        mixins : [
            Foundation,
        ],

        /**
         * Define the components.
         *
         */
        components : {
            'v-error' : ErrorComponent,
        },

        /**
         * Define the computed properties.
         *
         */
        computed :
        {
            /**
             * Determine if the CheckBox is in an active state.
             *
             */
            active()
            {
                return ['1', 'true', 'yes', 'on', 1, true].includes(this.modelValue);
            },
        },
    }
</script>