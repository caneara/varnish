<template>
    <div v-if="visible"
         class="varnish-empty varnish-font border border-dashed border-gray-300 dark:border-gray-500 w-full flex flex-col justify-center items-center rounded p-8 md:p-10">

        <!-- Icon -->
        <i :class="icon"
           v-if="! blank(icon)"
           class="varnish-icon text-[40px] text-sky-600/[.60] dark:text-sky-500/[.50] pt-1 mb-7">
        </i>

        <!-- Title -->
        <span class="varnish-title font-semibold text-[20px] text-gray-900 dark:text-gray-300 tracking-tight mb-[5px]">
            {{ title }}
        </span>

        <!-- Message -->
        <span class="varnish-message text-15px text-gray-700 dark:text-gray-400 text-center leading-normal max-w-450px">
            {{ message }}
        </span>

        <!-- Action -->
        <span @click="actionCommand()"
              v-if="! blank(actionLabel) && ! blank(actionCommand)"
              class="varnish-action font-semibold text-sky-600 dark:text-sky-400 hover:text-rose-700 dark:hover:text-rose-400 cursor-pointer transition duration-300 mt-4">

            <!-- Text -->
            {{ actionLabel }}

        </span>

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
		 * Define the public properties.
		 *
		 */
		props : {
            'actionCommand' : { type : Function, default : null },
            'actionLabel'   : { type : String,   default : '' },
			'icon'          : { type : String,   default : 'fas fa-cubes' },
			'message'       : { type : String,   default : 'There are no items to display' },
			'title'         : { type : String,   default : 'Nothing to show' },
			'visible'       : { type : Boolean,  default : false },
		},
    }
</script>