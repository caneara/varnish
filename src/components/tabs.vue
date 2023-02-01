<template>
	<div class="flex items-end overflow-x-auto">

        <!-- Tabs -->
        <div @click="switchTab(tab)"
             :dusk="`select-tab-${tab.id}`"
             v-for="(tab, index) in items.filter(tab => tab?.visible ?? true)"
             class="group cursor-pointer whitespace-nowrap select-none animated relative z-1">

            <!-- Content -->
            <div class="flex items-center px-4 py-3 md:mx-1">

                <!-- Icon -->
                <i :title="tab.label"
                   class="text-17px md:text-15px animated mx-1 md:ml-0 md:mr-3"
                   :class="[tab.icon, tab.id === modelValue ? 'text-sky-600' : 'text-gray-500/[.65]']">
                </i>

                <!-- Label -->
                <span v-html="tab.label"
                      class="font-medium text-16px animated hidden md:inline"
                      :class="tab.id === modelValue ? 'text-sky-600' : 'text-gray-600 hidden lg:inline'">
                </span>

            </div>

            <!-- Border (Top) -->
            <div class="w-full h-1px animated relative z-1"
                 :class="tab.id === modelValue ? 'bg-sky-600/80' : 'group-hover:bg-sky-600/80'">
            </div>

            <!-- Border (Bottom) -->
            <div class="w-full h-1px animated relative z-1"
                 :class="tab.id === modelValue ? 'bg-sky-600/80' : 'bg-gray-200 group-hover:bg-sky-600/80'">
            </div>

        </div>

        <!-- Track -->
        <div class="bg-gray-200 w-full h-1px rounded-lg relative z-2"></div>

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

                localStorage.setItem(`pionear_tabs_${this.id}`, tab.id);
            },
        },
	}
</script>