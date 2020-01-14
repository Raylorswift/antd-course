/**
 * 配置文件
 */

export default {
    singular: true,
    plugins: [
        ['umi-plugin-react', {
            antd: true
        }],
    ],
    // 使用配置式的路由
    routes: [
        {
            path: '/',
            component: './HelloWorld',
        },
        {
            path: '/test01',
            component: './ControlItem',
        }
    ],
};