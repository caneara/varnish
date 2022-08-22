<template>
    <button :dusk="name"
            :id="`id-${name}`"
            :class="theme.join(' ')"
            @click.prevent="execute()"
            class="varnish-button varnish-font w-full md:w-auto min-h-[35px] min-w-[100px] border border-solid flex items-center justify-center relative rounded transition-all duration-300 cursor-pointer">

        <!-- Label -->
        <div :class="processing ? 'text-transparent hidden' : ''"
             class="varnish-label flex items-center text-[13px] whitespace-nowrap select-none px-5">

            <!-- Icon -->
            <i v-if="icon"
               :class="icon"
               class="varnish-icon mr-3 opacity-50">
            </i>

            <!-- Text -->
            <span class="varnish-text font-bold -tracking-[.3px] uppercase">
                {{ label }}
            </span>

        </div>

        <!-- Animation -->
        <div style="animation: varnish-button-spin 750ms infinite linear"
             :class="[processing ? '' : 'hidden', modes[mode][color].spinner]"
             class="varnish-spinner h-[15px] w-[15px] rounded-full border-2 border-r-transparent border-t-transparent">
        </div>

    </button>
</template>

<script>
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
         * Define the data model.
         *
         */
        data() { return {
            modes : {
                opaque : {
                    blue   : { button : 'border-transparent bg-sky-600 hover:bg-sky-700 text-white',       spinner : 'border-l-white border-b-white' },
                    gray   : { button : 'border-transparent bg-gray-500 hover:bg-gray-600 text-white',     spinner : 'border-l-white border-b-white' },
                    green  : { button : 'border-transparent bg-green-700 hover:bg-green-800 text-white',   spinner : 'border-l-white border-b-white' },
                    orange : { button : 'border-transparent bg-orange-600 hover:bg-orange-700 text-white', spinner : 'border-l-white border-b-white' },
                    purple : { button : 'border-transparent bg-purple-600 hover:bg-purple-700 text-white', spinner : 'border-l-white border-b-white' },
                    red    : { button : 'border-transparent bg-red-700 hover:bg-red-800 text-white',       spinner : 'border-l-white border-b-white' },
                    teal   : { button : 'border-transparent bg-teal-600 hover:bg-teal-700 text-white',     spinner : 'border-l-white border-b-white' },
                },
                outline : {
                    blue   : { button : 'border-sky-600 hover:bg-sky-600 text-sky-600 hover:text-white',          spinner : 'border-l-sky-600 border-b-sky-600' },
                    gray   : { button : 'border-gray-400 hover:bg-gray-400 text-gray-500 hover:text-white',       spinner : 'border-l-gray-500 border-b-gray-500' },
                    green  : { button : 'border-green-700 hover:bg-green-700 text-green-700 hover:text-white',    spinner : 'border-l-green-700 border-b-green-700' },
                    orange : { button : 'border-orange-600 hover:bg-orange-600 text-orange-600 hover:text-white', spinner : 'border-l-orange-600 border-b-orange-600' },
                    purple : { button : 'border-purple-600 hover:bg-purple-600 text-purple-600 hover:text-white', spinner : 'border-l-purple-600 border-b-purple-600' },
                    red    : { button : 'border-red-700 hover:bg-red-700 text-red-700 hover:text-white',          spinner : 'border-l-red-700 border-b-red-700' },
                    teal   : { button : 'border-teal-600 hover:bg-teal-600 text-teal-600 hover:text-white',       spinner : 'border-l-teal-600 border-b-teal-600' },
                }
            }
        }},

        /**
         * Define the events.
         *
         */
        emits : ['click'],

        /**
         * Define the public properties.
         *
         */
        props : {
            'color'      : { type : String,  default : 'blue' },
            'disabled'   : { type : Boolean, default : false },
            'mode'       : { type : String,  default : 'opaque' },
            'processing' : { type : Boolean, default : false },
        },

        /**
         * Define the computed properties.
         *
         */
        computed :
        {
            /**
             * Determine the appropriate styles for the component.
             *
             */
            theme()
            {
                let regex = this.disabled || this.processing ? /hover:(bg|text)-(white|.+-.{3})/gm : '';

                return [
                    this.modes[this.mode][this.color].button.replace(regex, ''),
                    this.disabled   ? 'opacity-[.20] cursor-not-allowed'          : '',
                    this.processing ? 'transition-none cursor-wait opacity-60' : '',
                ];
            }
        },

        /**
         * Define the watch methods.
         *
         */
        watch :
        {
            /**
             * Watch the 'processing' data attribute.
             *
             */
            processing : function(current, previous)
            {
                this.$el.style.width = current ? `${this.$el.offsetWidth}px` : '';
            }
        },

        /**
         * Define the supporting methods.
         *
         */
        methods :
        {
            /**
             * Respond to the button being clicked.
             *
             */
            execute()
            {
                if (! this.disabled && ! this.processing) {
                    this.$emit('click');
                }
            }
        }
    }
</script>

<style>
    @keyframes varnish-button-spin {
        0%   { transform: rotate(0deg) }
        100% { transform: rotate(359deg) }
    }
</style>