<template>
    <label :class="filled ? small : (focus ? small : large)"
           style="width: calc(100% - 19px); transition: all 0.1s ease, background-color 0s"
           class="varnish-label varnish-font text-gray-600 dark:text-gray-400 flex items-center cursor-text select-none pointer-events-none absolute top-0 left-1 pl-2">

        <!-- Icon -->
        <i :class="icon"
           v-if="! filled && ! focus && icon"
           class="icon fa-fw text-14px text-gray-500/[.60] dark:text-gray-400/[.60] mr-2">
        </i>

        <!-- Text -->
        <span class="text">
            {{ text }}
        </span>

        <!-- Optional -->
        <v-optional :text="optionalText"
                    class="relative top-[1px] ml-3"
                    v-if="optional && ! filled && ! focus">
        </v-optional>

    </label>
</template>

<script>
    import OptionalComponent from './optional.vue';

    export default
    {
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
            small : 'text-[12px] pr-3 pt-[10px] pb-[5px]',
            large : 'text-[16px] pr-4 pt-[18px]',
        }},

        /**
         * Define the public properties.
         *
         */
        props : {
            'icon'         : { type : String,  default : 'fas fa-terminal' },
            'text'         : { type : String,  default : 'Label' },
            'focus'        : { type : Boolean, default : false },
            'filled'       : { type : Boolean, default : false },
            'optional'     : { type : Boolean, default : false },
            'optionalText' : { type : String,  default : 'Optional' },
        },
    }
</script>