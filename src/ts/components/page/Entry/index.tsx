import * as React from 'react';
import {connect} from 'react-redux';
import AddTask from 'components/forms/AddTask';
import {addTask, removeTask, resolveTask} from 'actions/tasks';
import TaskList from 'components/common/TaskList';
import Button from 'components/common/Button';
import BaseBem from 'components/common/BaseBem';

import './style.styl';

@connect(
    state => state,
    dispatch => {
        return {
            add: params => dispatch(addTask(params)),
            remove: id => dispatch(removeTask(id)),
            resolve: id => dispatch(resolveTask(id))
        };
    }
)
export default class Entry extends BaseBem<any, {}> {
    constructor(props) {
        super(props);
        this.onRemove = this.onRemove.bind(this);
        this.onAdd = this.onAdd.bind(this);
        this.onResolve = this.onResolve.bind(this);
    }

    bemName: string = 'entry';

    onAdd(params): void {
        this.props.add({title: params.title});
    }

    onRemove(id): void {
        this.props.remove(id);
    }

    onResolve(id): void {
        this.props.resolve(id);
    }

    render() {
        return (
            <section className={this.bemBlock()}>
                <h2>Task list</h2>
                <div className={this.bemBlock({block: ['filters']})}>
                    <span>unresolved</span>/
                    <span>resolved</span>/
                    <span>all</span>
                </div>
                <AddTask onAdd={this.onAdd} />
                <TaskList onRemove={this.onRemove} onResolve={this.onResolve}>{this.props.tasks}</TaskList>
            </section>
        );
    }
}
