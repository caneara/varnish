<template>
    <Transition leave-to-class="opacity-0 scale-110"
                enter-from-class="opacity-0 scale-110"
                enter-to-class="opacity-100 scale-100"
                leave-from-class="opacity-100 scale-100"
                enter-active-class="transition duration-300"
                leave-active-class="transition duration-300">

        <!-- Modal -->
        <div v-if="visible"
             @click="close()"
             class="varnish-modal varnish-font bg-gray-200 dark:bg-gray-800 flex justify-center items-center fixed inset-0 z-[9999]">

            <!-- Container -->
            <div class="varnish-container bg-white/[.75] dark:bg-gray-700 border-y md:border-x border-gray-400/[.70] dark:border-gray-600 md:max-w-[600px] lg:max-w-[800px] md:rounded-lg relative">

                <!-- Slot -->
                <div class="varnish-slot min-h-[200px] p-10 md:px-20 md:py-[72px]">
                    <slot></slot>
                </div>

            </div>

            <!-- Close -->
            <i ref="close"
               v-if="dismiss"
               @click="close()"
               dusk="modal-close"
               title="Close the popup"
               class="varnish-close fas fa-times text-[20px] text-gray-400 dark:text-gray-600 hover:text-gray-900 dark:hover:text-gray-400 cursor-pointer transition duration-300 absolute top-6 right-6">
            </i>

        </div>

    </Transition>
</template>

<script>
	export default
    {
        /**
         * Define the events.
         *
         */
        emits : ['closed'],

		/**
		 * Define the public properties.
		 *
		 */
		props: {
            'dismiss' : { type : Boolean, default : true },
			'visible' : { type : Boolean, default : false },
		},

		/**
		 * Define the supporting methods.
		 *
		 */
		methods:
        {
			/**
			 * Close the component window.
			 *
			 */
			close()
			{
				if (this.dismiss) {
                    this.$emit('closed');
                }
			},
        }
    }
</script>