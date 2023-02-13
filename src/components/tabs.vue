<template>
	<div class="varnish-tabs varnish-font flex items-end overflow-x-auto mb-18">

        <!-- Tabs -->
        <div @click="tab.action()"
             :dusk="`varnish-tab-select-${tab.id}`"
             v-for="(tab, index) in items.filter(tab => tab?.visible ?? true)"
             class="varnish-tab group cursor-pointer whitespace-nowrap select-none transition duration-300 relative z-1">

            <!-- Content -->
            <div class="varnish-content flex items-center px-4 py-3 md:mx-1">

                <!-- Icon -->
                <i :title="tab.label"
                   class="varnish-icon text-[20px] lg:text-[17px] transition duration-300 md:mx-1 lg:ml-0 lg:mr-[14px]"
                   :class="[tab.icon, tab.id === active ? 'text-sky-600 dark:text-sky-500' : 'text-gray-500/[.65] dark:text-gray-400']">
                </i>

                <!-- Label -->
                <span v-html="tab.label"
                      class="varnish-label font-medium text-[16px] transition duration-300 hidden lg:inline"
                      :class="tab.id === active ? 'text-sky-600 dark:text-sky-500' : 'text-gray-600 dark:text-gray-400 hidden lg:inline'">
                </span>

            </div>

            <!-- Borders -->
            <div class="varnish-border-top group-hover:bg-sky-600/[.80] dark:group-hover:bg-sky-500 w-full h-[1px] transition duration-300 relative z-1"></div>
            <div class="varnish-border-bottom bg-gray-300 dark:bg-gray-500 group-hover:bg-sky-600/[.80] dark:group-hover:bg-sky-500 w-full h-[1px] transition duration-300 relative z-1"></div>

        </div>

        <!-- Track -->
        <div class="varnish-track bg-gray-300 dark:bg-gray-500 w-full h-[1px] rounded-lg relative z-2"></div>

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
			'active' : { type : String, default : '' },
			'items'  : { type : Array,  default : [] },
		},
	}
</script>