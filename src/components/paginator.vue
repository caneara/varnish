<template>
    <div class="flex justify-between items-center mt-4">

        <!-- Summary -->
        <span class="text-[12px] text-gray-500/[.80] dark:text-gray-500 uppercase relative top-[1px]">

            <!-- Text -->
            <span>
                Page
            </span>

            <!-- Current -->
            <span class="font-medium text-gray-700 dark:text-gray-400 mx-[1px]">
                {{ trim(source.pagination?.current_page ?? '1') }},
            </span>

            <!-- Text -->
            <span class="ml-1">
                Items
            </span>

            <!-- From -->
            <span class="font-medium text-gray-700 dark:text-gray-400 ml-[1px]">
                {{ trim(source.pagination?.from ?? '0') }}
            </span>

            <!-- Divider -->
            <span class="-mx-[1px]">
                -
            </span>

            <!-- To -->
            <span class="font-medium text-gray-700 dark:text-gray-400 ml-[1px]">
                {{ trim(source.pagination?.to ?? '0') }}
                {{ source.type === 'LengthAwarePaginator' ? ',' : '' }}
            </span>

            <!-- Total -->
            <span v-if="source.type === 'LengthAwarePaginator'"
                  class="block md:inline mt-[6px] md:ml-1 md:mt-0">

                <!-- Text -->
                <span>
                    Total
                </span>

                <!-- Value -->
                <span class="font-medium text-gray-700 dark:text-gray-400 ml-[1px]">
                    {{ trim(source.pagination?.total ?? '0') }}
                </span>

            </span>

        </span>

        <!-- Actions -->
        <div class="flex justify-end rounded">

            <!-- Reset -->
            <div v-if="reset"
                 title="Clear search filters"
                 dusk="varnish_paginator_button_reset"
                 @click="submitForm(createForm(), resetUrl(), 'get', { preserveScroll : true }, true)"
                 class="bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover-bg-gray-600 border border-r-0 border-gray-300 dark:border-gray-500 rounded-l cursor-pointer group transition duration-300 px-[13px] py-2">

                <!-- Link -->
                <i class="fas fa-times text-[14px] text-gray-800/[.50] dark:text-gray-500"></i>

            </div>

            <!-- Search -->
            <div v-if="search"
                 title="Search"
                 @click="search()"
                 :class="reset ? '' : 'rounded-l'"
                 dusk="varnish_paginator_button_search"
                 class="bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover-bg-gray-600 border border-r-0 border-gray-300 dark:border-gray-500 cursor-pointer group transition duration-300 px-3 py-2">

                <!-- Link -->
                <i class="fas fa-search text-[14px] text-gray-800/[.50] dark:text-gray-500"></i>

            </div>

            <!-- Download -->
            <div v-if="download"
                 title="Download"
                 @click="download()"
                 :class="search ? '' : 'rounded-l'"
                 dusk="varnish_paginator_button_download"
                 class="bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover-bg-gray-600 border border-r-0 border-gray-300 dark:border-gray-500 cursor-pointer group transition duration-300 px-3 py-2">

                <!-- Link -->
                <i class="fas fa-download text-[14px] text-gray-800/[.50] dark:text-gray-500"></i>

            </div>

            <!-- Previous Page (Disabled) -->
            <div :class="search ? '' : 'rounded-l'"
                 v-if="blank(source.pagination.prev_page_url)"
                 class="border border-r-0 border-gray-300 dark:border-gray-500 select-none cursor-not-allowed px-3 py-2">

                <!-- Arrow -->
                <i class="fas fa-arrow-left text-[14px] text-gray-300 dark:text-gray-800"></i>

            </div>

            <!-- Previous Page (Enabled) -->
            <div title="Previous Page"
                 :class="search ? '' : 'rounded-l'"
                 v-if="source.pagination.prev_page_url"
                 @click="app('inertia').visit(url(source.pagination.prev_page_url), { preserveScroll : true })"
                 class="bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover-bg-gray-600 border border-r-0 border-gray-300 dark:border-gray-500 cursor-pointer group transition duration-300 px-3 py-2">

                <!-- Link -->
                <i class="fas fa-arrow-left text-[14px] text-gray-800/[.50] dark:text-gray-500"></i>

            </div>

            <!-- Next Page (Enabled) -->
            <div title="Next Page"
                 v-if="source.pagination.next_page_url"
                 @click="app('inertia').visit(url(source.pagination.next_page_url), { preserveScroll : true })"
                 class="bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover-bg-gray-600 border border-gray-300 dark:border-gray-500 rounded-r cursor-pointer group transition duration-300 px-3 py-2">

                <!-- Link -->
                <i class="fas fa-arrow-right text-[14px] text-gray-800/[.50] dark:text-gray-500"></i>

            </div>

            <!-- Next Page (Disabled) -->
            <div v-if="blank(source.pagination.next_page_url)"
                 class="border border-gray-300 rounded-r select-none cursor-not-allowed px-3 py-2">

                <!-- Arrow -->
                <i class="fas fa-arrow-right text-[14px] text-gray-300 dark:text-gray-800"></i>

            </div>

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
            'download' : { type : Function, default : null },
            'reset'    : { type : Boolean,  default : false },
            'search'   : { type : Function, default : null },
            'source'   : { type : Object,   default : {} },
        },

        /**
         * Define the supporting methods.
         *
         */
        methods :
        {
            /**
             * Generate the URL to send the request to.
             *
             */
            resetUrl()
            {
                return `${window.location.origin}${window.location.pathname}`
            },

            /**
             * Remove extraneous content from the given value.
             *
             */
            trim(value)
            {
                return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
            },

            /**
             * Generate a URL using the given link.
             *
             */
            url(link)
            {
                let pair = link.split('?')[1].split('=');

                let query = this.queryString();

                query.set(pair[0], pair[1]);

                return `${link.split('?')[0]}?${query.toString()}`;
            },
        },
    }
</script>