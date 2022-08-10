<template>
    <div class="demo py-[40px] px-[64px]">

        <!-- Title -->
        <h1 class="text-[32px] font-semibold -tracking-[.7px]">
            Metric - Playground
        </h1>

        <!-- First Metric -->
        <v-metric :scrollDelay="1000"
                 :value="first_metric"
                 :beforeScroll="beforeScroll()">
        </v-metric>

        <!-- Gap -->
        <div class="gap bg-green-700/[.30] min-h-[1500px] p-6">
            This is a gap created to test scrolling to the first metric.
            Scroll to the bottom of the page to find the test button.
        </div>

        <!-- Second Metric -->
        <v-metric :value="second_metric"></v-metric>

        <!-- Gap -->
        <div class="gap bg-green-700/[.30] min-h-[1500px] p-6">
            This is a gap created to test scrolling to the first metric.
            Scroll to the bottom of the page to find the test button.
        </div>

        <!-- Third Metric -->
        <v-metric :value="third_metric"></v-metric>

        <!-- Button -->
        <button @click="scrollToFirstMetric()"
                class="bg-sky-700 text-white px-3 py-1 mt-6 mb-12 rounded-md">

            <!-- Text -->
            Show & scroll to first metric

        </button>

    </div>
</template>

<script>
    import MetricComponent from '../../../src/components/metric.vue';

    export default
    {
        components : {
            'v-metric' : MetricComponent,
        },

        data() {
            return {
                first_metric  : 'First metric',
                second_metric : 'Second metric',
                third_metric  : '',
            }
        },

        methods :
        {
            beforeScroll()
            {
                document.querySelectorAll('.gap').forEach(
                    element => element.classList.add('bg-purple-700/[.30]')
                );
            },

            scrollToFirstMetric()
            {
                this.first_metric  = 'Changed first metric';
                this.second_metric = 'Changed second metric';
                this.third_metric  = 'Changed third metric';
            },
        },
    }
</script>