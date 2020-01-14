import React from 'react';

class ShoppingList extends React.Component {
    render() {
        return (
            <div className="shopping-list">
                <h1>Shopping List for {this.props.name}</h1>
                <ul>
                    <li>Instagram</li>
                    <li>FaceBook</li>
                    <li>Twitter</li>
                </ul>
            </div>
        );
    }
}

export default ShoppingList;