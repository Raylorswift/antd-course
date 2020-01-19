/**
 * 模拟数据
 */

const random_jokes = [
    {
        setup: 'Do you know blackpink ?',
        punchline: 'the team is from four perfect girls.',
    },
    {
        setup: 'Do you know Taylor Swift ?',
        punchline: 'her boyfriend is Joe Alywn.',
    },
    {
        setup: '泰勒·斯威夫特 ?',
        punchline: '一个著名的欧美歌手～',
    },
    {
        setup: '泰勒·斯威夫特1 ?',
        punchline: '一个著名的欧美歌手1～',
    },
    {
        setup: '泰勒·斯威夫特2 ?',
        punchline: '一个著名的欧美歌手2～',
    },
];

let random_jokes_call_count = 0;

// 整个文件需要 export 出一个 js 对象。对象的 key 是由 <Http_verb> <Resource_uri> 构成的，
// 值是 function，当一个 ajax 调用匹配了 key 后，与之对应的 function 就会被执行。函数中我们调用 res.json 就可以给浏览器返回结果
export default {
    // 'get /dev/random_joke': function (req, res) {
    //     const responseObj = random_jokes[random_jokes_call_count % random_jokes.length];
    //     random_jokes_call_count += 1;
    //     setTimeout(() => {
    //         res.json(responseObj);
    //     }, 3000);
    // },

    // 模拟出错
    'get /dev/random_joke': function (req, res) {
        res.status(500);
        res.json({});
    },

    // 简单数据模拟 - 上面的模拟中，mock 具备动态改变、延时返回等能力，如果你不需要这个能力，也可以简单地使用对象。
    // 'get /dev/random_joke': {
    //     setup: 'Do you know Taylor Swift ?',
    //     punchline: 'her boyfriend is Joe Alywn.',
    // },
};