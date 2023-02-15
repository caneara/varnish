<template>
    <div v-if="display"
         class="varnish-alert varnish-font relative rounded-md"
         :class="[types[type].background, title ? 'py-6' : 'py-5', title ? '' : types[type].border]">

        <!-- Content -->
        <div v-if="title"
             class="varnish-header flex items-center text-gray-600 leading-normal px-6 mb-4">

            <!-- Icon -->
            <i :class="types[type].icon"
               class="varnish-icon fas text-[18px] relative top-[0.5px] mr-3">
            </i>

            <!-- Title -->
            <h6 :class="types[type].title"
                class="varnish-title varnish-font-native text-[16px] mb-0">

                <!-- Text -->
                {{ title }}

            </h6>

        </div>

        <!-- Content -->
        <div class="varnish-content text-left leading-normal -mb-[2px]"
             :class="[types[type].content, title ? 'px-6' : 'flex items-center px-5']">

            <!-- Icon -->
            <i v-if="! title"
               :class="types[type].icon"
               class="varnish-icon fas text-[21px] relative mr-4">
            </i>

            <!-- Slot -->
            <div class="varnish-slot">
                <slot></slot>
            </div>

        </div>

        <!-- Dismiss -->
        <i v-if="dismiss"
           @click="hide()"
           title="Hide this notice"
           class="varnish-dismiss fas fa-times text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-400 absolute top-3 right-3 transition duration-300 cursor-pointer">
        </i>

    </div>
</template>

<script>
    export default
    {
        /**
         * Define the data model.
         *
         */
        data() { return {
            display : true,

            types : {
                danger : {
                    background : 'bg-red-500/[.12] dark:bg-red-700/[.40]',
                    border     : 'border border-red-600/[.40] dark:border-none',
                    content    : 'text-gray-600/[.90] dark:text-gray-400',
                    icon       : 'fa-circle-exclamation text-red-600/80 dark:text-red-500',
                    title      : 'text-gray-800 dark:text-gray-300',
                },
                info : {
                    background : 'bg-sky-500/10 dark:bg-sky-700/[.40]',
                    border     : 'border border-sky-600/[.40] dark:border-none',
                    content    : 'text-gray-600/[.90] dark:text-gray-400',
                    icon       : 'fa-circle-info text-sky-600/80 dark:text-sky-500',
                    title      : 'text-gray-800 dark:text-gray-300',
                },
                question : {
                    background : 'bg-purple-500/[.12] dark:bg-purple-700/[.40]',
                    border     : 'border border-purple-700/[.30] dark:border-none',
                    content    : 'text-gray-600/[.90] dark:text-gray-400',
                    icon       : 'fa-check-circle text-purple-600/80 dark:text-purple-500',
                    title      : 'text-gray-800 dark:text-gray-300',
                },
                success : {
                    background : 'bg-emerald-500/[.12] dark:bg-emerald-700/[.40]',
                    border     : 'border border-emerald-600/[.40] dark:border-none',
                    content    : 'text-gray-600/[.90] dark:text-gray-400',
                    icon       : 'fa-check-circle text-emerald-600/80 dark:text-emerald-500',
                    title      : 'text-gray-800 dark:text-gray-300',
                },
                warning : {
                    background : 'bg-orange-100/60 dark:bg-orange-700/[.40]',
                    border     : 'border border-yellow-600/[.40] dark:border-none',
                    content    : 'text-gray-600/[.90] dark:text-gray-400',
                    icon       : 'fa-triangle-exclamation text-yellow-600/80 dark:text-yellow-500',
                    title      : 'text-gray-800 dark:text-gray-300',
                },
            },
        }},

        /**
         * Define the public properties.
         *
         */
        props : {
            'dismiss' : { type : Boolean, default : false },
            'id'      : { type : String,  default : '' },
            'title'   : { type : String,  default : '' },
            'type'    : { type : String,  default : 'info' },
        },

        /**
         * Execute actions when the component is instantiated.
         *
         */
        created()
        {
            this.display = ! localStorage.getItem(`varnish_hide_alert_${this.id}`);
        },

        /**
         * Define the supporting methods.
         *
         */
        methods :
        {
            /**
             * Dismiss the notice from appearing again.
             *
             */
            hide()
            {
                if (! this.dismiss) return;

                this.display = false;

                localStorage.setItem(`varnish_hide_alert_${this.id}`, 1);
            }
        },
    }
</script>