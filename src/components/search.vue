<template>
    <div class="varnish-search bg-gray-50/[.50] border border-gray-200 lg:border-0 rounded lg:rounded-none w-full p-5 mb-4 lg:mb-0">

        <!-- Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">

            <!-- Controls -->
            <div :key="field.id"
                 v-for="field in source.search.filtering">

                <!-- TextBox -->
                <v-textbox :icon="field.icon"
                           :label="field.label"
                           :title="field.label"
                           v-model="form[field.id]"
                           :error="form.errors[field.id]"
                           :id="`search_${field.label.toLowerCase().replaceAll(' ', '_')}`"
                           v-if="! Array.isArray(field.control) && field.control === 'TextBox'">
                </v-textbox>

                <!-- DropDown -->
                <v-dropdown itemValueKey="id"
                            itemTextKey="name"
                            :icon="field.icon"
                            :label="field.label"
                            :title="field.label"
                            v-model="form[field.id]"
                            :error="form.errors[field.id]"
                            :items="prop(field.control[1])"
                            :id="`search_${field.label.toLowerCase().replaceAll(' ', '_')}`"
                            v-if="Array.isArray(field.control) && field.control[0] === 'DropDown'">
                </v-dropdown>

                <!-- Date -->
                <v-datetime type="date"
                            :icon="field.icon"
                            :label="field.label"
                            :title="field.label"
                            v-model="form[field.id]"
                            :error="form.errors[field.id]"
                            :id="`search_${field.label.toLowerCase().replaceAll(' ', '_')}`"
                            v-if="! Array.isArray(field.control) && field.control === 'Date'">
                </v-datetime>

            </div>


        </div>

        <!-- Footer -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">

            <!-- Ordering -->
            <v-dropdown label="Order by"
            			title="Order by"
                        itemValueKey="id"
                        itemTextKey="label"
                        icon="fas fa-arrow-down-a-z"
                        :items="source.search.ordering"
                        v-model="form[source.search.order_key]"
                        :id="`search_${source.search.order_key}`"
                        :error="form.errors[source.search.order_key]">
            </v-dropdown>

            <!-- Actions -->
            <div class="flex flex-col-reverse md:flex-row md:justify-end md:mb-0">

                <!-- Reset -->
                <v-button mode="link"
                          color="gray"
                          label="Reset"
                          id="reset-search"
                          v-if="isBeingUsed()"
                          class="mt-2 -mb-2 md:mt-0 md:mb-0 md:mr-4"
                          @click="submitForm(createForm(), route().current(), 'get', { preserveScroll : true })">
                </v-button>

                <!-- Search -->
                <v-button label="Search"
                          mode="outline"
                          id="run-search"
                          :processing="form.processing"
                          @click="submitForm(form, route().current(), 'get', { preserveScroll : true })">
                </v-button>

            </div>

        </div>

    </div>
</template>

<script>
    import ButtonComponent from './button.vue';
    import TextBoxComponent from './textbox.vue';
    import DateTimeComponent from './datetime.vue';
    import DropDownComponent from './dropdown.vue';

    export default
    {
        /**
         * Define the components.
         *
         */
        components : {
            'v-button'   : ButtonComponent,
            'v-datetime' : DateTimeComponent,
            'v-dropdown' : DropDownComponent,
            'v-textbox'  : TextBoxComponent,
        },

        /**
         * Define the events.
         *
         */
        emits : ['closed'],

        /**
         * Define the data model.
         *
         */
        data() { return {
            form : { },
        }},

        /**
         * Define the public properties.
         *
         */
        props : {
            'source' : { type : Object, default : {} },
        },

        /**
         * Execute actions when the component is created.
         *
         */
        created()
        {
            let attributes = { search : true };

            attributes[this.source.search.order_key] = this.queryString(this.source.search.order_key)
                ? parseInt(this.queryString(this.source.search.order_key))
                : '';

            this.source.search.filtering.forEach(field => {
                attributes[field.id] = Array.isArray(field.control) && field.control[0] === 'DropDown'
                    ? parseInt(this.queryString(field.id))
                    : this.queryString(field.id);
            });

            this.form = this.createForm(attributes);
        },

        /**
         * Define the supporting methods.
         *
         */
        methods :
        {
            /**
             * Determine if the page is using the search form.
             *
             */
            isBeingUsed()
            {
                if (this.queryString(this.source.search.order_key)) {
                    return true;
                }

                return !! this.source.search.filtering
                    .map(field => this.queryString(field.id))
                    .filter(field => field)
                    .length;
            },
        },
    }
</script>

<style lang="postcss">
    .varnish-search .varnish-label { @apply pl-0 pt-[9px] }
    .varnish-search .varnish-label.pl-2 { @apply hidden }
    .varnish-search .varnish-clear { @apply w-[35px] h-[35px] }
    .varnish-search .varnish-caret { @apply top-[9px] right-[11px] }
    .varnish-search .varnish-textbox .varnish-input { @apply h-[35px] pt-[6px] pb-[7px] }
    .varnish-search .varnish-datetime .varnish-textbox .varnish-input { @apply h-[35px] }
    .varnish-search .varnish-datetime .varnish-textbox .varnish-label { @apply pt-[9px] }
    .varnish-search .varnish-dropdown .varnish-input { @apply h-[35px] pt-[6px] }
    .varnish-search .varnish-dropdown .varnish-label { @apply pt-[9px] }
    .varnish-search .varnish-button .varnish-label { @apply pt-0 pl-5 }
</style>