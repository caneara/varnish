let sidebar = [
    {
        text  : 'Overview',
        items : [
            { text : 'Introduction', link : '/pages/introduction' },
            { text : 'Requirements', link : '/pages/requirements' },
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
        text  : 'Main Components',
        items : [
            { text : 'Badge',    link : '/pages/badge' },
            { text : 'Banner',   link : '/pages/banner' },
            { text : 'Button',   link : '/pages/button' },
            { text : 'DropDown', link : '/pages/dropdown' },
            { text : 'Notice',   link : '/pages/notice' },
            { text : 'Password', link : '/pages/password' },
            { text : 'Switch',   link : '/pages/switch' },
            { text : 'TextBox',  link : '/pages/textbox' },
            { text : 'Writer',   link : '/pages/writer' },
        ],
    }, {
        text  : 'Sub Components',
        items : [
            { text : 'Clear',    link : '/pages/clear' },
            { text : 'Empty',    link : '/pages/empty' },
            { text : 'Error',    link : '/pages/error' },
            { text : 'Label',    link : '/pages/label' },
            { text : 'Optional', link : '/pages/optional' },
        ],
    }, {
        text  : 'Products',
        items : [
            { text : 'Lumeno', link : 'https://lumeno.dev' },
            { text : 'TipSea', link : 'https://tipsea.app' },
        ],
    },
];

let head = [

    // Meta
    ['meta', { property : 'og:title',            content : 'Varnish' }],
    ['meta', { property : 'og:description',      content : 'A library of UI components built using Vue.js and TailwindCSS.' }],
    ['meta', { property : 'og:url',              content : 'https://varnish.caneara.com' }],
    ['meta', { property : 'og:image',            content : 'https://varnish.caneara.com/card.png' }],
    ['meta', { property : 'og:secure_url',       content : 'https://varnish.caneara.com/card.png' }],
    ['meta', { name     : 'twitter:card',        content : 'summary_large_image' }],
    ['meta', { name     : 'twitter:title',       content : 'Varnish' }],
    ['meta', { name     : 'twitter:description', content : 'A library of UI components built using Vue.js and TailwindCSS.' }],
    ['meta', { name     : 'twitter:image',       content : 'https://varnish.caneara.com/card.png' }],
    ['meta', { name     : 'twitter:creator',     content : '@CanearaHQ' }],
    ['meta', { name     : 'twitter:site',        content : '@CanearaHQ' }],

    // Icons
    ['link', { rel : 'icon', href : '/logo.png', type : 'image/png' }],

    // Styles
    ['style', { type : 'text/css' }, "@import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css';"],

];

let theme = {
    logo        : '/logo.png',
    sidebar     : sidebar,
    socialLinks : [
        { icon : 'github',   link : 'https://github.com/caneara/varnish' },
        { icon : 'twitter',  link : 'https://twitter.com/CanearaHQ' },
    ],
    editLink    : {
        text    : 'Edit page',
        pattern : 'https://github.com/caneara/varnish/edit/main/docs/:path',
    },
};

export default {
    head            : head,
    title           : 'Varnish',
    description     : 'A library of UI components built using Vue.js and TailwindCSS.',
    lastUpdated     : false,
    themeConfig     : theme,
    ignoreDeadLinks : true,
}