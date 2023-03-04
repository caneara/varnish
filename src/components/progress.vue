<template>
    <div class="varnish-progress relative">

        <!-- Bar -->
        <div class="varnish-progress-bar bg-gray-200 dark:bg-gray-500 w-full h-[8px] overflow-hidden relative rounded-[4px]">

            <!-- Step -->
            <div :style="`width: ${Math.round((value / maximum) * 100)}%`"
                 class="varnish-progress-step bg-sky-600/[.70] dark:bg-sky-400 h-[8px] rounded-[4px] rounded-r-none absolute top-0 left-0 transition-all duration-300">
            </div>

        </div>

    </div>
</template>

<script>
    export default
    {
        /**
         * Define the public properties.
         *
         */
        props : {
            'maximum' : { type : Number, default : 100 },
            'value'   : { type : Number, default : 0 },
        },
    }
</script>