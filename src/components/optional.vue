<template>
    <span class="varnish-optional varnish-font bg-gray-200/[.70] dark:bg-gray-600 font-[450] text-[9px] text-gray-500 dark:text-gray-300 leading-normal tracking-wide uppercase rounded-lg select-none px-1 py-[2px]">
        {{ value }}
    </span>
</template>

<script>
    export default
    {
        /**
         * Define the public properties.
         *
         */
        props : {
            'value' : { type : String, default : 'Optional' },
        },
    }
</script>