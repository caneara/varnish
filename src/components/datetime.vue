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
                         class="varnish-day flex justify-center"
                         :key="`${day.year}_${day.month}_${day.ordinal}`"
                         :class="day.enabled ? 'text-gray-700 dark:text-gray-400 cursor-pointer group' : 'text-gray-300 dark:text-gray-700 pointer-events-none'">

                        <!-- Ordinal -->
                        <div class="varnish-ordinal h-[28px] w-[28px] text-[14px] text-center rounded-full transition duration-300 pt-[7px]"
                             :class="[day.today ? 'font-semibold text-sky-600 dark:text-sky-400' : '', day.selected ? 'bg-emerald-600/[.30] dark:bg-emerald-600/[.60] dark:text-gray-300' : 'group-hover:bg-emerald-600/[.30] dark:group-hover:bg-emerald-600/[.60] dark:group-hover:text-gray-300']">

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

                <!-- Hour, Minute, Seconds -->
                <div class="varnish-selector-minute-hour-second flex items-center ">

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

                    <!-- Separator -->
                    <span v-if="showSeconds"
                          class="varnish-separator relative -top-[1px] ml-[3px] mr-1">

                        <!-- Text -->
                        :

                    </span>

                    <!-- Second -->
                    <select v-if="showSeconds"
                            ref="selector_second"
                            @change="selectTime()"
                            :id="`${name}_select_second`"
                            class="varnish-selector-second bg-inherit font-[650] text-[15px] text-gray-800 dark:text-gray-300 leading-normal -tracking-[.2px]">

                        <!-- Options -->
                        <option :key="second"
                                :value="second"
                                v-for="second in seconds"
                                :selected="second === calendar.second.toString().padStart(2, '0')">

                            <!-- Text -->
                            {{ second }}

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
    import { DateTime, Interval } from 'luxon';
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
            limits    : { minimum : DateTime.fromISO(this.minDate), maximum : DateTime.fromISO(this.maxDate) },
            minutes   : Array(60).fill('').map((v, i) => `${i}`.padStart(2, '0')),
            months    : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            seconds   : Array(60).fill('').map((v, i) => `${i}`.padStart(2, '0')),
            selectors : { date : false, time : false },
            value     : null,
            week      : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        }},

        /**
         * Define the public properties.
         *
         */
        props : {
            'locale'      : { type : String,  default : 'en-US' },
            'maxDate'     : { type : String,  default : '2100-12-31' },
            'meridiem'    : { type : Boolean, default : false },
            'minDate'     : { type : String,  default : '1900-01-01' },
            'showSeconds' : { type : Boolean, default : false },
            'type'        : { type : String,  default : 'date' },
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
                        enabled  : false,
                        ordinal  : this.calendar.startOf('month').minus({ months : 1 }).endOf('month').minus({ days : this.calendar.weekday - ordinal - 2 }).day,
                        selected : false,
                        today    : false,
                    });
                }

                for (let ordinal = 1; ordinal <= this.calendar.daysInMonth; ordinal++) {
                    days.push({
                        date     : this.calendar.set({ day : ordinal }).toISODate(),
                        enabled  : this.withinLimits(this.calendar.set({ day : ordinal })),
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
                let preset = this.showSeconds ? DateTime.TIME_24_WITH_SECONDS : DateTime.TIME_24_SIMPLE;

                if (this.blank(this.modelValue)) {
                    return '';
                }

                if (this.type === 'date') {
                    return this.value.toLocaleString(DateTime.DATE_MED);
                }

                if (this.type === 'time') {
                    return this.value.toLocaleString(preset);
                }

                if (this.type === 'datetime') {
                    return this.value.toLocaleString(DateTime.DATE_MED) + ' - ' +
                        this.value.toLocaleString(preset) +
                        (this.meridiem ? ` (${this.value.toFormat('a').toLowerCase()})` : '');
                }

                throw 'Unknown type format';
            },

            /**
             * Determine the range of years that are permitted.
             *
             */
            years()
            {
                let range = Array(this.limits.maximum.year - this.limits.minimum.year + 1);

                return range.fill('').map((v, i) => this.limits.maximum.year - i).reverse();
            },
        },

        /**
         * Define the watch methods.
         *
         */
        watch :
        {
            /**
             * Watch the 'maxDate' property.
             *
             */
            maxDate : function(current, previous)
            {
                this.limits.maximum = DateTime.fromISO(current, { locale : this.locale });
            },

            /**
             * Watch the 'minDate' property.
             *
             */
            minDate : function(current, previous)
            {
                this.limits.minimum = DateTime.fromISO(current, { locale : this.locale });
            },

            /**
             * Watch the 'modelValue' property.
             *
             */
            modelValue : function(current, previous)
            {
                this.value = this.blank(current) ? null : DateTime.fromISO(current, { locale : this.locale });
            },
        },

        /**
         * Execute actions when the component is instantiated.
         *
         */
        created()
        {
            if (this.blank(this.modelValue)) return;

            this.value = DateTime.fromISO(this.modelValue, { locale : this.locale });
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
             * Adjust the calendar so that it shows the given month.
             *
             */
            goToMonth(month)
            {
                if (this.withinLimits(month)) {
                    this.calendar = month;
                }
            },

            /**
             * Adjust the calendar so that it shows the next month.
             *
             */
            goToNextMonth()
            {
                this.goToMonth(this.calendar.startOf('month').plus({ months : 1 }));
            },

            /**
             * Adjust the calendar so that it shows the previous month.
             *
             */
            goToPreviousMonth()
            {
                this.goToMonth(this.calendar.startOf('month').minus({ months : 1 }));
            },

	    	/**
	    	 * Determine if the component currently has the user's attention.
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
             * Respond to the selection of a revised date.
             *
             */
            selectDate(date)
            {
                if (this.type === 'date') {
                    return this.change(date);
                }

                this.selectTime(DateTime.fromISO(date).setZone('UTC'));
            },

            /**
             * Respond to the selection of a revised time.
             *
             */
            selectTime(date = null)
            {
                let changes = {
                    hours   : this.$refs.selector_hour.value,
                    minutes : this.$refs.selector_minute.value,
                };

                if (this.showSeconds) {
                    changes.seconds = this.$refs.selector_second.value;
                }

                date = date ?? this.value.set(changes).setZone('UTC');

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

            /**
             * Determine if the given date falls between the minimum and maximum.
             *
             */
            withinLimits(date)
            {
                let range = Interval.fromDateTimes(this.limits.minimum, this.limits.maximum);

                return range.contains(date);
            },
        }
    }
</script>