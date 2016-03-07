import * as React from 'react';
import Button from '../Button';

export default class TaskItem extends React.Component<any, {}> {
    constructor(props) {
        super(props);
        this.handleClickRemove = this.handleClickRemove.bind(this);
    }

    handleClickRemove(): void {
        this.props.onRemove(this.props.id);
    }

    render() {
        return (
            <li className="row">
                <div className="col-md-4">
                    {this.props.children}
                </div>
                <div className="col-md-2">
                    <Button onClick={this.handleClickRemove}>Удалить</Button>
                </div>
            </li>
        );
    }
}
