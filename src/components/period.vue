<template>
    <div class="varnish-period varnish-font">

        <!-- Hidden -->
        <input :id="name"
               :name="name"
               type="hidden"
               :value="modelValue">

        <!-- TextBox -->
        <v-textbox :icon="icon"
                   :label="label"
                   :readOnly="true"
                   @change="clear()"
                   :optional="optional"
                   :modelValue="format"
                   :id="`${name}_text_box`"
                   :dusk="`${name}_text_box`"
                   :optionalText="optionalText"
                   @click="() => { to = ''; show_from_calendar = true }">
        </v-textbox>

        <!-- From -->
        <v-datetime type="date"
                    v-model="from"
                    :locale="locale"
                    :minDate="minDate"
                    :maxDate="maxDate"
                    :hideTextbox="true"
                    :showCalendar="show_from_calendar"
                    @lostFocus="show_from_calendar = false"
                    @change="() => { show_from_calendar = false; show_to_calendar = true }">
        </v-datetime>

        <!-- To -->
        <v-datetime type="date"
                    v-model="to"
                    :minDate="from"
                    :locale="locale"
                    :startDate="from"
                    :maxDate="maxDate"
                    :hideTextbox="true"
                    :showCalendar="show_to_calendar"
                    @change="show_to_calendar = false"
                    @lostFocus="show_to_calendar = false">
        </v-datetime>

        <!-- Error -->
        <v-error :value="fault"></v-error>

    </div>
</template>

<script>
    import { DateTime } from 'luxon';
    import ErrorComponent from './error.vue';
    import Utilities from '../mixins/Utilities';
    import TextBoxComponent from './textbox.vue';
    import Foundation from '../mixins/Foundation';
    import DateTimeComponent from './datetime.vue';

    export default
    {
        /**
         * Define the mixins.
         *
         */
        mixins : [
            Utilities,
            Foundation,
        ],

        /**
         * Define the components.
         *
         */
        components : {
            'v-datetime' : DateTimeComponent,
            'v-error'    : ErrorComponent,
            'v-textbox'  : TextBoxComponent,
        },

        /**
         * Define the data model.
         *
         */
        data() { return {
            to   : '',
            from : '',

            show_to_calendar   : false,
            show_from_calendar : false,
        }},

        /**
         * Define the public properties.
         *
         */
        props : {
            'locale'  : { type : String, default : 'en-US' },
            'maxDate' : { type : String, default : '2100-12-31' },
            'minDate' : { type : String, default : '1900-01-01' },
        },

        /**
         * Define the computed properties.
         *
         */
        computed :
        {
            /**
             * Render the component's value in a human-readable format.
             *
             */
            format()
            {
                let result = '';

                if (! this.blank(this.from)) {
                    result += `${DateTime.fromISO(this.from, { locale : this.locale }).toLocaleString(DateTime.DATE_MED)} - `;
                }

                if (! this.blank(this.to)) {
                    result += DateTime.fromISO(this.to, { locale : this.locale }).toLocaleString(DateTime.DATE_MED);
                }

                return result;
            },
        },

        /**
         * Define the watch methods.
         *
         */
        watch :
        {
            /**
             * Watch the 'from' property.
             *
             */
            from : function(current, previous)
            {
                if (this.blank(this.from) && this.blank(this.to)) {
                    return this.change('');
                }

                this.change(`${this.from}|${this.to}`)
            },

            /**
             * Watch the 'modelValue' property.
             *
             */
            modelValue : function(current, previous)
            {
                if (this.blank(current)) return;

                this.from = current.split('|')[0];
                this.to = current.split('|')[1];
            },

            /**
             * Watch the 'to' property.
             *
             */
            to : function(current, previous)
            {
                if (this.blank(this.from) && this.blank(this.to)) {
                    return this.change('');
                }

                this.change(`${this.from}|${this.to}`)
            },
        },

        /**
         * Execute actions when the component is instantiated.
         *
         */
        created()
        {
            if (this.blank(this.modelValue)) return;

            this.from = this.modelValue.split('|')[0];
            this.to = this.modelValue.split('|')[1];
        },

		/**
		 * Define the supporting methods.
		 *
		 */
		methods :
        {
            /**
             * Reset the component to a blank state.
             *
             */
            clear()
            {
                this.to   = '';
                this.from = '';

                this.show_from_calendar = false;
                this.show_to_calendar   = false;

                this.change('');
            },
        }
    }
</script>