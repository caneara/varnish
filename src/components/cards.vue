<template>
    <div class="varnish-cards varnish-font">

        <!-- Input -->
        <input :name="id"
               type="hidden"
               :value="selected">

        <!-- Grid -->
        <div :class="layout"
             class="varnish-items grid gap-4">

            <!-- Item -->
            <div :key="item.id"
                 v-for="item in items"
                 @click="$emit('change', item.id)"
                 :dusk="`varnish-card-${id}-${item.id}`"
                 class="varnish-item border flex flex-col items-start rounded cursor-pointer relative transition duration-300 p-5 pb-4"
                 :class="selected === item.id ? 'bg-sky-100/[.20] dark:bg-sky-700/[.20] border-sky-700/[.40] dark:border-sky-600' : 'border-gray-300 dark:border-gray-600'">

                <!-- Title -->
                <h6 class="varnish-header varnish-font-native text-[16px] flex items-center mb-4">

                    <!-- Icon -->
                    <span class="varnish-icon text-gray-400 mr-3">
                        <i class="fas"
                           :class="item.icon">
                        </i>
                    </span>

                    <!-- Text -->
                    <span class="varnish-label">
                        {{ item.label }}
                    </span>

                </h6>

                <!-- Summary -->
                <span class="varnish-summary text-[15.5px] text-gray-500/[.90] dark:text-gray-400 text-left leading-normal">
                    {{ item.summary }}
                </span>

                <!-- Check -->
                <i :class="selected === item.id ? 'opacity-100' : 'opacity-0'"
                   class="varnish-check fas fa-check-circle text-sky-600 dark:text-sky-500 transition duration-300 absolute top-4 right-[14px]">
                </i>

            </div>

        </div>

        <!-- Error -->
        <v-error :value="error"></v-error>

    </div>
</template>

<script>
    import ErrorComponent from './error.vue';

    export default
    {
        /**
         * Define the components.
         *
         */
        components : {
            'v-error' : ErrorComponent,
        },

        /**
         * Define the events.
         *
         */
        emits : ['change'],

        /**
         * Define the public properties.
         *
         */
        props : {
            'error'    : { type : String,           default : '' },
            'id'       : { type : String,           default : '' },
            'items'    : { type : Array,            default : [] },
            'layout'   : { type : String,           default : 'grid-cols-1' },
            'selected' : { type : [Number, String], default : 0 },
        },
    }
</script>