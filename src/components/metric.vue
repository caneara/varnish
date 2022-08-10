<template>
    <div :id="id"
         :dusk="id"
         class="varnish-metric varnish-font bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 w-full flex flex-col rounded-lg p-6 md:p-8">

        <!-- Label -->
        <span class="varnish-label font-medium text-[13px] text-gray-500/[.75] dark:text-gray-500 uppercase mb-[14px]">
            {{ label }}
        </span>

        <!-- Summary -->
        <div class="varnish-summary flex">

            <!-- Current -->
            <span class="varnish-current font-[550] text-[35px] text-gray-800 dark:text-gray-300 -tracking-[1px] mr-6">
                {{ formatted }}
            </span>

            <!-- Performance -->
            <div :class="trends[direction].color"
                 class="varnish-performance flex flex-col">

                <!-- Direction -->
                <div class="varnish-direction flex items-center font-semibold mb-[5px]">

                    <!-- Icon -->
                    <i class="varnish-icon fas text-[13px] mr-1"
                       :class="trends[direction].icon">
                    </i>

                    <!-- Percentage -->
                    <span class="varnish-percentage text-[15px] whitespace-nowrap">
                        {{ Math.abs(percentage) > 999 ? '999' : Math.abs(percentage) }}%
                    </span>

                </div>

                <!-- Period -->
                <span class="varnish-period text-[12.5px] text-gray-600 dark:text-gray-500 -tracking-[.2px]">
                    vs. {{ period }}
                </span>

            </div>

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
            trends : {
                down : { color : 'text-rose-700/[.90] dark:text-rose-400', icon : 'fa-arrow-down' },
                same : { color : 'text-sky-600 dark:text-sky-400',         icon : 'fa-arrows-rotate' },
                up   : { color : 'text-emerald-600 dark:text-emerald-400', icon : 'fa-arrow-up' },
            }
        }},

        /**
         * Define the public properties.
         *
         */
        props : {
            'id'       : { type : String, default : '' },
            'currency' : { type : String, default : 'USD' },
            'current'  : { type : Number, default : 0 },
            'label'    : { type : String, default : 'Label' },
            'period'   : { type : String, default : '' },
            'previous' : { type : Number, default : 0 },
            'type'     : { type : String, default : 'integer' },
        },

        /**
         * Define the computed properties.
         *
         */
        computed :
        {
            /**
             * Determine if the current figure is up, down or the same as the previous period.
             *
             */
            direction()
            {
                return this.percentage === 0 ? 'same' : (this.percentage > 0 ? 'up' : 'down');
            },

            /**
             * Format the current figure accordingly.
             *
             */
            formatted()
            {
                let options = {
                    compactDisplay : 'short',
                    notation       : 'compact',
                };

                if (this.type === 'financial') {
                    options.currency = this.currency;
                    options.style    = 'currency';
                }

                return new Intl.NumberFormat('en-US', options).format(this.current);
            },

            /**
             * Calculate the difference between the current and previous values.
             *
             */
            percentage()
            {
                return ((this.current - this.previous) / this.previous) * 100;
            },
        },
    }
</script>