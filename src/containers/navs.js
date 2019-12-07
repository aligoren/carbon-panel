const navs = [
    {
        title: 'Dashboard',
        href: '/',
        icon: 'fas fa-tachometer-alt',
        badge: {
            text: 'NEW'
        }
    },
    {
        title: 'Theme',
        header: true,
        hiddenOnCollapse: true
    },
    {
        title: 'Colors',
        href: '/theme/colors',
        icon: 'fas fa-tint',
    },
    {
        title: 'Typography',
        href: '/theme/typography',
        icon: 'fas fa-pen',
    },
    {
        title: 'Components',
        header: true,
        hiddenOnCollapse: true
    },
    {
        title: 'Base',
        icon: 'fas fa-puzzle-piece',
        child: [
            {
                title: 'Breadcrumbs',
                href: '/base/breadcrumbs',
                icon: 'fas fa-puzzle-piece',
            },
            {
                title: 'Cards',
                href: '/base/cards',
                icon: 'fas fa-puzzle-piece',
            },
            {
                title: 'Carousels',
                href: '/base/carousels',
                icon: 'fas fa-puzzle-piece',
            },
            {
                title: 'Collapses',
                href: '/base/collapses',
                icon: 'fas fa-puzzle-piece',
            },
            {
                title: 'Header',
                href: '/base/header',
                icon: 'fas fa-puzzle-piece',
            },
            {
                title: 'List Groups',
                href: '/base/list-groups',
                icon: 'fas fa-puzzle-piece',
            },
            {
                title: 'Navs',
                href: '/base/navs',
                icon: 'fas fa-puzzle-piece',
            },
            {
                title: 'Navbars',
                href: '/base/navbars',
                icon: 'fas fa-puzzle-piece',
            },
            {
                title: 'Paginations',
                href: '/base/paginations',
                icon: 'fas fa-puzzle-piece',
            },
            {
                title: 'Popovers',
                href: '/base/popovers',
                icon: 'fas fa-puzzle-piece',
            },
            {
                title: 'Progress Bars',
                href: '/base/progress-bars',
                icon: 'fas fa-puzzle-piece',
            },
            {
                title: 'Switches',
                href: '/base/switches',
                icon: 'fas fa-puzzle-piece',
            },
            {
                title: 'Tabs',
                href: '/base/tabs',
                icon: 'fas fa-puzzle-piece',
            },
            {
                title: 'Tooltips',
                href: '/base/tooltips',
                icon: 'fas fa-puzzle-piece',
            },
        ]
    },
    {
        title: 'Buttons',
        icon: 'fas fa-paper-plane',
        child: [
            {
                title: 'Buttons',
                href: '/buttons/standart-buttons',
                icon: 'fas fa-paper-plane',
            },
            {
                title: 'Button Dropdowns',
                href: '/buttons/dropdowns',
                icon: 'fas fa-paper-plane',
            },
            {
                title: 'Button Groups',
                href: '/buttons/button-groups',
                icon: 'fas fa-paper-plane',
            },
            {
                title: 'Brand Buttons',
                href: '/buttons/brand-buttons',
                icon: 'fas fa-paper-plane',
            },
        ]
    },
    {
        title: 'Charts',
        href: '/charts',
        icon: 'fas fa-chart-pie',
    },
    {
        title: 'Editors',
        icon: 'fas fa-code',
        child: [
            {
                title: 'Code Editors',
                href: '/editors/code-editors',
                icon: 'fas fa-code',
            },
            {
                title: 'Text Editors',
                href: '/editors/text-editors',
                icon: 'fas fa-code',
            },
        ]
    },
    {
        title: 'Forms',
        icon: 'fas fa-align-justify',
        child: [
            {
                title: 'Basic Forms',
                href: '/forms/basic-forms',
                icon: 'fas fa-align-justify',
            },
            {
                title: 'Advanced Forms',
                href: '/forms/advanced-forms',
                icon: 'fas fa-align-justify',
            },
            {
                title: 'Validation Forms',
                href: '/forms/validation-forms',
                icon: 'fas fa-align-justify',
            },
        ]
    },
    {
        title: 'Google Maps',
        href: '/google-maps',
        icon: 'fas fa-map',
    },
    {
        title: 'Icons',
        icon: 'fas fa-star',
        child: [
            {
                title: 'Inkline Icons',
                href: '/icons/inkline-icons',
                icon: 'fas fa-star',
            },
            {
                title: 'Font Awesome',
                href: '/icons/font-awesome',
                icon: 'fas fa-star',
            },
            {
                title: 'Brands',
                href: '/icons/brands',
                icon: 'fas fa-star',
            },
            {
                title: 'Flags',
                href: '/icons/flags',
                icon: 'fas fa-star',
            }
        ]
    },
    {
        title: 'Notifications',
        icon: 'fas fa-bell',
        child: [
            {
                title: 'Alerts',
                href: '/notifications/alerts',
                icon: 'fas fa-bell',
            },
            {
                title: 'Badges',
                href: '/notifications/badges',
                icon: 'fas fa-bell',
            },
            {
                title: 'Modals',
                href: '/notifications/modals',
                icon: 'fas fa-bell',
            },
            {
                title: 'Toaster',
                href: '/notifications/toaster',
                icon: 'fas fa-bell',
            },
        ]
    },
    {
        title: 'Plugins',
        icon: 'fas fa-plug',
        child: [
            {
                title: 'Draggable',
                href: '/plugins/draggable',
                icon: 'fas fa-arrows-alt'
            },
            {
                title: 'Calendar',
                href: '/plugins/calendar',
                icon: 'fas fa-calendar-alt'
            },
            {
                title: 'Spinners',
                href: '/plugins/spinners',
                icon: 'fas fa-spinner fa-spin'
            },
        ]
    },
    {
        title: 'Tables',
        icon: 'fas fa-list',
        child: [
            {
                title: 'Basic Tables',
                href: '/tables/basic-tables',
                icon: 'fas fa-list'
            },
            {
                title: 'Advanced Tables',
                href: '/plugins/advanced-tables',
                icon: 'fas fa-list'
            }
        ]
    },
    {
        title: 'Widgets',
        href: '/widgets',
        icon: 'fas fa-boxes'
    },
    {
        title: 'Extras',
        header: true,
        hiddenOnCollapse: true
    },
    {
        title: 'Pages',
        icon: 'far fa-star',
        child: [
            {
                title: 'Login',
                href: '/pages/login',
                icon: 'far fa-star'
            },
            {
                title: 'Register',
                href: '/pages/register',
                icon: 'far fa-star'
            },
            {
                title: 'Error 404',
                href: '/pages/404',
                icon: 'far fa-star'
            },
            {
                title: 'Error 500',
                href: '/pages/500',
                icon: 'far fa-star'
            },
        ]
    }
]

export default navs