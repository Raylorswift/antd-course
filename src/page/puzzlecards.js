import React, { Component } from 'react';
import {
    Card,
    Button,
} from 'antd';
import { connect } from 'dva';

const namespace = 'puzzlecards';

const mapStateToProps = (state) => {
    const cardList = state[namespace].data;
    return {
        cardList,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onClickAdd: (newCard) => {
            const action = {
                type: `${namespace}/addNewCard`,
                payload: newCard,
            };
            dispatch(action);
        }
    }
}

@connect(mapStateToProps, mapDispatchToProps)

export default class PuzzleCardspage extends Component {
    // constructor(props) {
    //     super(props);
    //     this.counter = 100;
    //     this.state = {
    //         cardList: [
    //             {
    //                 id: 1,
    //                 setup: 'Do you know blackpink ?',
    //                 punchline: 'the team is from four perfect girls.',
    //             },
    //             {
    //                 id: 2,
    //                 setup: 'Do you know Taylor Swift ?',
    //                 punchline: 'her boyfriend is Joe Alywn.',
    //             },
    //         ],
    //     }
    // }

    // 点击按钮 - 添加卡片
    // addNewCard = () => {
    //     this.setState(prevState => {
    //         const prevCardList = prevState.cardList;
    //         this.counter += 1;
    //         const card = {
    //             id: this.counter,
    //             setup: 'Which song is your favorite ?',
    //             punchline: 'style is my favorite songs of the 1989 album from taylor.'
    //         };
    //         return {
    //             cardList: prevCardList.concat(card),
    //         };
    //     });
    // }

    render () {
        return (
            <div>
                {this.props.cardList.map(card => {
                        return (
                            <Card key={card.id}>
                                <div>Q: {card.setup}</div>
                                <div>
                                    <strong>A: {card.punchline}</strong>
                                </div>
                            </Card>
                        )
                })}
                {/* <div>
                    <Button type="primary" onClick={this.addNewCard}>添加卡片</Button>
                </div> */}
                <div>
                    <Button onClick={() => this.props.onClickAdd({
                        setup: 'Which song is your favorite ?',
                        punchline: 'style is my favorite songs of the 1989 album from taylor.'
                    })}>添加卡片</Button>
                </div>
            </div>
        );
    }
}