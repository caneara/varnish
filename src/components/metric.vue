<template>
    <div :id="id"
         :dusk="id"
         class="varnish-metric varnish-font bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 w-full flex flex-col rounded-lg p-6 md:p-8">

        <!-- Label -->
        <span class="varnish-label font-medium text-[13px] text-gray-500/[.75] dark:text-gray-500 uppercase mb-4">
            {{ label }}
        </span>

        <!-- Summary -->
        <div class="varnish-summary flex items-center">

            <!-- Current -->
            <span class="varnish-current font-semibold text-[35px] text-gray-700 dark:text-gray-300 mr-6">
                {{ formatted }}
            </span>

            <!-- Performance -->
            <div class="varnish-performance flex flex-col">

                <!-- Direction -->
                <div :class="trends[direction].color"
                     class="varnish-direction flex items-center gap-2 font-semibold rounded-full px-2 py-[3px]">

                    <!-- Icon -->
                    <i :class="trends[direction].icon"
                       class="varnish-icon fas text-[13px]">
                    </i>

                    <!-- Percentage -->
                    <span class="varnish-percentage text-[13px] whitespace-nowrap">
                        {{ Math.abs(percentage) > 999 ? '999' : Math.abs(percentage) }}%
                    </span>

                </div>

                <!-- Period -->
                <span class="varnish-period font-medium text-[12px] text-gray-400 dark:text-gray-500 pl-[2px] pt-[5px]">
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
                down : {
                    color : 'bg-rose-50 text-rose-600/[.90] dark:bg-rose-500/[.50] dark:text-rose-100',
                    icon  : 'fa-arrow-trend-down',
                },
                same : {
                    color : 'bg-sky-50 text-sky-500 dark:bg-sky-500/[.40] dark:text-sky-100',
                    icon  : 'fa-arrows-rotate',
                },
                up : {
                    color : 'bg-emerald-50 text-emerald-600/[.90] dark:bg-emerald-500/[.40] dark:text-emerald-100',
                    icon  : 'fa-arrow-trend-up',
                },
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