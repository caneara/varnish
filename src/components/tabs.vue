<template>
	<div class="varnish-tabs varnish-font flex items-end overflow-x-auto">

        <!-- Tabs -->
        <div @click="switchTab(tab)"
             :dusk="`select-tab-${tab.id}`"
             v-for="(tab, index) in items.filter(tab => tab?.visible ?? true)"
             class="varnish-tab group cursor-pointer whitespace-nowrap select-none transition duration-300 relative z-[1]">

            <!-- Content -->
            <div class="varnish-content flex items-center px-4 py-3 md:mx-1">

                <!-- Icon -->
                <i :title="tab.label"
                   class="varnish-icon text-[16px] lg:text-[13px] transition duration-300 md:mr-3"
                   :class="[tab.icon, tab.id === modelValue ? 'text-sky-600 dark:text-sky-400' : 'text-gray-500/[.65] dark:text-gray-400']">
                </i>

                <!-- Label -->
                <span v-html="tab.label"
                      class="varnish-label font-semibold text-[12px] uppercase transition duration-300 hidden md:inline"
                      :class="tab.id === modelValue ? 'text-sky-600 dark:text-sky-400' : 'text-gray-600 dark:text-gray-400 hidden lg:inline'">
                </span>

            </div>

            <!-- Border (Top) -->
            <div class="varnish-border-top w-full h-[1px] transition duration-300 relative z-[1]"
                 :class="tab.id === modelValue ? 'bg-sky-600/[.80] dark:bg-sky-400' : 'group-hover:bg-sky-600/[.80] dark:group-hover:bg-sky-400'">
            </div>

            <!-- Border (Bottom) -->
            <div class="varnish-border-bottom w-full h-[1px] transition duration-300 relative z-[1]"
                 :class="tab.id === modelValue ? 'bg-sky-600/[.80] dark:bg-sky-400' : 'bg-gray-300 dark:bg-gray-600 group-hover:bg-sky-600/80 dark:group-hover:bg-sky-400'">
            </div>

        </div>

        <!-- Track -->
        <div class="varnish-track w-full h-[1px] bg-gray-300 dark:bg-gray-600 rounded-lg relative z-[2]"></div>

	</div>
</template>

<script>
	export default
    {
        /**
         * Define the events.
         *
         */
        emits : ['change', 'update:modelValue'],

		/**
		 * Define the public properties.
		 *
		 */
		props : {
			'id'         : { type : String, default : '' },
			'items'      : { type : Array,  default : [] },
			'modelValue' : { type : String, default : '' },
		},

        /**
         * Define the supporting methods.
         *
         */
        methods :
        {
            /**
             * Change the currently active tab.
             *
             */
            switchTab(tab)
            {
                if (tab?.action) {
                    tab.action();
                }

                localStorage.setItem(`varnish_tabs_${this.id}`, tab.id);

                this.$emit('change', tab.id);
                this.$emit('update:modelValue', tab.id);
            },
        },
	}
</script>