/**
 * 受控组件 小demo练习
 */

import {
    Button,Tabs,Tree,
} from 'antd';

const { TabPane } = Tabs;
const { TreeNode } = Tree;

class Demo extends React.Component {
    state = {
        text: '',
        activeKey: '1',
        expandedKeys: [],
    }

    /**
     * 监听input
     */
    onTextChange = event => {
        this.setState({
            text: event.target.value
        });
    }

    /**
     * 重置input
     */
    onTextReset = () => {
        this.setState({ text: '' });
    }

    /**
     * 切换tab页
     */
    onTabChange = (activeKey) => {
        this.setState({ activeKey });
    }

    /**
     * tree组件 - 展开与收起
     * 接收原本的展开事件，在 state 中记录 expandedKeys
     */
    onExpand = (expandedKeys) => {
        this.setState({ expandedKeys });
    }

    /**
     * 接收选中事件，修改 expandedKeys
     */
    onSelect = (selectedKeys) => {
        const { expandedKeys } = this.state;
        const key = selectedKeys[0];

        if (expandedKeys.includes(key)) {
            // 移除 key
            this.setState({
                expandedKeys: expandedKeys.filter(item => item !== key),
            });
        } else {
            // 添加key
            this.setState({
                expandedKeys: [...expandedKeys, key]
            });
        }
    }
    
    render() {
        const MyInput = ({ value = '', onChange }) => (
            <input value={value} onChange={onChange} />
        )
        const style = {
            width: '400px',
            margin: ' 30px',
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
            border: '1px solid #e8e8e8',
        };

        return (
            <div style={style}>
                <MyInput value={this.state.text} onChange={this.onTextChange} />
                <Button type="primary" onClick={this.onTextReset}>Reset</Button>

                {/* Tabs页 */}
                <div>
                    <Tabs activeKey={this.state.activeKey} onChange={this.onTabChange}>
                        <TabPane tab="one" key="1">未完成</TabPane>
                        <TabPane tab="two" key="2">已完成</TabPane>
                    </Tabs>
                </div>

                {/* Tree */}
                <div>
                    <Tree
                        expandedKeys={this.state.expandedKeys}
                        selectedKeys={[]}
                        onExpand={this.onExpand}
                        onSelect={this.onSelect}
                    >
                        <TreeNode title="parent 1" key="0-0">
                            <TreeNode title="leaf" key="0-0-0" />
                            <TreeNode title="leaf" key="0-0-1" />
                        </TreeNode>
                    </Tree>
                </div>
            </div>
        );
    }
}

export default Demo;