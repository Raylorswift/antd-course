/**
 * dva model
 */

export default {
    namespace: 'puzzlecards',
    state: {
        data: [
            {
                id: 1,
                setup: 'Do you know blackpink ?',
                punchline: 'the team is from four perfect girls.',
            },
            {
                id: 2,
                setup: 'Do you know Taylor Swift ?',
                punchline: 'her boyfriend is Joe Alywn.',
            },
        ],
        counter: 100,
    },

    reducers: {
        // 每一个 reducer 都是一个 function，action 派发后，通过 action.type 被唯一地匹配到
        addNewCard(state, { payload: newCard }) {
            const nextCounter = state.counter + 1;
            const newCardWithId = { ...newCard, id: nextCounter };
            const nextData = state.data.concat(newCardWithId);
            // 返回值被 dva 使用作为新的 state
            return {
                data: nextData,
                counter: nextCounter,
            }
            // state 的改变随后会被 connect 注入到组件中，触发视图改变
        }
    },
};