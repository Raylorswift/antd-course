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
                { path: 'puzzlecards', component: './puzzlecards' }, // dva model (mapStateToProps, mapDispatchToProps)
                { path: 'List', component: '../page/list' },
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

    // 反向代理
    proxy: {
        'dev': {
            target: 'https://08ad1pao69.execute-api.us-east-1.amazonaws.com',
            changeOrigin: true,
        },
    },
};