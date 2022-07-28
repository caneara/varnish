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
            { text : 'Light / Dark', link : '/pages/dark-mode' },
            { text : 'Shared API',   link : '/pages/shared-api' },
        ],
    }, {
        text  : 'Components',
        items : [
            { text : 'Error',  link : '/pages/error' },
            { text : 'Writer', link : '/pages/writer' },
        ],
    }, {
        text  : 'Miscellanous',
        items : [
            { text : 'Credits', link : '/pages/credits' },
        ],
    },
];

let head = [

    // Meta
    ['meta', { property : 'og:title',            content : 'Lumeno UI' }],
    ['meta', { property : 'og:description',      content : 'A library of UI components built using Vue.js and TailwindCSS.' }],
    ['meta', { property : 'og:url',              content : 'https://ui.lumeno.dev' }],
    ['meta', { property : 'og:image',            content : 'https://ui.lumeno.dev/card.png' }],
    ['meta', { property : 'og:secure_url',       content : 'https://ui.lumeno.dev/card.png' }],
    ['meta', { name     : 'twitter:card',        content : 'summary_large_image' }],
    ['meta', { name     : 'twitter:title',       content : 'Lumeno UI' }],
    ['meta', { name     : 'twitter:description', content : 'A library of UI components built using Vue.js and TailwindCSS.' }],
    ['meta', { name     : 'twitter:image',       content : 'https://ui.lumeno.dev/card.png' }],
    ['meta', { name     : 'twitter:creator',     content : '@LumenoDev' }],
    ['meta', { name     : 'twitter:site',        content : '@LumenoDev' }],

    // Icons
    ['link', { rel : 'icon', href : '/logo.png', type : 'image/png' }],

    // Styles
    ['style', { type : 'text/css' }, "@import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css';"],

];

let theme = {
    logo        : '/logo.png',
    sidebar     : sidebar,
    socialLinks : [
        { icon : 'github',   link : 'https://github.com/LumenoDev/ui' },
        { icon : 'twitter',  link : 'https://twitter.com/LumenoDev' },
        { icon : 'linkedin', link : 'https://www.linkedin.com/company/lumeno/' },
    ],
    editLink    : {
        text    : 'Edit page',
        pattern : 'https://github.com/LumenoDev/ui/edit/main/docs/:path',
    },
};

export default {
    head            : head,
    title           : 'Lumeno UI',
    description     : 'A library of UI components built using Vue.js and TailwindCSS.',
    lastUpdated     : false,
    themeConfig     : theme,
    ignoreDeadLinks : true,
}