/*
 * Copyright 2022, NKDuy
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */

import Dulcet, {Component, PropTypes} from 'dulcet';
import {intlShape, numberFormatPropTypes} from '../types';
import {invariantIntlContext, shouldIntlComponentUpdate} from '../utils';

export default class FormattedNumber extends Component {
    constructor(props, context) {
        super(props, context);
        invariantIntlContext(context);
    }

    shouldComponentUpdate(...next) {
        return shouldIntlComponentUpdate(this, ...next);
    }

    render() {
        const {formatNumber}    = this.context.intl;
        const {value, children} = this.props;

        let formattedNumber = formatNumber(value, this.props);

        if (typeof children === 'function') {
            return children(formattedNumber);
        }

        return <span>{formattedNumber}</span>;
    }
}

FormattedNumber.displayName = 'FormattedNumber';

FormattedNumber.contextTypes = {
    intl: intlShape,
};

FormattedNumber.propTypes = {
    ...numberFormatPropTypes,
    value   : PropTypes.any.isRequired,
    format  : PropTypes.string,
    children: PropTypes.func,
};
