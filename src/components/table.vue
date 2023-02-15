<template>
    <div class="varnish-table">

        <!-- Paginator -->
        <v-paginator class="mb-4"
                     :source="source"
                     :download="download"
                     :reset="!! queryString('search')"
                     :search="() => search = (search !== null) ? ! search : (queryString('search') ? false : true)">
        </v-paginator>

        <!-- Content -->
        <div class="lg:border border-gray-300/[.80] rounded">

            <!-- Table -->
            <table>

                <!-- Head -->
                <thead>
                    <tr>

                        <!-- Columns -->
                        <th v-for="column in source.data.columns"
                            :class="column.align ? column.align : 'text-center first-of-type:text-left'">

                            <!-- Column -->
                            {{ (column?.desktop ?? true) ? column.label : '' }}

                        </th>

                    </tr>
                </thead>

                <!-- Body -->
                <tbody>

                    <!-- Search Row -->
                    <tr class="search"
                        v-if="search ? true : (search === null ? queryString('search') : false)">

                        <!-- Cell -->
                        <td :colspan="source.data.columns.length">
                            <v-search :source="source"
                                      @closed="search = false">
                            </v-search>
                        </td>

                    </tr>

                    <!-- Content Row -->
                    <tr :key="row[rowKey]"
                        v-for="row in source.data.rows ?? []"
                        :dusk="`varnish-table-row-${row[rowKey]}`"
                        :class="blank(action) ? '' : 'cursor-pointer'"
                        @click="! blank(action) && ! $event.target.parentNode.classList.contains('varnish-trigger') ? action(row) : null">

                        <!-- Cell -->
                        <td :data-title="column.label"
                            v-for="column in source.data.columns"
                            :class="[
                                column.styles,
                                column.align ? column.align : 'text-right lg:text-center first-of-type:lg:text-left',
                                column.label === 'Actions' ? 'lg:w-[90px] lg:min-w-[90px] lg:max-w-[90px] lg:pr-0' : 'lg:max-w-[250px]',
                            ]">

                            <!-- Slot -->
                            <slot :item="row"
                                  :name="column.label.toLowerCase().replaceAll(' ', '')">
                            </slot>

                        </td>

                    </tr>

                </tbody>

            </table>

            <!-- Empty -->
            <v-empty class="lg:border-0"
                     :message="emptyMessage"
                     :actionLabel="emptyLabel"
                     :actionCommand="emptyAction"
                     :visible="! (source.data.rows ?? []).length">
            </v-empty>

        </div>

        <!-- Paginator -->
        <v-paginator :source="source"></v-paginator>

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
            'rowKey'       : { type : String,   default : 'id' },
            'source'       : { type : Object,   default : {} },
        },
    }
</script>