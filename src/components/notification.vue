<template>
    <Transition enter-to-class="translate-x-0"
                leave-from-class="translate-x-0"
                enter-active-class="transition duration-500"
                leave-active-class="transition duration-700"
                leave-to-class="translate-x-[350px] md:translate-x-[450px]"
                enter-from-class="translate-x-[350px] md:translate-x-[450px]">

        <!-- Notification -->
        <div v-if="show"
             class="varnish-notification varnish-font min-w-[250px] max-w-[350px] fixed top-20 right-0 z-[1002]">

            <!-- Container -->
            <div ref="container"
                 class="varnish-container bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 flex items-center shadow-sm rounded-lg relative z-[30] pl-[15px] pr-6 py-3 mr-[18px]">

                <!-- Icon -->
                <div class="varnish-icon opacity-70 mr-3 relative top-[.5px] flex self-stretch">

                    <!-- SVG -->
                    <svg width="24"
                        height="24"
                        style="fill: none"
                        viewBox="0 0 24 24"
                        class="varnish-svg"
                        stroke="currentColor"
                        :class="(types[type].class || '')">

                        <!-- Graphic -->
                        <path stroke-width="2"
                            :d="types[type].svg || ''"
                            stroke-linecap="round"
                            stroke-linejoin="round" />

                    </svg>

                </div>

                <!-- Message -->
                <span v-html="message"
                    class="varnish-message text-[14px] text-gray-800 dark:text-gray-300 leading-normal break-words relative top-[.5px]">
                </span>

            </div>

        </div>

    </Transition>
</template>

<script>
    export default
    {
        /**
         * Define the data model.
         *
         */
        data() { return {
            show : this.visible,
            types : {
                info    : { class : 'text-blue-700 dark:text-blue-400',   svg : 'M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
                error   : { class : 'text-red-700 dark:text-red-400',     svg : 'M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z' },
                success : { class : 'text-green-700 dark:text-green-400', svg : 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' },
            },
        }},

        /**
         * Define the public properties.
         *
         */
        props : {
            'message' : { type : String,  default : '' },
            'type'    : { type : String,  default : 'success' },
            'visible' : { type : Boolean, default : false },
        },

        /**
         * Execute actions when the component is mounted to the DOM.
         *
         */
        mounted()
        {
            setTimeout(() => this.show = true, 50);
            setTimeout(() => this.show = false, 3000);
        },
    }
</script>