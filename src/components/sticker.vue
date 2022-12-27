<template>
    <div class="varnish-sticker varnish-font w-full">

        <!-- Container -->
        <div class="varnish-container bg-white dark:bg-gray-800 border border-dashed border-gray-400/[.80] dark:border-gray-500/[.80] rounded relative">

            <!-- Input -->
            <input :id="name"
                   type="text"
                   :name="name"
                   :value="value"
                   :readonly="true"
                   class="varnish-content w-full bg-inherit text-[17px] text-gray-900 dark:text-gray-400 text-ellipsis overflow-hidden rounded appearance-none px-3 pt-[25px] pb-[6px]" />

            <!-- Label -->
            <v-label :value="label"
                     :focus="false"
                     :filled="! blank(value)">
            </v-label>

        </div>

    </div>
</template>

<script>
    import LabelComponent from './label.vue';
    import Utilities from '../mixins/Utilities';
    import Foundation from '../mixins/Foundation';

    export default
    {
        /**
         * Define the mixins.
         *
         */
        mixins : [
            Utilities,
            Foundation,
        ],

        /**
         * Define the components.
         *
         */
        components : {
            'v-label' : LabelComponent,
        },

        /**
         * Define the public properties.
         *
         */
        props : {
            'value' : { type : String, default : '' },
        },
    }
</script>