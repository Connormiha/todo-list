import * as React from 'react';
import {connect} from 'react-redux';
import AddTask from '../../forms/AddTask';
import {addTask, removeTask} from '../../../actions/tasks';
import TaskList from '../../common/TaskList';

@connect(
    state => state
)
export default class Entry extends React.Component<any, any> {
    constructor(props) {
        super(props);
        this.onRemove = this.onRemove.bind(this);
        this.onAdd = this.onAdd.bind(this);
    }

    onAdd(params): void {
        this.props.dispatch(addTask({title: params.title}));
    }

    onRemove(id): void {
        this.props.dispatch(removeTask(id));
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
