<template>
    <div :dusk="`attribute_${label.replaceAll(' ', '_').toLowerCase()}`"
         class="border-x md:border-x-0 border-b border-gray-200 first-of-type:border-t
                first-of-type:rounded-t last-of-type:rounded-b
                grid grid-cols-8 items-start gap-4 md:gap-6
                pl-3 pr-5 pt-3 md:pt-5 pb-5 md:px-0">

        <!-- Label -->
        <div class="text-gray-500/90 col-span-8 md:col-span-2 lg:col-span-3">
            {{ label }}
        </div>

        <!-- Value -->
        <div class="text-right md:text-left text-gray-700 col-span-8 md:col-span-6 lg:col-span-5">
            <slot></slot>
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
            'label' : { type : String, default : '' },
        },
    }
</script>