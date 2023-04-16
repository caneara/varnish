<template>
    <div class="varnish-grid">

        <!-- Paginator -->
        <v-paginator class="mb-4"
                     v-if="toolbar"
                     :source="source"
                     :download="download"
                     :reset="!! queryString('search')"
                     :search="() => search = (search !== null) ? ! search : (queryString('search') ? false : true)">
        </v-paginator>

        <!-- Search -->
        <v-search class="lg:mb-4"
                  :source="source"
                  @closed="search = false"
                  style="border-width: 1px; border-radius: 0.25rem"
                  v-if="search ? true : (search === null ? queryString('search') : false)">
        </v-search>

        <!-- Content -->
        <div :class="layout"
             class="grid grid-cols-1 gap-4 mt-4">

            <!-- Item -->
            <div :key="row[rowKey]"
                 v-for="row in source.data.rows ?? []"
                 :dusk="`varnish-grid-item-${row[rowKey]}`"
                 :class="blank(action) ? '' : 'cursor-pointer'"
                 @click="! blank(action) && ! $event.target.parentNode.classList.contains('varnish-trigger') ? action(row) : null">

                <!-- Slot -->
                <slot :item="row"></slot>

            </div>

        </div>

        <!-- Empty -->
        <v-empty :message="emptyMessage"
                 :actionLabel="emptyLabel"
                 :actionCommand="emptyAction"
                 :visible="! (source.data.rows ?? []).length">
        </v-empty>

        <!-- Paginator -->
        <v-paginator v-if="toolbar"
                     :source="source">
        </v-paginator>

    </div>
</template>

<script>
    import EmptyComponent from './empty.vue';
    import SearchComponent from './search.vue';
    import PaginatorComponent from './paginator.vue';

    export default
    {
        /**
         * Define the components.
         *
         */
        components : {
            'v-empty'     : EmptyComponent,
            'v-paginator' : PaginatorComponent,
            'v-search'    : SearchComponent,
        },

        /**
         * Define the data model.
         *
         */
        data() { return {
            search : null,
        }},

        /**
         * Define the public properties.
         *
         */
        props : {
            'action'       : { type : Function, default : null },
            'download'     : { type : Function, default : null },
            'emptyAction'  : { type : Function, default : null },
            'emptyLabel'   : { type : String,   default : 'Create one now' },
            'emptyMessage' : { type : String,   default : '' },
            'layout'       : { type : String,   default : 'md:grid-cols-2' },
            'rowKey'       : { type : String,   default : 'id' },
            'source'       : { type : Object,   default : {} },
            'toolbar'      : { type : Boolean,  default : true },
        },
    }
</script>