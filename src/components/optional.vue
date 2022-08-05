<template>
    <span class="varnish-optional varnish-font bg-gray-200/[.70] dark:bg-gray-600 font-normal text-[9px] text-gray-500 dark:text-gray-300 leading-normal tracking-wide uppercase rounded-lg select-none px-1 py-[2px]">
        {{ text }}
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
            'text' : { type : String, default : 'Optional' },
        },
    }
</script>