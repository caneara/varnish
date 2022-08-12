<template>
    <div class="varnish-datetime varnish-font min-w-[300px]">

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
                   :modelValue="format"
                   :id="`${name}_text_box`"
                   @click="showSelectors()">
        </v-textbox>

        <!-- Container -->
        <div v-if="selectors.date || selectors.time"
             class="varnish-container bg-white dark:bg-gray-800 border-l border-r border-b border-gray-300 dark:border-gray-700 rounded-b relative -top-[3px] pt-[3px]">

            <!-- Divider -->
            <div class="varnish-divider w-full h-[1px] border-t border-gray-300 dark:border-gray-700"></div>

            <!-- Date Selector -->
            <div v-if="selectors.date"
                 class="varnish-selector-date bg-gray-100/[.25] dark:bg-gray-800 p-6 pt-5">

                <!-- Head -->
                <div class="varnish-header flex items-center mb-4">

                    <!-- Back -->
                    <i title="Go to previous month"
                       @click="goToPreviousMonth()"
                       class="varnish-caret-left fas fa-caret-left text-gray-400 hover:text-gray-600 dark:text-gray-600 dark:hover:text-gray-400 transition duration-300 cursor-pointer">
                    </i>

                    <!-- Month & Year -->
                    <div class="varnish-selector-month-year flex justify-center flex-1">

                        <!-- Month -->
                        <select :id="`${name}_select_month`"
                                @change="calendar = calendar.set({ month : $event.target.value })"
                                class="varnish-selector-month bg-inherit font-[650] text-[15px] text-gray-800 dark:text-gray-300/[.80] leading-normal -tracking-[.2px] pr-[2px]">

                            <!-- Options -->
                            <option :key="index"
                                    :value="index + 1"
                                    v-for="(month, index) in months"
                                    :selected="(index + 1) === calendar.month">

                                <!-- Text -->
                                {{ month }}

                            </option>

                        </select>

                        <!-- Year -->
                        <select :id="`${name}_select_year`"
                                @change="calendar = calendar.set({ year : $event.target.value })"
                                class="varnish-selector-year bg-inherit font-[650] text-[15px] text-gray-800 dark:text-gray-300/[.80] leading-normal -tracking-[.2px]">

                            <!-- Options -->
                            <option :key="year"
                                    :value="year"
                                    v-for="year in years"
                                    :selected="year === calendar.year">

                                <!-- Text -->
                                {{ year }}

                            </option>

                        </select>

                    </div>

                    <!-- Forward -->
                    <i title="Go to next month"
                       @click="goToNextMonth()"
                       class="varnish-caret-right fas fa-caret-right text-gray-400 hover:text-gray-600 dark:text-gray-600 dark:hover:text-gray-400 transition duration-300 cursor-pointer">
                    </i>

                </div>

                <!-- Week -->
                <div class="varnish-week grid grid-cols-7 -mx-[10px]">

                    <!-- Day -->
                    <span :key="day"
                          v-for="day in week"
                          class="varnish-week-day text-[12px] text-gray-500/[.80] dark:text-gray-400/[.80] text-center">

                        <!-- Text -->
                        {{ day }}

                    </span>

                </div>

                <!-- Days -->
                <div class="varnish-days grid grid-cols-7 gap-y-4 pt-4 -mx-[10px]">

                    <!-- Day -->
                    <div v-for="day in daysInMonth"
                         @click="selectDate(day.date)"
                         :key="`${day.month}_${day.ordinal}`"
                         class="varnish-day flex justify-center"
                         :class="day.month === 'previous' ? 'text-gray-300 dark:text-gray-700 pointer-events-none' : 'text-gray-700 dark:text-gray-400 cursor-pointer group'">

                        <!-- Ordinal -->
                        <div class="varnish-ordinal h-[28px] w-[28px] text-[14px] text-center rounded-full transition duration-300 pt-[7px]"
                             :class="[day.today ? 'font-semibold text-sky-600 dark:text-sky-400' : '', day.selected ? 'bg-emerald-600/[.30] dark:bg-emerald-600/[.60]' : 'group-hover:bg-emerald-600/[.30] dark:group-hover:bg-emerald-600/[.60]']">

                            <!-- Text -->
                            {{ day.ordinal }}

                        </div>

                    </div>

                </div>

            </div>

            <!-- Divider -->
            <div v-if="selectors.date && selectors.time"
                 class="varnish-divider w-full h-[1px] border-t border-gray-300 dark:border-gray-700"></div>

            <!-- Time Selector -->
            <div v-if="selectors.time"
                 class="varnish-selector-time flex flex-col justify-between items-center bg-gray-100/[.25] dark:bg-gray-800 p-6 pb-[18px]">

                <!-- Time Zone -->
                <div :title="`UTC ${calendar.toFormat('Z')}`"
                     class="varnish-zone basis-full text-[13px] text-gray-600 dark:text-gray-400/[.80] truncate mb-[6px]">

                    <!-- Text -->
                    {{ calendar.toFormat('ZZZZZ') }}

                </div>

                <!-- Hour & Minute -->
                <div class="varnish-selector-minute-hour flex items-center ">

                    <!-- Hour -->
                    <select ref="selector_hour"
                            @change="selectTime()"
                            :id="`${name}_select_hour`"
                            class="varnish-selector-hour bg-inherit font-[650] text-[15px] text-gray-800 dark:text-gray-300 leading-normal -tracking-[.2px] pr-[2px]">

                        <!-- Options -->
                        <option :key="hour"
                                :value="hour"
                                v-for="hour in hours"
                                :selected="hour === calendar.hour.toString().padStart(2, '0')">

                            <!-- Text -->
                            {{ hour }}

                        </option>

                    </select>

                    <!-- Separator -->
                    <span class="varnish-separator relative -top-[1px] mr-1">
                        :
                    </span>

                    <!-- Minute -->
                    <select ref="selector_minute"
                            @change="selectTime()"
                            :id="`${name}_select_minute`"
                            class="varnish-selector-minute bg-inherit font-[650] text-[15px] text-gray-800 dark:text-gray-300 leading-normal -tracking-[.2px]">

                        <!-- Options -->
                        <option :key="minute"
                                :value="minute"
                                v-for="minute in minutes"
                                :selected="minute === calendar.minute.toString().padStart(2, '0')">

                            <!-- Text -->
                            {{ minute }}

                        </option>

                    </select>

                    <!-- Meridiem -->
                    <span v-if="meridiem"
                        class="varnish-meridiem text-[14px] text-gray-400 dark:text-gray-400/[.60] relative -top-[1px] ml-2">

                        <!-- Text -->
                        {{ value.toFormat('a').toLowerCase() }}

                    </span>

                </div>

            </div>

        </div>

    </div>
</template>

<script>
    import { DateTime } from 'luxon';
    import Container from '../mixins/Container';
    import Utilities from '../mixins/Utilities';
    import TextBoxComponent from './textbox.vue';
    import Foundation from '../mixins/Foundation';

    export default
    {
        /**
         * Define the mixins.
         *
         */
        mixins : [
            Container,
            Utilities,
            Foundation,
        ],

        /**
         * Define the components.
         *
         */
        components : {
            'v-textbox' : TextBoxComponent,
        },

        /**
         * Define the data model.
         *
         */
        data() { return {
            calendar  : null,
            hours     : Array(24).fill('').map((v, i) => `${i}`.padStart(2, '0')),
            minutes   : Array(60).fill('').map((v, i) => `${i}`.padStart(2, '0')),
            months    : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            selectors : { date : false, time : false },
            value     : null,
            week      : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            years     : Array(this.maxYear - this.minYear + 1).fill('').map((v, i) => this.maxYear - i).reverse(),
        }},

        /**
         * Define the public properties.
         *
         */
        props : {
            'locale'   : { type : String,  default : 'en-US' },
            'maxYear'  : { type : Number,  default : 2050 },
            'meridiem' : { type : Boolean, default : false },
            'minYear'  : { type : Number,  default : 1950 },
            'type'     : { type : String,  default : 'date' },
        },

        /**
         * Define the computed properties.
         *
         */
        computed :
        {
            /**
             * Retrieve each of the days in the calendar month.
             *
             */
            daysInMonth()
            {
                let days = [];

                for (let ordinal = 0; ordinal < (this.calendar.weekday - 1); ordinal++) {
                    days.push({
                        date     : null,
                        month    : 'previous',
                        ordinal  : this.calendar.startOf('month').minus({ months : 1 }).endOf('month').minus({ days : this.calendar.weekday - ordinal - 2 }).day,
                        selected : false,
                        today    : false,
                    });
                }

                for (let ordinal = 1; ordinal <= this.calendar.daysInMonth; ordinal++) {
                    days.push({
                        date     : this.calendar.set({ day : ordinal }).toISODate(),
                        month    : 'active',
                        ordinal  : ordinal,
                        selected : this.value.toISODate() === this.calendar.set({ day : ordinal }).toISODate(),
                        today    : DateTime.now().setLocale(this.locale).toISODate() === this.calendar.set({ day : ordinal }).toISODate(),
                    });
                }

                return days;
            },

            /**
             * Render the component's value in a human-readable format.
             *
             */
            format()
            {
                if (this.blank(this.modelValue)) {
                    return '';
                }

                if (this.type === 'date') {
                    return this.value.toLocaleString(DateTime.DATE_MED);
                }

                if (this.type === 'time') {
                    return this.value.toLocaleString(DateTime.TIME_24_SIMPLE);
                }

                if (this.type === 'datetime') {
                    return this.value.toLocaleString(DateTime.DATE_MED) + ' - ' +
                        this.value.toLocaleString(DateTime.TIME_24_SIMPLE) +
                        (this.meridiem ? ` (${this.value.toFormat('a').toLowerCase()})` : '');
                }

                throw 'Unknown type format';
            },
        },

        /**
         * Define the watch methods.
         *
         */
        watch :
        {
            /**
             * Watch the 'modelValue' property.
             *
             */
            modelValue : function(current, previous)
            {
                this.value = this.blank(current) ? null : this.parse(current);
            }
        },

        /**
         * Execute actions when the component is instantiated.
         *
         */
        created()
        {
            if (this.blank(this.modelValue)) return;

            this.value = this.parse(this.modelValue);
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
                this.lostUserAttention();

                this.change('');
            },

            /**
             * Adjust the calendar so that it shows the next month.
             *
             */
            goToNextMonth()
            {
                let revised = this.calendar.startOf('month').plus({ months : 1 })

                if (revised.year > this.maxYear) return;

                this.calendar = revised;
            },

            /**
             * Adjust the calendar so that it shows the previous month.
             *
             */
            goToPreviousMonth()
            {
                let revised = this.calendar.startOf('month').minus({ months : 1 });

                if (revised.year < this.minYear) return;

                this.calendar = revised;
            },

	    	/**
	    	 * Determine if the component is currently being used.
	    	 *
	    	 */
	    	hasUserAttention()
	    	{
                return this.selectors.date || this.selectors.time;
	    	},

	    	/**
	    	 * Respond to the component losing the user's attention.
	    	 *
	    	 */
	    	lostUserAttention()
	    	{
                this.selectors.date = false;
                this.selectors.time = false;
	    	},

            /**
             * Convert the given source into a DateTime object.
             *
             */
            parse(source)
            {
                if (source instanceof DateTime) {
                    return source.setLocale(this.locale);
                }

                if (source instanceof Date) {
                    return DateTime.fromJSDate(source, { locale : this.locale });
                }

                if (typeof source === 'string') {
                    return DateTime.fromISO(source, { locale : this.locale });
                }

                throw 'Unknown source format';
            },

            /**
             * Respond to the selection of a revised date.
             *
             */
            selectDate(date)
            {
                this.change(this.type === 'date' ? date : `${date}T${this.value.setZone('UTC').toISOTime()}`);
            },

            /**
             * Respond to the selection of a revised time.
             *
             */
            selectTime()
            {
                let changes = {
                    hours   : this.$refs.selector_hour.value,
                    minutes : this.$refs.selector_minute.value,
                };

                let date = this.value.set(changes).setZone('UTC');

                this.change(this.type === 'time' ? date.toISOTime() : date.toISO());
            },

            /**
             * Display the date and / or time selector for the user.
             *
             */
            showSelectors()
            {
                if (this.blank(this.value)) {
                    this.value = DateTime.now().startOf('day').setLocale(this.locale);
                }

                this.calendar = this.value;

                if (['date', 'datetime'].includes(this.type)) {
                    this.selectors.date = true;
                }

                if (['time', 'datetime'].includes(this.type)) {
                    this.selectors.time = true;
                }
            },
        }
    }
</script>