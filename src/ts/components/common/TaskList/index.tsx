import * as React from 'react';
import TaskItem from '../TaskItem';

import './style.styl';

export default class TaskList extends React.Component<any, {}> {
    render() {
        let items = this.props.children.map((item) => {
                return (
                    <TaskItem
                            key={item.id}
                            id={item.id}
                            resolved={item.resolved}
                            onRemove={this.props.onRemove}
                            onResolve={this.props.onResolve}
                        >
                        {item.title}
                    </TaskItem>
                );
            });

        return (
            <ul className="task-list">
                {items}
            </ul>
        );
    }
}
