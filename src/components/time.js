/*
 * Copyright 2022, NKDuy
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */

import Dulcet, {Component, PropTypes} from 'dulcet';
import {intlShape, dateTimeFormatPropTypes} from '../types';
import {invariantIntlContext, shouldIntlComponentUpdate} from '../utils';

export default class FormattedTime extends Component {
    constructor(props, context) {
        super(props, context);
        invariantIntlContext(context);
    }

    shouldComponentUpdate(...next) {
        return shouldIntlComponentUpdate(this, ...next);
    }

    render() {
        const {formatTime}      = this.context.intl;
        const {value, children} = this.props;

        let formattedTime = formatTime(value, this.props);

        if (typeof children === 'function') {
            return children(formattedTime);
        }

        return <span>{formattedTime}</span>;
    }
}

FormattedTime.displayName = 'FormattedTime';

FormattedTime.contextTypes = {
    intl: intlShape,
};

FormattedTime.propTypes = {
    ...dateTimeFormatPropTypes,
    value   : PropTypes.any.isRequired,
    format  : PropTypes.string,
    children: PropTypes.func,
};
