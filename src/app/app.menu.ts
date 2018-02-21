import { MenuItem } from '../fw/services/menu.service';

export let initialMenuItems: Array<MenuItem> = [
	{
		text: 'Dashboard',
		icon: 'glyphicon-dashboard',
		route: '/authenticated/dashboard',
		submenu: null
	},
	{
		text: 'Countries',
		icon: 'glyphicon-flag',
		route: null,
		submenu: [
			{
				text: 'Select',
				icon: 'glyphicon-expand',
				route: null,
				submenu: [
					{
						text: 'Argentina',
						icon: 'glyphicon-flag',
						route: '/authenticated/countrydetail/Argentina/details',
						submenu: null
					},
					{
						text: 'USA',
						icon: 'glyphicon-flag',
						route: '/authenticated/countrydetail/USA/details',
						submenu: null
					},
					{
						text: 'India',
						icon: 'glyphicon-flag',
						route: '/authenticated/countrydetail/India/details',
						submenu: null
					}

				]
			},
			{
				text: 'Top 3',
				icon: 'glyphicon-flag',
				route: '/authenticated/countrylist/3',
				submenu: null
			},
			{
				text: 'Top 10',
				icon: 'glyphicon-flag',
				route: '/authenticated/countrylist/10',
				submenu: null
			},
			{
				text: 'All',
				icon: 'glyphicon-flag',
				route: '/authenticated/countrylist/0',
				submenu: null
			}
		]
	},
	{
		text: 'Maintance',
		icon: 'glyphicon-wrench',
		route: null,
		submenu: [
			{
				text: 'Country List',
				icon: 'glyphicon-th-list',
				route: '/authenticated/countrymaint',
				submenu: null
			},
			{
				text: 'Settings',
				icon: 'glyphicon-cog',
				route: '/authenticated/settings',
				submenu: null
			}
		]
	}
];