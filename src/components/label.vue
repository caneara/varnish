<template>
    <label v-if="! automated()"
           :class="filled ? small : (focus ? small : large)"
           style="width: calc(100% - 19px); transition: all 0.15s ease, background-color 0s"
           class="varnish-label varnish-font bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 flex items-center cursor-text select-none pointer-events-none absolute top-[1px] left-1">

        <!-- Icon -->
        <i :class="[icon, {
            'w-[31px] min-w-[31px]': ! filled && ! focus && icon,
            'w-0 opacity-0 -translate-x-2 -translate-y-1': !(! filled && ! focus && icon),
        }]"
           class="varnish-icon max-w-[31px] text-[14px] text-gray-500/[.40] dark:text-gray-500/[.50] text-center relative top-[.5px] mr-[6px] transition-all duration-150">
        </i>

        <!-- Value -->
        <span class="varnish-value font-[450] -tracking-[.2px]">
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
            large : 'text-[15px] pl-[6px] pr-4 pt-[18px]',
            small : 'text-[12px] pl-2 pr-3 pt-[8px] pb-[5px]',
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