<template>
    <label v-if="! automated()"
           :class="filled ? small : (focus ? small : large)"
           style="width: calc(100% - 19px); transition: all 0.1s ease, background-color 0s"
           class="varnish-label varnish-font bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 flex items-center cursor-text select-none pointer-events-none absolute top-0 left-1">

        <!-- Icon -->
        <i :class="icon"
           v-if="! filled && ! focus && icon"
           class="varnish-icon fa-fw text-14px text-gray-500/[.40] dark:text-gray-500/[.50] mr-3">
        </i>

        <!-- Value -->
        <span class="varnish-value font-[450]">
            {{ value }}
        </span>

        <!-- Optional -->
        <v-optional :value="optionalText"
                    class="relative top-[1px] ml-3"
                    v-if="optional && ! filled && ! focus">
        </v-optional>

    </label>
</template>

<script>
    import Utilities from '../mixins/Utilities';
    import OptionalComponent from './optional.vue';

    export default
    {
        /**
         * Define the mixins.
         *
         */
        mixins : [
            Utilities,
        ],

        /**
         * Define the components.
         *
         */
        components : {
            'v-optional' : OptionalComponent,
        },

        /**
         * Define the data model.
         *
         */
        data() { return {
            large : 'text-[16px] pl-3 pr-4 pt-[18px]',
            small : 'text-[12px] pl-2 pr-3 pt-[10px] pb-[5px]',
        }},

        /**
         * Define the public properties.
         *
         */
        props : {
            'filled'       : { type : Boolean, default : false },
            'focus'        : { type : Boolean, default : false },
            'icon'         : { type : String,  default : 'fas fa-terminal' },
            'optional'     : { type : Boolean, default : false },
            'optionalText' : { type : String,  default : 'Optional' },
            'value'        : { type : String,  default : 'Label' },
        },
    }
</script>