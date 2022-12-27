<template>
    <span class="varnish-optional varnish-font bg-gray-200/[.70] dark:bg-gray-600 font-medium text-[10px] text-gray-500 dark:text-gray-300 leading-normal uppercase relative rounded-lg select-none px-[6px]">
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