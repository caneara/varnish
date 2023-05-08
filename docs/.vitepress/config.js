let sidebar = [
    {
        text  : 'Overview',
        items : [
            { text : 'Introduction', link : '/pages/introduction' },
            { text : 'Installation', link : '/pages/installation' },
        ],
    }, {
        text  : 'Getting Started',
        items : [
            { text : 'Fonts',              link : '/pages/fonts' },
            { text : 'Light / Dark',       link : '/pages/dark-mode' },
            { text : 'Foundation',         link : '/pages/foundation' },
            { text : 'Browser Automation', link : '/pages/browser-automation' },
        ],
    }, {
        text  : 'Forms',
        items : [
            { text : 'Button',    link : '/pages/button' },
            { text : 'DateTime',  link : '/pages/datetime' },
            { text : 'DropDown',  link : '/pages/dropdown' },
            { text : 'Password',  link : '/pages/password' },
            { text : 'Period',    link : '/pages/period' },
            { text : 'Sticker',   link : '/pages/sticker' },
            { text : 'Switch',    link : '/pages/switch' },
            { text : 'Tags',      link : '/pages/tags' },
            { text : 'TextBox',   link : '/pages/textbox' },
        ],
    }, {
        text  : 'Dialogs',
        items : [
            { text : 'Confirm',      link : '/pages/confirm' },
            { text : 'Modal',        link : '/pages/modal' },
            { text : 'Notification', link : '/pages/notification' },
            { text : 'Prompt',       link : '/pages/prompt' },
            { text : 'Share',        link : '/pages/share' },
            { text : 'Tip',          link : '/pages/tip' },
        ],
    }, {
        text  : 'Interface',
        items : [
            { text : 'Alert',    link : '/pages/alert' },
            { text : 'Badge',    link : '/pages/badge' },
            { text : 'Banner',   link : '/pages/banner' },
            { text : 'Cards',    link : '/pages/cards' },
            { text : 'Menu',     link : '/pages/menu' },
            { text : 'Metric',   link : '/pages/metric' },
            { text : 'Progress', link : '/pages/progress' },
            { text : 'Tabs',     link : '/pages/tabs' },
        ],
    }, {
        text  : 'Components',
        items : [
            { text : 'Clear',     link : '/pages/clear' },
            { text : 'Empty',     link : '/pages/empty' },
            { text : 'Error',     link : '/pages/error' },
            { text : 'Label',     link : '/pages/label' },
            { text : 'Optional',  link : '/pages/optional' },
            { text : 'Remaining', link : '/pages/remaining' },
        ],
    },
];

let head = [

    // Meta
    ['meta', { property : 'og:title',            content : 'Varnish UI' }],
    ['meta', { property : 'og:description',      content : 'A library of UI components built using Vue.js and TailwindCSS.' }],
    ['meta', { property : 'og:url',              content : 'https://varnish.caneara.com' }],
    ['meta', { property : 'og:image',            content : 'https://varnish.caneara.com/card.png' }],
    ['meta', { property : 'og:secure_url',       content : 'https://varnish.caneara.com/card.png' }],
    ['meta', { name     : 'twitter:card',        content : 'summary_large_image' }],
    ['meta', { name     : 'twitter:title',       content : 'Varnish UI' }],
    ['meta', { name     : 'twitter:description', content : 'A library of UI components built using Vue.js and TailwindCSS.' }],
    ['meta', { name     : 'twitter:image',       content : 'https://varnish.caneara.com/card.png' }],

    // Icons
    ['link', { rel : 'icon', href : '/logo.png', type : 'image/png' }],

    // Styles
    ['style', { type : 'text/css' }, "@import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css';"],

];

let theme = {
    logo        : '/logo.png',
    sidebar     : sidebar,
    socialLinks : [
        { icon : 'github', link : 'https://github.com/caneara/varnish' },
    ],
    editLink    : {
        text    : 'Edit page',
        pattern : 'https://github.com/caneara/varnish/edit/main/docs/:path',
    },
};

export default {
    head            : head,
    title           : 'Varnish UI',
    description     : 'A library of UI components built using Vue.js and TailwindCSS.',
    lastUpdated     : false,
    themeConfig     : theme,
    ignoreDeadLinks : true,
}
