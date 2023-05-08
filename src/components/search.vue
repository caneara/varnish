<template>
    <div class="varnish-search bg-gray-50/[.50] border border-gray-200 lg:border-0 rounded lg:rounded-none w-full p-5 mb-4 lg:mb-0">

        <!-- Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">

            <!-- Controls -->
            <div :key="field.id"
                 v-for="field in source.search.filtering">

                <!-- TextBox -->
                <v-textbox :icon="field.icon"
                           :label="field.label"
                           :title="field.label"
                           v-model="form[field.id]"
                           :error="form.errors[field.id]"
                           v-if="! Is.array(field.control) && field.control === 'TextBox'"
                           :id="`search_${field.label.toLowerCase().replaceAll(' ', '_')}`">
                </v-textbox>

                <!-- DropDown -->
                <v-dropdown itemValueKey="id"
                            :icon="field.icon"
                            itemTextKey="label"
                            :label="field.label"
                            :title="field.label"
                            v-model="form[field.id]"
                            :error="form.errors[field.id]"
                            :items="System.Page.property(field.control[1])"
                            :id="`search_${field.label.toLowerCase().replaceAll(' ', '_')}`"
                            v-if="Is.array(field.control) && field.control[0] === 'DropDown'">
                </v-dropdown>

                <!-- Date -->
                <v-datetime type="date"
                            :icon="field.icon"
                            :label="field.label"
                            :title="field.label"
                            v-model="form[field.id]"
                            :error="form.errors[field.id]"
                            v-if="! Is.array(field.control) && field.control === 'Date'"
                            :id="`search_${field.label.toLowerCase().replaceAll(' ', '_')}`">
                </v-datetime>

                <!-- Period -->
                <v-period :icon="field.icon"
                          :label="field.label"
                          :title="field.label"
                          v-model="form[field.id]"
                          :error="form.errors[field.id]"
                          v-if="! Is.array(field.control) && field.control === 'Period'"
                          :id="`search_${field.label.toLowerCase().replaceAll(' ', '_')}`">
                </v-period>

            </div>

            <!-- Ordering -->
            <v-dropdown label="Order by"
            			title="Order by"
                        itemValueKey="id"
                        itemTextKey="label"
                        icon="fas fa-arrow-down-a-z"
                        :items="source.search.ordering"
                        v-if="source.search.ordering.length"
                        v-model="form[source.search.order_key]"
                        :id="`search_${source.search.order_key}`"
                        :error="form.errors[source.search.order_key]">
            </v-dropdown>

            <!-- Actions -->
            <div class="flex flex-col-reverse md:flex-row md:items-start md:justify-end md:mb-0"
                 :class="(source.search.filtering.length + (source.search.ordering.length ? 1 : 0)) % 2 === 0 ? 'md:col-span-2' : 'md:col-span-1'">

                <!-- Reset -->
                <v-button mode="link"
                          color="gray"
                          label="Reset"
                          id="reset-search"
                          v-if="isBeingUsed()"
                          class="mt-2 -mb-2 md:mt-0 md:mb-0 md:mr-4"
                          @click="System.Form.submit(System.Form.create(), url(), 'get', { preserveScroll : true }, true)">
                </v-button>

                <!-- Search -->
                <v-button label="Search"
                          mode="outline"
                          id="run-search"
                          :processing="form.processing"
                          @click="System.Form.submit(form, url(), 'get', { preserveScroll : true }, true)">
                </v-button>

            </div>

        </div>

    </div>
</template>

<script>
    import ButtonComponent from './button.vue';
    import PeriodComponent from './period.vue';
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
            'v-period'   : PeriodComponent,
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

            attributes[this.source.search.order_key] = System.Browser.queryString(this.source.search.order_key)
                ? parseInt(System.Browser.queryString(this.source.search.order_key))
                : '';

            this.source.search.filtering.forEach(field => {
                attributes[field.id] = Is.array(field.control) && field.control[0] === 'DropDown'
                    ? parseInt(System.Browser.queryString(field.id))
                    : System.Browser.queryString(field.id);
            });

            this.form = System.Form.create(attributes);
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
                if (System.Browser.queryString(this.source.search.order_key)) {
                    return true;
                }

                return !! this.source.search.filtering
                    .map(field => System.Browser.queryString(field.id))
                    .filter(field => field)
                    .length;
            },

            /**
             * Generate the URL to send the request to.
             *
             */
            url()
            {
                return `${window.location.origin}${window.location.pathname}`
            },
        },
    }
</script>