export default
{
    /**
     * Define the supporting methods.
     *
     */
    methods :
    {
        /**
         * Determine if the given value is empty.
         *
         */
        blank(value)
        {
            if (Array.isArray(value)) {
                return value.length === 0;
            }

            if (value instanceof Date) {
                return false;
            }

            if (typeof value === 'object' && value !== null) {
                return Object.keys(value).length === 0 &&
                    Object.getOwnPropertyNames(value).length === 0;
            }

            return ['', null, undefined].includes(value);
        },

        /**
         * Determine if the given value is not empty.
         *
         */
        filled(value)
        {
            return ! this.blank(value);
        },
    }
}