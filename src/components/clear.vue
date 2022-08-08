<template>
    <div v-if="! automated()"
          style="transition: all 0.4s ease, background-color 0s"
          :class="(focus && filled) || (hover && filled) ? 'opacity-100 z-[2]' : 'opacity-0 pointer-events-none'"
          class="varnish-clear varnish-font w-[50px] h-[50px] bg-inherit flex justify-center items-center absolute top-0 right-0 rounded-r">

        <!-- Icon -->
        <i title="Clear this field"
           @click.stop="$emit('click')"
           class="varnish-icon fas fa-times text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-400 relative left-[1.5px] cursor-pointer transition duration-300">
        </i>

    </div>
</template>

<script>
    import Utilities from '../mixins/Utilities';

    export default
    {
        /**
         * Define the mixins.
         *
         */
        mixins : [
            Utilities,
        ],

        /**
         * Define the events.
         *
         */
        emits : ['click'],

        /**
         * Define the public properties.
         *
         */
        props : {
            'hover'  : { type : Boolean, default : false },
            'focus'  : { type : Boolean, default : false },
            'filled' : { type : Boolean, default : false },
        }
    }
</script>