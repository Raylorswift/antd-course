/**
 * 配置文件
 */

export default {
    singular: true,
    plugins: [
        ['umi-plugin-react', {
            antd: true,
            dva: true,
        }],
    ],
    // 使用配置式的路由
    routes: [
        {
            path: '/',
            component: '../layout',
            routes: [
                { path: 'puzzlecards', component: './puzzlecards' },
                {
                    path: '/helloworld',
                    component: './HelloWorld',
                },
                {
                    path: '/dashboard',
                    routes: [
                        { path: '/dashboard/analysis', component: 'Dashboard/Analysis' },
                        { path: '/dashboard/monitor', component: 'Dashboard/Monitor' },
                        { path: '/dashboard/workplace', component: 'Dashboard/Workplace' },
                    ],
                },
            ],
        },
    ],
};