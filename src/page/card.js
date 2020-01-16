
// class Card extends React.Component {
//     render() {
//         return (
//             <div className='card'>
//                 <div className='card-content'>
//                     {this.props.content}
//                 </div>
//             </div>
//         );
//     }
// }

// ReactDOM.render(
//     <Card content={
//         <div>Hello World!</div>
//     } />,
//     document.getElementById('root')
// )

/**
 * 所有嵌套在组件中的 jsx 结构都可以在组件内部通过 props.children 获取到
 */
class Card extends React.Component {
    render() {
        return (
            <div className='card'>
                <div className='card-content'>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <Card content={
        <div>Hello World!</div>
    } />,
    document.getElementById('root')
)