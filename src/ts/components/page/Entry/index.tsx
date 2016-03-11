import * as React from 'react';
import {connect} from 'react-redux';
import AddTask from 'components/forms/AddTask';
import {addTask, removeTask} from 'actions/tasks';
import TaskList from 'components/common/TaskList';

@connect(
    state => state,
    dispatch => {
        return {
            add: params => dispatch(addTask(params)),
            remove: id => dispatch(removeTask(id))
        };
    }
)
export default class Entry extends React.Component<any, {}> {
    constructor(props) {
        super(props);
        this.onRemove = this.onRemove.bind(this);
        this.onAdd = this.onAdd.bind(this);
    }

    onAdd(params): void {
        this.props.add({title: params.title});
    }

    onRemove(id): void {
        this.props.remove(id);
    }

    render() {
        return (
            <section className="container">
                <h2>Task list</h2>
                <AddTask onAdd={this.onAdd} />
                <TaskList onRemove={this.onRemove}>{this.props.tasks}</TaskList>
            </section>
        );
    }
}
