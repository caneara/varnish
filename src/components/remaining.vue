<template>
    <div class="varnish-remaining varnish-font flex items-center justify-center rounded-full relative left-[2px]">

        <!-- Ring -->
        <svg class="varnish-ring w-[30px] h-[30px]">

            <!-- Track -->
            <circle r="12"
                    cx="15"
                    cy="15"
                    stroke-width="2"
                    fill="transparent"
                    stroke="currentColor"
                    class="varnish-track text-gray-300 dark:text-gray-600">
            </circle>

            <!-- Indicator -->
            <circle r="12"
                    cx="15"
                    cy="15"
                    stroke-width="2"
                    fill="transparent"
                    stroke="currentColor"
                    class="varnish-indicator"
                    transform="rotate(-90 15 15)"
                    :stroke-dasharray="(12 * 2) * Math.PI"
                    :stroke-dashoffset="((100 - percentage) / 100) * ((12 * 2) * Math.PI)"
                    :class="percentage <= 75 ? colors.green : (percentage <= 90 ? colors.yellow : colors.red)">
            </circle>

        </svg>

        <!-- Figure -->
        <span class="varnish-figure font-semibold text-[12px] absolute"
              :class="percentage <= 75 ? colors.green : (percentage <= 90 ? colors.yellow : colors.red)">

            <!-- Text -->
            {{ figure }}

        </span>

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
            colors : {
                green  : 'varnish-green text-green-600 dark:text-green-500',
                yellow : 'varnish-yellow text-yellow-600 dark:text-yellow-500',
                red    : 'varnish-red text-red-600 dark:text-red-500',
            }
        }},

        /**
         * Define the public properties.
         *
         */
        props : {
            'maximum' : { type : Number, default : 100 },
            'value'   : { type : Number, default : 0 },
        },

        /**
         * Define the computed properties.
         *
         */
        computed :
        {
            /**
             * Determine the appropriate label to display as an indicator.
             *
             */
            figure()
            {
                if ((this.maximum - this.value) >= 0) {
                    return (this.maximum - this.value) > 99 ? '' : this.maximum - this.value;
                }

                return `${(this.maximum - this.value) <= -10 ? '!' : this.maximum - this.value}`;
            },

            /**
             * Calculate the current percentage to use for the ring.
             *
             */
            percentage()
            {
                let value = parseInt((this.value / this.maximum) * 100);

                return value >= 100 ? 100 : value;
            },
        },
    }
</script>