export default
{
    /**
     * Define the supporting methods.
     *
     */
    methods :
    {
        /**
         * Determine if an automated testing framework is running.
         *
         */
        automated()
        {
            let platforms = ['cypress', 'dusk'];

            for (const platform of platforms) {
                if (document.body.classList.contains(platform)) {
                    return true;
                }
            }

            return false;
        },

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
         * Assign the given value to the clipboard.
         *
         */
        copy(value, closure = null)
        {
            let promise = window.navigator.clipboard.writeText(value);

            return closure ? promise.then(() => closure()) : null;
        },
    }
}