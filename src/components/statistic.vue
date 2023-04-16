<template>
    <div @click="redirect(url)"
         class="flex items-center mb-6"
         :class="url ? 'cursor-pointer group' : ''">

        <!-- Icon -->
        <i :class="[icon, color]"
           class="fa-fw text-16px -ml-6px mr-3">
        </i>

        <!-- Text -->
        <span class="font-medium text-gray-700 group-hover:text-sky-700 animated">
            {{ text }}
        </span>

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
            'color' : { type : String, default : 'text-gray-400' },
            'icon'  : { type : String, default : '' },
            'text'  : { type : String, default : '' },
            'url'   : { type : String, default : '' },
        },
    }
</script>