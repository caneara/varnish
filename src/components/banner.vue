<template>
    <div v-if="display"
         class="varnish-banner varnish-font">

        <!-- Container -->
        <div :class="[colors[color], `varnish-${color}`]"
             class="varnish-container bg-gradient-to-br flex flex-col rounded-lg relative overflow-hidden p-8">

            <!-- Icon -->
            <i :class="icon"
               class="varnish-icon text-white text-[185px] hidden md:inline opacity-[.07] absolute -bottom-2 -right-[56px] -rotate-[32deg]">
            </i>

            <!-- Title -->
            <span class="varnish-title font-semibold text-[22px] -tracking-[.4px] text-white mb-4">
                {{ title }}
            </span>

            <!-- Message -->
            <span class="varnish-message text-[17px] text-gray-200 leading-normal -tracking-[.2px] break-words md:pr-[130px]">
                {{ message }}
            </span>

            <!-- Dismiss -->
            <i v-if="dismiss"
               @click="hide()"
               title="Hide this banner"
               class="varnish-dismiss fas fa-times text-gray-300 hover:text-white absolute top-3 right-3 transition duration-300 cursor-pointer">
            </i>

        </div>

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
            colors : {
                blue   : 'from-sky-600 to-indigo-800',
                green  : 'from-emerald-600 to-green-800',
                orange : 'from-yellow-600 to-orange-700',
                red    : 'from-rose-500 to-red-700',
            }
        }},

        /**
         * Define the public properties.
         *
         */
        props : {
            'color'   : { type : String,  default : 'blue' },
            'dismiss' : { type : Boolean, default : false },
            'icon'    : { type : String,  default : '' },
            'id'      : { type : String,  default : '' },
            'message' : { type : String,  default : '' },
            'title'   : { type : String,  default : '' },
        },

        /**
         * Execute actions when the component is instantiated.
         *
         */
        created()
        {
            this.display = ! localStorage.getItem(`varnish_hide_banner_${this.id}`);
        },

        /**
         * Define the supporting methods.
         *
         */
        methods :
        {
            /**
             * Dismiss the banner from appearing again.
             *
             */
            hide()
            {
                if (! this.dismiss) return;

                this.display = false;

                localStorage.setItem(`varnish_hide_banner_${this.id}`, 1);
            }
        },
    }
</script>