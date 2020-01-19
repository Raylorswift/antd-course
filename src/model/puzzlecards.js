/**
 * dva model
 */

 import request from '../util/request';
 import {
     message,
 } from 'antd';

 const delay = (millisecond) => {
     return new Promise((resolve) => {
        setTimeout(resolve, millisecond);
     });
 };

export default {
    namespace: 'puzzlecards',
    state: {
        // data: [
        //     {
        //         id: 1,
        //         setup: 'Do you know blackpink ?',
        //         punchline: 'the team is from four perfect girls.',
        //     },
        //     {
        //         id: 2,
        //         setup: 'Do you know Taylor Swift ?',
        //         punchline: 'her boyfriend is Joe Alywn.',
        //     },
        // ],
        // counter: 100,
        data: [],
        counter: 0,
    },

    effects: {
        *queryInitCards(_, sagaEffects) {
            const { call, put } = sagaEffects;
            // const endPointURI = 'https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke';
            const endPointURI = '/dev/random_joke';

            try { // 加入 try catch 捕获抛错
                const puzzle = yield call(request, endPointURI); // 获取服务端数据
                yield put({ type: 'addNewCard', payload: puzzle }); // 添加一个卡片数据，触发reducer的执行

                yield call(delay, 3000); // 暂停3s

                const puzzle2 = yield call(request, endPointURI);
                yield put({ type: 'addNewCard', payload: puzzle2 });
            } catch (e) {
                message.error('数据获取失败'); // 打印错误信息
            }
            
        }
    },

    reducers: {
        // 每一个 reducer 都是一个 function，action 派发后，通过 action.type 被唯一地匹配到
        addNewCard(state, { payload: newCard }) { // 第二步：action到达reducer
            const nextCounter = state.counter + 1;
            const newCardWithId = { ...newCard, id: nextCounter };
            const nextData = state.data.concat(newCardWithId);
            // 返回值被 dva 使用作为新的 state
            return { // 第三步reducers改变state后，重新注入组件
                data: nextData,
                counter: nextCounter,
            }
            // state 的改变随后会被 connect 注入到组件中，触发视图改变
        }
    },
};