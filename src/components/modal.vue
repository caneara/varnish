<template>
	<div class="varnish-modal varnish-font w-full h-full hidden fixed top-0 left-0 z-[1001] overflow-x-hidden overflow-y-auto transition duration-200">

		<!-- Background -->
		<div ref="background"
			 @click="dismiss ? close() : null"
             class="varnish-background bg-gray-200 dark:bg-gray-800 opacity-0 fixed inset-0 z-[1000] transition duration-200">
		</div>

		<!-- Container -->
        <div class="varnish-container flex min-h-screen items-center py-14">

            <!-- Content -->
            <div ref="content"
                 class="varnish-content relative z-[1001] w-full md:max-w-[600px] md:rounded-lg transition duration-200 md:scale-110 mx-auto">

                <!-- Slot -->
                <div class="varnish-slot bg-white/[.75] dark:bg-gray-700 border-y md:border-x border-gray-400/[.60] dark:border-gray-600 md:rounded-lg p-10 md:p-20">
                    <slot></slot>
                </div>

            </div>

        </div>

        <!-- Close -->
        <i ref="close"
           v-if="dismiss"
           @click="close()"
           dusk="modal-close"
           title="Close the popup"
           class="varnish-close fas fa-times text-[20px] text-gray-400 dark:text-gray-600 hover:text-gray-900 dark:hover:text-gray-400 transition duration-200 cursor-pointer opacity-0 absolute z-[1001] top-[14px] right-[14px]">
        </i>

	</div>
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
         * Define the watch methods.
         *
         */
        watch :
        {
            /**
             * Watch the 'visible' property.
             *
             */
            visible : function(current, previous)
            {
                return current ? this.open() : this.close();
            }
        },

		/**
		 * Execute actions when the component is mounted to the DOM.
		 *
		 */
		mounted()
		{
			if (this.visible) {
                this.open();
            }
		},

		/**
		 * Define the supporting methods.
		 *
		 */
		methods:
        {
			/**
			 * Close the modal window.
			 *
			 */
			close()
			{
				document.body.style.overflow = 'visible';

				this.$refs.content.style.opacity   = 0;
                this.$refs.content.style.transform = 'scale(1.1)';

                if (this.$refs['close'] ?? null) {
				    setTimeout(() => this.$refs.close.style.opacity = 0, 100);
                }

				setTimeout(() => this.$refs.background.style.opacity = 0, 100);
				setTimeout(() => this.$el.classList.add('hidden'), 600);
				setTimeout(() => this.$emit('closed'), 650);
			},

			/**
			 * Open the modal window.
			 *
			 */
			open()
			{
				document.body.style.overflow = 'hidden';

				this.$el.classList.remove('hidden');

				this.$refs.content.style.opacity   = 0;
				this.$refs.content.style.transform = '';

                if (this.$refs['close'] ?? null) {
				    setTimeout(() => this.$refs.close.style.opacity = 1, 50);
                }

				setTimeout(() => this.$el.scrollTop = 0, 50);
                setTimeout(() => this.$refs.background.style.opacity = 1, 50);
				setTimeout(() => this.$refs.content.style.opacity = 1, 50);
				setTimeout(() => this.$refs.content.style.transform = 'scale(1)', 50);
			},
		}
	}
</script>