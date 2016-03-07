import * as React from 'react';

export default class AddTask extends React.Component<any, {}> {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e): void {
        e.preventDefault();
        this.props.onAdd({
            title: e.target.elements.title.value
        });
        e.target.reset();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="form-inline">
                <label className="form-group">
                    <input
                        className="form-control"
                        type="text"
                        placeholder="Task name"
                        name="title"
                        autoCapitalize="none"
                        autoComplete="off"
                     />
                 </label>
                <input
                    className="btn btn-success"
                    type="submit"
                    value="Add task"
                 />
            </form>
        );
    }
}
