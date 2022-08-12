export default
{
    /**
     * Execute actions when the component is instantiated.
     *
     */
    created()
    {
        document.addEventListener('click', this.pageClicked);
    },

    /**
     * Execute actions when the component is unmounted.
     *
     */
    unmounted()
    {
        document.removeEventListener('click', this.pageClicked);
    },

    /**
     * Define the supporting methods.
     *
     */
    methods :
    {
        /**
         * Handle a click or tap on the page.
         *
         */
        pageClicked(event)
        {
            let trigger = this.$refs.trigger ? this.$refs.trigger : this.$el;

            if (! this.hasUserAttention() || trigger === event.target) return;

            trigger.contains(event.target) ? null : this.lostUserAttention();
        },
    }
}