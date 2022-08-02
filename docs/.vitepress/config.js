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
            { text : 'Fonts',        link : '/pages/fonts' },
            { text : 'Light / Dark', link : '/pages/dark-mode' },
            { text : 'Shared API',   link : '/pages/shared-api' },
        ],
    }, {
        text  : 'Components',
        items : [
            { text : 'Badge',  link : '/pages/badge' },
            { text : 'Error',  link : '/pages/error' },
            { text : 'Notice', link : '/pages/notice' },
            { text : 'Writer', link : '/pages/writer' },
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