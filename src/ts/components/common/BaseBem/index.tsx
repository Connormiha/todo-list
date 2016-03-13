import * as React from 'react';

abstract class BaseBem<P, S> extends React.Component<any, any> {
    constructor(props) {
        super(props);
        this.bemBlock = this.bemBlock.bind(this);
    }

    bemName: string = 'bem-block';

    bemBlock(options: any = {}): string {
        let block: string = this.bemName,
            mods: Array<string>;

        if (options.block) {
            block = options.block.reduce((result, item) => {
                return `${result}__${item}`;
            }, block);
        }

        if (options.mods) {
            if (!Array.isArray(options.mods)) {
                options.mods = Object.keys(options.mods).reduce((result, item) => {
                    if (options.mods[item]) {
                        result.push(item);
                    }

                    return result;
                }, []);
            }

            mods = options.mods.map((item) => {
                return `${block}_${item}`;
            });

            block += ` ${mods.join(' ')}`;
        }

        return block;
    }
}

export default BaseBem;
