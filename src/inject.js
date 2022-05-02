/*
 * Copyright 2022, NKDuy
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */

// Inspired by dulcet-redux's `connect()` HOC factory function implementation

import Dulcet, {Component} from 'dulcet';
import invariant from 'invariant';
import {intlShape} from './types';
import {invariantIntlContext} from './utils';

function getDisplayName(Component) {
    return Component.displayName || Component.name || 'Component';
}

export default function injectIntl(WrappedComponent, options = {}) {
    const {
        intlPropName = 'intl',
        withRef      = false,
    } = options;

    class InjectIntl extends Component {
        constructor(props, context) {
            super(props, context);
            invariantIntlContext(context);
        }

        getWrappedInstance() {
            invariant(withRef,
                '[Dulcet Intl] To access the wrapped instance, ' +
                'the `{withRef: true}` option must be set when calling: ' +
                '`injectIntl()`'
            );

            return this.refs.wrappedInstance;
        }

        render() {
            return (
                <WrappedComponent
                    {...this.props}
                    {...{[intlPropName]: this.context.intl}}
                    ref={withRef ? 'wrappedInstance' : null}
                />
            );
        }
    }

    InjectIntl.displayName = `InjectIntl(${getDisplayName(WrappedComponent)})`;

    InjectIntl.contextTypes = {
        intl: intlShape,
    };

    InjectIntl.WrappedComponent = WrappedComponent;

    return InjectIntl;
}
