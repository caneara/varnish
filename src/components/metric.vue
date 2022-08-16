<template>
    <div :id="id"
         :dusk="id"
         class="varnish-metric varnish-font bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 w-full flex flex-col gap-3 rounded-lg p-6 md:px-8 md:py-7">

        <!-- Label -->
        <span class="varnish-label font-medium text-[14px] text-gray-500/[.75] dark:text-gray-500 uppercase">
            {{ label }}
        </span>

        <!-- Summary -->
        <div class="varnish-summary flex gap-2 items-center">

            <!-- Current -->
            <span class="varnish-current font-semibold text-[37px] text-gray-800 dark:text-gray-300 -tracking-[1px] mr-6 first-letter:pr-0.5 first-letter:opacity-50">
                {{ formatted }}
            </span>

            <!-- Performance -->
            <div class="varnish-performance flex flex-col">

                <!-- Direction -->
                <div
                    :class="trends[direction].color"
                    class="varnish-direction flex gap-2 items-center font-semibold px-2.5 py-1 rounded-full">

                    <!-- Icon -->
                    <i class="varnish-icon fas text-[13px]"
                       :class="trends[direction].icon">
                    </i>

                    <!-- Percentage -->
                    <span class="varnish-percentage text-sm whitespace-nowrap">
                        {{ Math.abs(percentage) > 999 ? '999' : Math.abs(percentage) }}%
                    </span>

                </div>

                <!-- Period -->
                <span class="varnish-period font-medium text-[12px] text-gray-400 dark:text-gray-500 -tracking-[.2px] pt-1 pl-1">
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
                down : { color : 'bg-rose-50 text-rose-600 dark:bg-rose-500 dark:text-rose-100', icon : 'fa-arrow-trend-down' },
                same : { color : 'bg-sky-50 text-sky-500 dark:bg-sky-500 dark:text-sky-100',         icon : 'fa-arrows-rotate' },
                up   : { color : 'bg-emerald-50 text-emerald-500 dark:bg-emerald-500 dark:text-emerald-100', icon : 'fa-arrow-trend-up' },
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
            'locale'   : { type : String, default : 'en-US' },
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

                return new Intl.NumberFormat(this.locale, options).format(this.current);
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