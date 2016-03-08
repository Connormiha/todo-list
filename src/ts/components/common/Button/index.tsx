import * as React from 'react';

export default class Button extends React.Component<any, {}> {
    constructor(props) {
        super(props);
        this._getCssClass = this._getCssClass.bind(this);
    }

    render() {
        return (
            <button className={this._getCssClass()} onClick={this.props.onClick}>{this.props.children}</button>
        );
    }

    private _getCssClass(): string {
        let {mods} = this.props;
        if (!mods) {
            return 'btn';
        }

        return mods.reduce((result, item) => `${result} btn-${item}`, 'btn');
    }
}
