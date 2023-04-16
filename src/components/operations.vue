<template>
    <div :class="border ? 'border-t border-gray-300/50 pt-9 mt-10' : ''"
         v-show="! blank(items) && ! blank(items.filter(item => typeof item.show === 'boolean' ? item.show : item['show']()))">

        <!-- Items -->
        <div :key="item.id"
             v-for="item in items"
             @click="item['action']()"
             :dusk="`operation-${item.id}`"
             :class="item?.type === 'separator' ? '' : 'cursor-pointer group'"
             v-show="typeof item.show === 'boolean' ? item.show : item['show']()">

            <!-- Separator -->
            <div v-if="item?.type === 'separator'"
                 class="border-t border-gray-300/50 my-9">
            </div>

            <!-- Item -->
            <div v-if="item?.type !== 'separator'"
                 class="flex items-center group mb-7">

                <!-- Icon -->
                <i class="fas fa-fw -ml-6px"
                   :class="[item.icon, item.color]">
                </i>

                <!-- Details -->
                <div class="ml-3">

                    <!-- Title -->
                    <div class="font-semibold text-gray-800 group-hover:text-sky-600 animated">
                        {{ item.title }}
                    </div>

                    <!-- Summary -->
                    <div v-if="! blank(item.summary)"
                          class="text-14px text-gray-500/90 mt-6px">

                        <!-- Text -->
                        {{ item.summary }}

                    </div>

                </div>

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
            'border' : { type : Boolean, default : true },
            'items'  : { type : Array,   default : [] },
        },
    }
</script>