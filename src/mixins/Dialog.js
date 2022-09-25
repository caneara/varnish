import { createApp } from 'vue';
import ShareComponent from '../components/share.vue';
import PromptComponent from '../components/prompt.vue';
import ConfirmComponent from '../components/confirm.vue';
import NotificationComponent from '../components/notification.vue';

export default
{
    /**
     * Define the components.
     *
     */
    components : {
        'v-confirm'       : ConfirmComponent,
        'v-notification'  : NotificationComponent,
        'v-prompt'        : PromptComponent,
        'v-share'         : ShareComponent,
    },

    /**
     * Define the data model.
     *
     */
    data() {
        return {
            dialogs : [],
        }
    },

    /**
     * Define the supporting methods.
     *
     */
    methods :
    {
        /**
         * Insert a blank container into the DOM.
         *
         */
        createDialogElement()
        {
            let div = document.createElement('div');

            div.id = `dialog-${parseInt(performance.now())}`;

            document.body.appendChild(div);

            this.dialogs.push({ container : null, id : div.id })

            return div.id;
        },

        /**
         * Remove the open dialog from the viewport.
         *
         */
        closeDialog(id)
        {
            this.dialogs.find(item => item.id === id).container._instance.props.visible = false;

            setTimeout(() => {
                this.dialogs.find(item => item.id === id).container.unmount();

                this.dialogs.find(item => item.id === id).container = undefined;

                document.body.removeChild(document.getElementById(id));
            }, 300);
        },

        /**
         * Request that the user confirm a particular action.
         *
         */
        confirm(title = null, summary = null)
        {
            let id = this.createDialogElement();

            return new Promise((resolve, reject) =>
            {
                let container = createApp(ConfirmComponent, {
                    summary : summary ?? 'Note that in most cases, this action is not reversible. If you need some help, then please contact support.',
                    title   : title ?? 'Are you sure you wish to proceed?',
                    visible : true,
                    onCancel : () => {
                        resolve(false);

                        this.closeDialog(id);
                    },
                    onContinue : () => {
                        resolve(true);

                        this.closeDialog(id);
                    },
                });

                this.mountDialog(id, container);
            });
        },

        /**
         * Attach the given container to the browser window.
         *
         */
        mountDialog(id, container)
        {
            this.dialogs.find(item => item.id === id).container = container;

            this.dialogs.find(item => item.id === id).container.mount(`#${id}`);
        },

        /**
         * Advise the user that something has happened.
         *
         */
        notify(type, message)
        {
            let id = this.createDialogElement();

            let container = createApp(NotificationComponent, {
                message : message,
                type    : type,
            });

            this.mountDialog(id, container);

            setTimeout(() => this.closeDialog(id), 3500);
        },

        /**
         * Request that the user provide some feedback.
         *
         */
        prompt(title = null, summary = null, label = null, fallback = '', lines = 1, maxLength = null)
        {
            let id = this.createDialogElement();

            return new Promise((resolve, reject) =>
            {
                let container = createApp(PromptComponent, {
                    label     : label ?? 'Your response',
                    lines     : lines,
                    maxLength : maxLength,
                    summary   : summary ?? 'In order to proceed, some input is required. Please enter it below, then press continue, or press cancel.',
                    title     : title ?? 'Awaiting your response...',
                    visible   : true,
                    onCancel : () => {
                        resolve(fallback);

                        this.closeDialog(id);
                    },
                    onContinue : (event) => {
                        resolve(['', null, undefined].includes(event) ? fallback : event);

                        this.closeDialog(id);
                    },
                });

                this.mountDialog(id, container);
            });
        },

        /**
         * Allow the user to share the given link.
         *
         */
        share(url)
        {
            let container = createApp(ShareComponent, {
                url     : url,
                visible : true,
            });

            this.mountDialog(this.createDialogElement(), container);
        },
    }
}