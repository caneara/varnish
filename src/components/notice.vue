<template>
    <div v-if="$slots.default"
         class="varnish-notice varnish-font">

        <!-- Container -->
        <div class="notice-container border rounded-md relative"
             :class="[modes[mode][type].border, `notice-${type}`]">

            <!-- Tab -->
            <span v-if="format === 'tab'"
                  :class="modes[mode][type].tab"
                  class="notice-tab absolute top-0 left-3 rounded-b font-[650] text-[9.5px] text-white dark:text-gray-300 uppercase tracking-wider px-2 pt-[3px] pb-1">

                <!-- Text -->
                {{ type }}

            </span>

            <!-- Content -->
            <div class="notice-content rounded-md font-medium flex items-center leading-normal"
                 :class="[modes[mode][type].content, format === 'tab' ? 'px-5 pt-8 pb-4' : 'px-5 py-4']">

                <!-- Icon -->
                <i v-if="format === 'icon'"
                   :class="modes[mode][type].icon"
                   class="notice-icon fas text-[26px] opacity-[0.50] ml-1 mr-[22px]">
                </i>

                <!-- Slot -->
                <slot></slot>

            </div>

        </div>

    </div>
</template>

<script>
    import Utilities from '../mixins/Utilities';

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
         * Define the data model.
         *
         */
        data() { return {
            modes : {
                opaque : {
                    danger : {
                        content : 'bg-red-500/[.05] dark:bg-red-700/[0.30] text-red-700/[.90] dark:text-red-300',
                        border  : 'border-red-600/[.40] dark:border-none',
                        tab     : 'bg-red-600/[.40] dark:bg-red-700/[.30]',
                        icon    : 'fa-circle-exclamation',
                    },
                    info : {
                        content : 'bg-sky-500/[.05] dark:bg-sky-700/[0.30] border-sky-500 text-sky-700/[.90] dark:text-blue-300',
                        border  : 'border-sky-600/[.40] dark:border-none',
                        tab     : 'bg-sky-600/[.40] dark:bg-sky-700/[.30]',
                        icon    : 'fa-circle-info',
                    },
                    success : {
                        content : 'bg-emerald-500/[.05] dark:bg-emerald-700/[0.30] text-emerald-700/[.90] dark:text-emerald-400',
                        border  : 'border-emerald-600/[.40] dark:border-none',
                        tab     : 'bg-emerald-600/[.40] dark:bg-emerald-700/[.30]',
                        icon    : 'fa-check-circle',
                    },
                    warning : {
                        content : 'bg-yellow-500/[.05] dark:bg-yellow-700/[0.30] text-yellow-700 dark:text-orange-300',
                        border  : 'border-yellow-600/[.40] dark:border-none',
                        tab     : 'bg-yellow-600/[.40] dark:bg-yellow-700/[.30]',
                        icon    : 'fa-triangle-exclamation',
                    },
                },
                transparent : {
                    danger : {
                        content : 'bg-transparent text-red-700 dark:text-red-300',
                        border  : 'border-red-500/[.40] dark:border-red-700/[0.60]',
                        tab     : 'bg-red-600/[.40]',
                        icon    : 'fa-circle-exclamation',
                    },
                    info : {
                        content : 'bg-transparent text-sky-700 dark:text-blue-300',
                        border  : 'border-sky-600/[.40] dark:border-sky-700/[0.60]',
                        tab     : 'bg-sky-600/[.40]',
                        icon    : 'fa-circle-info',
                    },
                    success : {
                        content : 'bg-transparent text-emerald-700 dark:text-emerald-400',
                        border  : 'border-emerald-600/[.40] dark:border-emerald-700/[0.60]',
                        tab     : 'bg-emerald-600/[.40]',
                        icon    : 'fa-check-circle',
                    },
                    warning : {
                        content : 'bg-transparent text-yellow-700 dark:text-orange-300',
                        border  : 'border-yellow-600/[.40] dark:border-yellow-700/[0.60]',
                        tab     : 'bg-yellow-600/[.40]',
                        icon    : 'fa-triangle-exclamation',
                    },
                }
            }
        }},

        /**
         * Define the public properties.
         *
         */
        props : {
            'mode'   : { type : String, default : 'opaque' },
            'type'   : { type : String, default : 'info' },
            'format' : { type : String, default : 'tab' },
        },
    }
</script>