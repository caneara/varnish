<template>
    <div class="varnish-menu varnish-font items-center ml-3 flex relative">

        <!-- Trigger -->
        <div ref="trigger"
             @click="open = ! open"
             :dusk="`menu-${id.toLowerCase()}`"
             class="varnish-trigger text-[13px] text-gray-500 hover:text-gray-800 dark:hover:text-white uppercase whitespace-nowrap select-none cursor-pointer transition duration-300 relative top-[1px]">

            <!-- Icon -->
            <i class="varnish-icon fas fa-ellipsis-h text-[17px]"></i>

        </div>

        <!-- Drawer -->
        <div :class="[position, open ? 'opacity-100 scale-100 pointer-events-auto z-[20]' : 'opacity-0 scale-90 pointer-events-none -z-[1]']"
             class="varnish-drawer bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 flex flex-col transition-all duration-300 rounded absolute py-[6px]">

            <!-- Slot -->
            <div class="varnish-item"
                 v-for="item in (items.filter(item => item.show).length ? items : empty)">

                <!-- Link -->
                <span v-if="item.show && item.type === 'link'"
                      @click.stop="open = false; item['action']()"
                      :dusk="`menu-${id.toLowerCase()}-${item.id}`"
                      class="varnish-link hover:bg-gray-200/[.75] dark:hover:bg-gray-600 text-[16px] text-gray-700/[.85] hover:text-gray-700 flex items-center select-none whitespace-nowrap cursor-pointer transition duration-300 pl-3 pr-6 py-[10px]">

                    <!-- Icon -->
                    <i :class="item.icon"
                       v-if="! blank(item.icon)"
                       class="varnish-icon fa-fw text-[17px] text-gray-400 dark:text-gray-400/[.70] relative top-[.5px] mr-[10px]">
                    </i>

                    <!-- Text -->
                    <span class="varnish-label text-gray-700 dark:text-gray-300">
                        {{ item.label }}
                    </span>

                </span>

                <!-- Separator -->
                <div v-if="item.show && item.type === 'separator'"
                     class="varnish-separator border-t border-gray-200 dark:border-gray-600 my-[6px]">
                </div>

                <!-- Empty -->
                <div v-if="item.show && item.type === 'empty'"
                     class="varnish-empty text-[13px] text-gray-600/[.65] uppercase select-none whitespace-nowrap cursor-pointer px-6 pt-2 pb-[5px]">

                    <!-- Text -->
                    {{ emptyText }}

                </div>

            </div>

        </div>

    </div>
</template>

<script>
    import Container from '../mixins/Container';
    import Utilities from '../mixins/Utilities';

    export default
    {
        /**
         * Define the mixins.
         *
         */
        mixins : [
            Container,
            Utilities,
        ],

        /**
         * Define the data model.
         *
         */
        data() { return {
            empty    : [{ type : 'empty', show : true }],
            open     : false,
            position : '',
        }},

        /**
         * Define the public properties.
         *
         */
        props : {
            'emptyText' : { type : String, default : 'No Options Available' },
            'id'        : { type : String, default : 'Menu' },
            'items'     : { type : Array,  default : [] },
        },

        /**
         * Execute actions when the component is mounted to the DOM.
         *
         */
        mounted()
        {
            this.setOrientation();
        },

        /**
         * Define the watch methods.
         *
         */
        watch :
        {
            /**
             * Watch the 'items' data attribute.
             *
             */
            items : function(current, previous)
            {
                this.setOrientation();
            }
        },

        /**
         * Define the supporting methods.
         *
         */
        methods :
        {
	    	/**
	    	 * Determine if the component currently has the user's attention.
	    	 *
	    	 */
	    	hasUserAttention()
	    	{
                return this.open;
	    	},

	    	/**
	    	 * Respond to the component losing the user's attention.
	    	 *
	    	 */
	    	lostUserAttention()
	    	{
                this.open = false;
	    	},

            /**
             * Determine if the menu is too close to the bottom of the page.
             *
             */
            nearBottom()
            {
                let vertical = this.rectangle().bottom + (window.pageYOffset || document.body.scrollTop);

                return (document.body.scrollHeight - vertical - (this.items.length * 30)) <= 10;
            },

            /**
             * Determine if the menu is too close to the left of the page.
             *
             */
            nearLeft()
            {
                return (this.rectangle().left + (window.pageXOffset || document.body.scrollLeft)) <= 150;
            },

            /**
             * Retrieve the bounding rectangle for the trigger.
             *
             */
            rectangle()
            {
                return this.$refs.trigger.getBoundingClientRect();
            },

            /**
             * Assign the direction that the menu should expand to.
             *
             */
            setOrientation()
            {
                if (this.nearLeft() && this.nearBottom()) {
                    this.position = 'origin-bottom-left left-0 bottom-8';
                } else if (this.nearLeft()) {
                    this.position = 'origin-top-left left-0 top-8';
                } else if (this.nearBottom()) {
                    this.position = 'origin-bottom-right -right-3 bottom-8';
                } else {
                    this.position = 'origin-top-right -right-3 top-8';
                }
            },
        }
    }
</script>