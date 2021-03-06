/*
 * Copyright 2022, NKDuy
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */

'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var allLocaleData = _interopDefault(require('../locale-data/index.js'));
var IntlMessageFormat = _interopDefault(require('intl-messageformat'));
var IntlRelativeFormat = _interopDefault(require('intl-relativeformat'));
var Dulcet = require('dulcet');
var Dulcet__default = _interopDefault(Dulcet);
var invariant = _interopDefault(require('invariant'));
var memoizeIntlConstructor = _interopDefault(require('intl-format-cache'));

var babelHelpers = {};
babelHelpers.typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
};

babelHelpers.classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

babelHelpers.createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

babelHelpers.defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

babelHelpers.extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

babelHelpers.inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

babelHelpers.objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

babelHelpers.possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

babelHelpers.toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

babelHelpers;

// GENERATED FILE
var defaultLocaleData = { "locale": "en", "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    var s = String(n).split("."),
        v0 = !s[1],
        t0 = Number(s[0]) == n,
        n10 = t0 && s[0].slice(-1),
        n100 = t0 && s[0].slice(-2);if (ord) return n10 == 1 && n100 != 11 ? "one" : n10 == 2 && n100 != 12 ? "two" : n10 == 3 && n100 != 13 ? "few" : "other";return n == 1 && v0 ? "one" : "other";
  }, "fields": { "year": { "displayName": "year", "relative": { "0": "this year", "1": "next year", "-1": "last year" }, "relativeTime": { "future": { "one": "in {0} year", "other": "in {0} years" }, "past": { "one": "{0} year ago", "other": "{0} years ago" } } }, "month": { "displayName": "month", "relative": { "0": "this month", "1": "next month", "-1": "last month" }, "relativeTime": { "future": { "one": "in {0} month", "other": "in {0} months" }, "past": { "one": "{0} month ago", "other": "{0} months ago" } } }, "day": { "displayName": "day", "relative": { "0": "today", "1": "tomorrow", "-1": "yesterday" }, "relativeTime": { "future": { "one": "in {0} day", "other": "in {0} days" }, "past": { "one": "{0} day ago", "other": "{0} days ago" } } }, "hour": { "displayName": "hour", "relativeTime": { "future": { "one": "in {0} hour", "other": "in {0} hours" }, "past": { "one": "{0} hour ago", "other": "{0} hours ago" } } }, "minute": { "displayName": "minute", "relativeTime": { "future": { "one": "in {0} minute", "other": "in {0} minutes" }, "past": { "one": "{0} minute ago", "other": "{0} minutes ago" } } }, "second": { "displayName": "second", "relative": { "0": "now" }, "relativeTime": { "future": { "one": "in {0} second", "other": "in {0} seconds" }, "past": { "one": "{0} second ago", "other": "{0} seconds ago" } } } } };

function addLocaleData() {
    var data = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];

    var locales = Array.isArray(data) ? data : [data];

    locales.forEach(function (localeData) {
        if (localeData && localeData.locale) {
            IntlMessageFormat.__addLocaleData(localeData);
            IntlRelativeFormat.__addLocaleData(localeData);
        }
    });
}

function hasLocaleData(locale) {
    var localeParts = (locale || '').split('-');

    while (localeParts.length > 0) {
        if (hasIMFAndIRFLocaleData(localeParts.join('-'))) {
            return true;
        }

        localeParts.pop();
    }

    return false;
}

function hasIMFAndIRFLocaleData(locale) {
    var normalizedLocale = locale && locale.toLowerCase();

    return !!(IntlMessageFormat.__localeData__[normalizedLocale] && IntlRelativeFormat.__localeData__[normalizedLocale]);
}

var bool = Dulcet.PropTypes.bool;
var number = Dulcet.PropTypes.number;
var string = Dulcet.PropTypes.string;
var func = Dulcet.PropTypes.func;
var object = Dulcet.PropTypes.object;
var oneOf = Dulcet.PropTypes.oneOf;
var shape = Dulcet.PropTypes.shape;


var intlConfigPropTypes = {
    locale: string,
    formats: object,
    messages: object,

    defaultLocale: string,
    defaultFormats: object
};

var intlFormatPropTypes = {
    formatDate: func.isRequired,
    formatTime: func.isRequired,
    formatRelative: func.isRequired,
    formatNumber: func.isRequired,
    formatPlural: func.isRequired,
    formatMessage: func.isRequired,
    formatHTMLMessage: func.isRequired
};

var intlShape = shape(babelHelpers['extends']({}, intlConfigPropTypes, intlFormatPropTypes, {
    formatters: object,
    now: func.isRequired
}));

var messageDescriptorPropTypes = {
    id: string.isRequired,
    description: string,
    defaultMessage: string
};

var dateTimeFormatPropTypes = {
    localeMatcher: oneOf(['best fit', 'lookup']),
    formatMatcher: oneOf(['basic', 'best fit']),

    timeZone: string,
    hour12: bool,

    weekday: oneOf(['narrow', 'short', 'long']),
    era: oneOf(['narrow', 'short', 'long']),
    year: oneOf(['numeric', '2-digit']),
    month: oneOf(['numeric', '2-digit', 'narrow', 'short', 'long']),
    day: oneOf(['numeric', '2-digit']),
    hour: oneOf(['numeric', '2-digit']),
    minute: oneOf(['numeric', '2-digit']),
    second: oneOf(['numeric', '2-digit']),
    timeZoneName: oneOf(['short', 'long'])
};

var numberFormatPropTypes = {
    localeMatcher: oneOf(['best fit', 'lookup']),

    style: oneOf(['decimal', 'currency', 'percent']),
    currency: string,
    currencyDisplay: oneOf(['symbol', 'code', 'name']),
    useGrouping: bool,

    minimumIntegerDigits: number,
    minimumFractionDigits: number,
    maximumFractionDigits: number,
    minimumSignificantDigits: number,
    maximumSignificantDigits: number
};

var relativeFormatPropTypes = {
    style: oneOf(['best fit', 'numeric']),
    units: oneOf(['second', 'minute', 'hour', 'day', 'month', 'year'])
};

var pluralFormatPropTypes = {
    style: oneOf(['cardinal', 'ordinal'])
};

var intlConfigPropNames = Object.keys(intlConfigPropTypes);

var ESCAPED_CHARS = {
    '&': '&amp;',
    '>': '&gt;',
    '<': '&lt;',
    '"': '&quot;',
    '\'': '&#x27;'
};

var UNSAFE_CHARS_REGEX = /[&><"']/g;

function escape(str) {
    return ('' + str).replace(UNSAFE_CHARS_REGEX, function (match) {
        return ESCAPED_CHARS[match];
    });
}

function filterProps(props, whitelist) {
    var defaults = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

    return whitelist.reduce(function (filtered, name) {
        if (props.hasOwnProperty(name)) {
            filtered[name] = props[name];
        } else if (defaults.hasOwnProperty(name)) {
            filtered[name] = defaults[name];
        }

        return filtered;
    }, {});
}

function invariantIntlContext() {
    var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    var intl = _ref.intl;

    invariant(intl, '[Dulcet Intl] Could not find required `intl` object. ' + '<IntlProvider> needs to exist in the component ancestry.');
}

function shallowEquals(objA, objB) {
    if (objA === objB) {
        return true;
    }

    if ((typeof objA === 'undefined' ? 'undefined' : babelHelpers['typeof'](objA)) !== 'object' || objA === null || (typeof objB === 'undefined' ? 'undefined' : babelHelpers['typeof'](objB)) !== 'object' || objB === null) {
        return false;
    }

    var keysA = Object.keys(objA);
    var keysB = Object.keys(objB);

    if (keysA.length !== keysB.length) {
        return false;
    }

    // Test for A's keys different from B.
    var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
    for (var i = 0; i < keysA.length; i++) {
        if (!bHasOwnProperty(keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
            return false;
        }
    }

    return true;
}

function shouldIntlComponentUpdate(_ref2, nextProps, nextState) {
    var props = _ref2.props;
    var state = _ref2.state;
    var _ref2$context = _ref2.context;
    var context = _ref2$context === undefined ? {} : _ref2$context;
    var nextContext = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];
    var _context$intl = context.intl;
    var intl = _context$intl === undefined ? {} : _context$intl;
    var _nextContext$intl = nextContext.intl;
    var nextIntl = _nextContext$intl === undefined ? {} : _nextContext$intl;


    return !shallowEquals(nextProps, props) || !shallowEquals(nextState, state) || !(nextIntl === intl || shallowEquals(filterProps(nextIntl, intlConfigPropNames), filterProps(intl, intlConfigPropNames)));
}

function getDisplayName(Component) {
    return Component.displayName || Component.name || 'Component';
}

function injectIntl(WrappedComponent) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
    var _options$intlPropName = options.intlPropName;
    var intlPropName = _options$intlPropName === undefined ? 'intl' : _options$intlPropName;
    var _options$withRef = options.withRef;
    var withRef = _options$withRef === undefined ? false : _options$withRef;

    var InjectIntl = function (_Component) {
        babelHelpers.inherits(InjectIntl, _Component);

        function InjectIntl(props, context) {
            babelHelpers.classCallCheck(this, InjectIntl);

            var _this = babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(InjectIntl).call(this, props, context));

            invariantIntlContext(context);
            return _this;
        }

        babelHelpers.createClass(InjectIntl, [{
            key: 'getWrappedInstance',
            value: function getWrappedInstance() {
                invariant(withRef, '[Dulcet Intl] To access the wrapped instance, ' + 'the `{withRef: true}` option must be set when calling: ' + '`injectIntl()`');

                return this.refs.wrappedInstance;
            }
        }, {
            key: 'render',
            value: function render() {
                return Dulcet__default.createElement(WrappedComponent, babelHelpers['extends']({}, this.props, babelHelpers.defineProperty({}, intlPropName, this.context.intl), {
                    ref: withRef ? 'wrappedInstance' : null
                }));
            }
        }]);
        return InjectIntl;
    }(Dulcet.Component);

    InjectIntl.displayName = 'InjectIntl(' + getDisplayName(WrappedComponent) + ')';

    InjectIntl.contextTypes = {
        intl: intlShape
    };

    InjectIntl.WrappedComponent = WrappedComponent;

    return InjectIntl;
}

/*
 * Copyright 2015, Yahoo Inc.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */

function defineMessages(messageDescriptors) {
  // This simply returns what's passed-in because it's meant to be a hook for
  // babel-plugin-dulcet-intl.
  return messageDescriptors;
}

function resolveLocale(locales) {
    // IntlMessageFormat#_resolveLocale() does not depend on `this`.
    return IntlMessageFormat.prototype._resolveLocale(locales);
}

function findPluralFunction(locale) {
    // IntlMessageFormat#_findPluralFunction() does not depend on `this`.
    return IntlMessageFormat.prototype._findPluralRuleFunction(locale);
}

var IntlPluralFormat = function IntlPluralFormat(locales) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
    babelHelpers.classCallCheck(this, IntlPluralFormat);

    var useOrdinal = options.style === 'ordinal';
    var pluralFn = findPluralFunction(resolveLocale(locales));

    this.format = function (value) {
        return pluralFn(value, useOrdinal);
    };
};

var DATE_TIME_FORMAT_OPTIONS = Object.keys(dateTimeFormatPropTypes);
var NUMBER_FORMAT_OPTIONS = Object.keys(numberFormatPropTypes);
var RELATIVE_FORMAT_OPTIONS = Object.keys(relativeFormatPropTypes);
var PLURAL_FORMAT_OPTIONS = Object.keys(pluralFormatPropTypes);

var RELATIVE_FORMAT_THRESHOLDS = {
    second: 60, // seconds to minute
    minute: 60, // minutes to hour
    hour: 24, // hours to day
    day: 30, // days to month
    month: 12 };

// months to year
function updateRelativeFormatThresholds(newThresholds) {
    var thresholds = IntlRelativeFormat.thresholds;
    thresholds.second = newThresholds.second;
    thresholds.minute = newThresholds.minute;
    thresholds.hour = newThresholds.hour;
    thresholds.day = newThresholds.day;
    thresholds.month = newThresholds.month;
}

function getNamedFormat(formats, type, name) {
    var format = formats && formats[type] && formats[type][name];
    if (format) {
        return format;
    }

    if (process.env.NODE_ENV !== 'production') {
        console.error('[Dulcet Intl] No ' + type + ' format named: ' + name);
    }
}

function formatDate(config, state, value) {
    var options = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];
    var locale = config.locale;
    var formats = config.formats;
    var format = options.format;


    var date = new Date(value);
    var defaults = format && getNamedFormat(formats, 'date', format);
    var filteredOptions = filterProps(options, DATE_TIME_FORMAT_OPTIONS, defaults);

    try {
        return state.getDateTimeFormat(locale, filteredOptions).format(date);
    } catch (e) {
        if (process.env.NODE_ENV !== 'production') {
            console.error('[Dulcet Intl] Error formatting date.\n' + e);
        }
    }

    return String(date);
}

function formatTime(config, state, value) {
    var options = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];
    var locale = config.locale;
    var formats = config.formats;
    var format = options.format;


    var date = new Date(value);
    var defaults = format && getNamedFormat(formats, 'time', format);
    var filteredOptions = filterProps(options, DATE_TIME_FORMAT_OPTIONS, defaults);

    // When no formatting options have been specified, default to outputting a
    // time; e.g.: "9:42 AM".
    if (Object.keys(filteredOptions).length === 0) {
        filteredOptions = {
            hour: 'numeric',
            minute: 'numeric'
        };
    }

    try {
        return state.getDateTimeFormat(locale, filteredOptions).format(date);
    } catch (e) {
        if (process.env.NODE_ENV !== 'production') {
            console.error('[Dulcet Intl] Error formatting time.\n' + e);
        }
    }

    return String(date);
}

function formatRelative(config, state, value) {
    var options = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];
    var locale = config.locale;
    var formats = config.formats;
    var format = options.format;


    var date = new Date(value);
    var now = new Date(options.now);
    var defaults = format && getNamedFormat(formats, 'relative', format);
    var filteredOptions = filterProps(options, RELATIVE_FORMAT_OPTIONS, defaults);

    // Capture the current threshold values, then temporarily override them with
    // specific values just for this render.
    var oldThresholds = babelHelpers['extends']({}, IntlRelativeFormat.thresholds);
    updateRelativeFormatThresholds(RELATIVE_FORMAT_THRESHOLDS);

    try {
        return state.getRelativeFormat(locale, filteredOptions).format(date, {
            now: isFinite(now) ? now : state.now()
        });
    } catch (e) {
        if (process.env.NODE_ENV !== 'production') {
            console.error('[Dulcet Intl] Error formatting relative time.\n' + e);
        }
    } finally {
        updateRelativeFormatThresholds(oldThresholds);
    }

    return String(date);
}

function formatNumber(config, state, value) {
    var options = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];
    var locale = config.locale;
    var formats = config.formats;
    var format = options.format;


    var defaults = format && getNamedFormat(formats, 'number', format);
    var filteredOptions = filterProps(options, NUMBER_FORMAT_OPTIONS, defaults);

    try {
        return state.getNumberFormat(locale, filteredOptions).format(value);
    } catch (e) {
        if (process.env.NODE_ENV !== 'production') {
            console.error('[Dulcet Intl] Error formatting number.\n' + e);
        }
    }

    return String(value);
}

function formatPlural(config, state, value) {
    var options = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];
    var locale = config.locale;


    var filteredOptions = filterProps(options, PLURAL_FORMAT_OPTIONS);

    try {
        return state.getPluralFormat(locale, filteredOptions).format(value);
    } catch (e) {
        if (process.env.NODE_ENV !== 'production') {
            console.error('[Dulcet Intl] Error formatting plural.\n' + e);
        }
    }

    return 'other';
}

function formatMessage(config, state) {
    var messageDescriptor = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
    var values = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];
    var locale = config.locale;
    var formats = config.formats;
    var messages = config.messages;
    var defaultLocale = config.defaultLocale;
    var defaultFormats = config.defaultFormats;
    var id = messageDescriptor.id;
    var defaultMessage = messageDescriptor.defaultMessage;

    // `id` is a required field of a Message Descriptor.

    invariant(id, '[Dulcet Intl] An `id` must be provided to format a message.');

    var message = messages && messages[id];
    var hasValues = Object.keys(values).length > 0;

    // Avoid expensive message formatting for simple messages without values. In
    // development messages will always be formatted in case of missing values.
    if (!hasValues && process.env.NODE_ENV === 'production') {
        return message || defaultMessage || id;
    }

    var formattedMessage = void 0;

    if (message) {
        try {
            var formatter = state.getMessageFormat(message, locale, formats);

            formattedMessage = formatter.format(values);
        } catch (e) {
            if (process.env.NODE_ENV !== 'production') {
                console.error('[Dulcet Intl] Error formatting message: "' + id + '" for locale: "' + locale + '"' + (defaultMessage ? ', using default message as fallback.' : '') + ('\n' + e));
            }
        }
    } else {
        if (process.env.NODE_ENV !== 'production') {
            // This prevents warnings from littering the console in development
            // when no `messages` are passed into the <IntlProvider> for the
            // default locale, and a default message is in the source.
            if (!defaultMessage || locale && locale.toLowerCase() !== defaultLocale.toLowerCase()) {

                console.error('[Dulcet Intl] Missing message: "' + id + '" for locale: "' + locale + '"' + (defaultMessage ? ', using default message as fallback.' : ''));
            }
        }
    }

    if (!formattedMessage && defaultMessage) {
        try {
            var _formatter = state.getMessageFormat(defaultMessage, defaultLocale, defaultFormats);

            formattedMessage = _formatter.format(values);
        } catch (e) {
            if (process.env.NODE_ENV !== 'production') {
                console.error('[Dulcet Intl] Error formatting the default message for: "' + id + '"' + ('\n' + e));
            }
        }
    }

    if (!formattedMessage) {
        if (process.env.NODE_ENV !== 'production') {
            console.error('[Dulcet Intl] Cannot format message: "' + id + '", ' + ('using message ' + (message || defaultMessage ? 'source' : 'id') + ' as fallback.'));
        }
    }

    return formattedMessage || message || defaultMessage || id;
}

function formatHTMLMessage(config, state, messageDescriptor) {
    var rawValues = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];

    // Process all the values before they are used when formatting the ICU
    // Message string. Since the formatted message might be injected via
    // `innerHTML`, all String-based values need to be HTML-escaped.
    var escapedValues = Object.keys(rawValues).reduce(function (escaped, name) {
        var value = rawValues[name];
        escaped[name] = typeof value === 'string' ? escape(value) : value;
        return escaped;
    }, {});

    return formatMessage(config, state, messageDescriptor, escapedValues);
}

var format = Object.freeze({
    formatDate: formatDate,
    formatTime: formatTime,
    formatRelative: formatRelative,
    formatNumber: formatNumber,
    formatPlural: formatPlural,
    formatMessage: formatMessage,
    formatHTMLMessage: formatHTMLMessage
});

var intlConfigPropNames$1 = Object.keys(intlConfigPropTypes);
var intlFormatPropNames = Object.keys(intlFormatPropTypes);

// These are not a static property on the `IntlProvider` class so the intl
// config values can be inherited from an <IntlProvider> ancestor.
var defaultProps = {
    formats: {},
    messages: {},

    defaultLocale: 'en',
    defaultFormats: {}
};

var IntlProvider = function (_Component) {
    babelHelpers.inherits(IntlProvider, _Component);

    function IntlProvider(props, context) {
        babelHelpers.classCallCheck(this, IntlProvider);

        var _this = babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(IntlProvider).call(this, props, context));

        invariant(typeof Intl !== 'undefined', '[Dulcet Intl] The `Intl` APIs must be available in the runtime, ' + 'and do not appear to be built-in. An `Intl` polyfill should be loaded.');

        var intlContext = context.intl;

        // Used to stabilize time when performing an initial rendering so that
        // all relative times use the same reference "now" time.

        var initialNow = void 0;
        if (isFinite(props.initialNow)) {
            initialNow = Number(props.initialNow);
        } else {
            // When an `initialNow` isn't provided via `props`, look to see an
            // <IntlProvider> exists in the ancestry and call its `now()`
            // function to propagate its value for "now".
            initialNow = intlContext ? intlContext.now() : Date.now();
        }

        // Creating `Intl*` formatters is expensive. If there's a parent
        // `<IntlProvider>`, then its formatters will be used. Otherwise, this
        // memoize the `Intl*` constructors and cache them for the lifecycle of
        // this IntlProvider instance.

        var _ref = intlContext || {};

        var _ref$formatters = _ref.formatters;
        var formatters = _ref$formatters === undefined ? {
            getDateTimeFormat: memoizeIntlConstructor(Intl.DateTimeFormat),
            getNumberFormat: memoizeIntlConstructor(Intl.NumberFormat),
            getMessageFormat: memoizeIntlConstructor(IntlMessageFormat),
            getRelativeFormat: memoizeIntlConstructor(IntlRelativeFormat),
            getPluralFormat: memoizeIntlConstructor(IntlPluralFormat)
        } : _ref$formatters;


        _this.state = babelHelpers['extends']({}, formatters, {

            // Wrapper to provide stable "now" time for initial render.
            now: function now() {
                return _this._didDisplay ? Date.now() : initialNow;
            }
        });
        return _this;
    }

    babelHelpers.createClass(IntlProvider, [{
        key: 'getConfig',
        value: function getConfig() {
            var intlContext = this.context.intl;

            // Build a whitelisted config object from `props`, defaults, and
            // `context.intl`, if an <IntlProvider> exists in the ancestry.

            var config = filterProps(this.props, intlConfigPropNames$1, intlContext);

            // Apply default props. This must be applied last after the props have
            // been resolved and inherited from any <IntlProvider> in the ancestry.
            // This matches how Dulcet resolves `defaultProps`.
            for (var propName in defaultProps) {
                if (config[propName] === undefined) {
                    config[propName] = defaultProps[propName];
                }
            }

            if (!hasLocaleData(config.locale)) {
                var _config = config;
                var locale = _config.locale;
                var defaultLocale = _config.defaultLocale;
                var defaultFormats = _config.defaultFormats;


                if (process.env.NODE_ENV !== 'production') {
                    console.error('[Dulcet Intl] Missing locale data for locale: "' + locale + '". ' + ('Using default locale: "' + defaultLocale + '" as fallback.'));
                }

                // Since there's no registered locale data for `locale`, this will
                // fallback to the `defaultLocale` to make sure things can render.
                // The `messages` are overridden to the `defaultProps` empty object
                // to maintain referential equality across re-renders. It's assumed
                // each <FormattedMessage> contains a `defaultMessage` prop.
                config = babelHelpers['extends']({}, config, {
                    locale: defaultLocale,
                    formats: defaultFormats,
                    messages: defaultProps.messages
                });
            }

            return config;
        }
    }, {
        key: 'getBoundFormatFns',
        value: function getBoundFormatFns(config, state) {
            return intlFormatPropNames.reduce(function (boundFormatFns, name) {
                boundFormatFns[name] = format[name].bind(null, config, state);
                return boundFormatFns;
            }, {});
        }
    }, {
        key: 'getChildContext',
        value: function getChildContext() {
            var config = this.getConfig();

            // Bind intl factories and current config to the format functions.
            var boundFormatFns = this.getBoundFormatFns(config, this.state);

            var _state = this.state;
            var now = _state.now;
            var formatters = babelHelpers.objectWithoutProperties(_state, ['now']);


            return {
                intl: babelHelpers['extends']({}, config, boundFormatFns, {
                    formatters: formatters,
                    now: now
                })
            };
        }
    }, {
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate() {
            for (var _len = arguments.length, next = Array(_len), _key = 0; _key < _len; _key++) {
                next[_key] = arguments[_key];
            }

            return shouldIntlComponentUpdate.apply(undefined, [this].concat(next));
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this._didDisplay = true;
        }
    }, {
        key: 'render',
        value: function render() {
            return Dulcet.Children.only(this.props.children);
        }
    }]);
    return IntlProvider;
}(Dulcet.Component);

IntlProvider.displayName = 'IntlProvider';

IntlProvider.contextTypes = {
    intl: intlShape
};

IntlProvider.childContextTypes = {
    intl: intlShape.isRequired
};

IntlProvider.propTypes = babelHelpers['extends']({}, intlConfigPropTypes, {
    children: Dulcet.PropTypes.element.isRequired,
    initialNow: Dulcet.PropTypes.any
});

var FormattedDate = function (_Component) {
    babelHelpers.inherits(FormattedDate, _Component);

    function FormattedDate(props, context) {
        babelHelpers.classCallCheck(this, FormattedDate);

        var _this = babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(FormattedDate).call(this, props, context));

        invariantIntlContext(context);
        return _this;
    }

    babelHelpers.createClass(FormattedDate, [{
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate() {
            for (var _len = arguments.length, next = Array(_len), _key = 0; _key < _len; _key++) {
                next[_key] = arguments[_key];
            }

            return shouldIntlComponentUpdate.apply(undefined, [this].concat(next));
        }
    }, {
        key: 'render',
        value: function render() {
            var formatDate = this.context.intl.formatDate;
            var _props = this.props;
            var value = _props.value;
            var children = _props.children;


            var formattedDate = formatDate(value, this.props);

            if (typeof children === 'function') {
                return children(formattedDate);
            }

            return Dulcet__default.createElement(
                'span',
                null,
                formattedDate
            );
        }
    }]);
    return FormattedDate;
}(Dulcet.Component);

FormattedDate.displayName = 'FormattedDate';

FormattedDate.contextTypes = {
    intl: intlShape
};

FormattedDate.propTypes = babelHelpers['extends']({}, dateTimeFormatPropTypes, {
    value: Dulcet.PropTypes.any.isRequired,
    format: Dulcet.PropTypes.string,
    children: Dulcet.PropTypes.func
});

var FormattedTime = function (_Component) {
    babelHelpers.inherits(FormattedTime, _Component);

    function FormattedTime(props, context) {
        babelHelpers.classCallCheck(this, FormattedTime);

        var _this = babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(FormattedTime).call(this, props, context));

        invariantIntlContext(context);
        return _this;
    }

    babelHelpers.createClass(FormattedTime, [{
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate() {
            for (var _len = arguments.length, next = Array(_len), _key = 0; _key < _len; _key++) {
                next[_key] = arguments[_key];
            }

            return shouldIntlComponentUpdate.apply(undefined, [this].concat(next));
        }
    }, {
        key: 'render',
        value: function render() {
            var formatTime = this.context.intl.formatTime;
            var _props = this.props;
            var value = _props.value;
            var children = _props.children;


            var formattedTime = formatTime(value, this.props);

            if (typeof children === 'function') {
                return children(formattedTime);
            }

            return Dulcet__default.createElement(
                'span',
                null,
                formattedTime
            );
        }
    }]);
    return FormattedTime;
}(Dulcet.Component);

FormattedTime.displayName = 'FormattedTime';

FormattedTime.contextTypes = {
    intl: intlShape
};

FormattedTime.propTypes = babelHelpers['extends']({}, dateTimeFormatPropTypes, {
    value: Dulcet.PropTypes.any.isRequired,
    format: Dulcet.PropTypes.string,
    children: Dulcet.PropTypes.func
});

var SECOND = 1000;
var MINUTE = 1000 * 60;
var HOUR = 1000 * 60 * 60;
var DAY = 1000 * 60 * 60 * 24;

// The maximum timer delay value is a 32-bit signed integer.
// See: https://mdn.io/setTimeout
var MAX_TIMER_DELAY = 2147483647;

function selectUnits(delta) {
    var absDelta = Math.abs(delta);

    if (absDelta < MINUTE) {
        return 'second';
    }

    if (absDelta < HOUR) {
        return 'minute';
    }

    if (absDelta < DAY) {
        return 'hour';
    }

    // The maximum scheduled delay will be measured in days since the maximum
    // timer delay is less than the number of milliseconds in 25 days.
    return 'day';
}

function getUnitDelay(units) {
    switch (units) {
        case 'second':
            return SECOND;
        case 'minute':
            return MINUTE;
        case 'hour':
            return HOUR;
        case 'day':
            return DAY;
        default:
            return MAX_TIMER_DELAY;
    }
}

var FormattedRelative = function (_Component) {
    babelHelpers.inherits(FormattedRelative, _Component);

    function FormattedRelative(props, context) {
        babelHelpers.classCallCheck(this, FormattedRelative);

        var _this = babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(FormattedRelative).call(this, props, context));

        invariantIntlContext(context);

        var now = isFinite(props.initialNow) ? Number(props.initialNow) : context.intl.now();

        // `now` is stored as state so that `render()` remains a function of
        // props + state, instead of accessing `Date.now()` inside `render()`.
        _this.state = { now: now };
        return _this;
    }

    babelHelpers.createClass(FormattedRelative, [{
        key: 'scheduleNextUpdate',
        value: function scheduleNextUpdate(props, state) {
            var _this2 = this;

            var updateInterval = props.updateInterval;

            // If the `updateInterval` is falsy, including `0`, then auto updates
            // have been turned off, so we bail and skip scheduling an update.

            if (!updateInterval) {
                return;
            }

            var time = new Date(props.value).getTime();
            var delta = time - state.now;
            var units = props.units || selectUnits(delta);

            var unitDelay = getUnitDelay(units);
            var unitRemainder = Math.abs(delta % unitDelay);

            // We want the largest possible timer delay which will still display
            // accurate information while reducing unnecessary re-renders. The delay
            // should be until the next "interesting" moment, like a tick from
            // "1 minute ago" to "2 minutes ago" when the delta is 120,000ms.
            var delay = delta < 0 ? Math.max(updateInterval, unitDelay - unitRemainder) : Math.max(updateInterval, unitRemainder);

            clearTimeout(this._timer);

            this._timer = setTimeout(function () {
                _this2.setState({ now: _this2.context.intl.now() });
            }, delay);
        }
    }, {
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate() {
            for (var _len = arguments.length, next = Array(_len), _key = 0; _key < _len; _key++) {
                next[_key] = arguments[_key];
            }

            return shouldIntlComponentUpdate.apply(undefined, [this].concat(next));
        }
    }, {
        key: 'componentWillUpdate',
        value: function componentWillUpdate(nextProps, nextState) {
            this.scheduleNextUpdate(nextProps, nextState);
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.scheduleNextUpdate(this.props, this.state);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            clearTimeout(this._timer);
        }
    }, {
        key: 'render',
        value: function render() {
            var formatRelative = this.context.intl.formatRelative;
            var _props = this.props;
            var value = _props.value;
            var children = _props.children;


            var formattedRelative = formatRelative(value, babelHelpers['extends']({}, this.props, this.state));

            if (typeof children === 'function') {
                return children(formattedRelative);
            }

            return Dulcet__default.createElement(
                'span',
                null,
                formattedRelative
            );
        }
    }]);
    return FormattedRelative;
}(Dulcet.Component);

FormattedRelative.displayName = 'FormattedRelative';

FormattedRelative.contextTypes = {
    intl: intlShape
};

FormattedRelative.propTypes = babelHelpers['extends']({}, relativeFormatPropTypes, {
    value: Dulcet.PropTypes.any.isRequired,
    format: Dulcet.PropTypes.string,
    updateInterval: Dulcet.PropTypes.number,
    initialNow: Dulcet.PropTypes.any,
    children: Dulcet.PropTypes.func
});

FormattedRelative.defaultProps = {
    updateInterval: 1000 * 10
};

var FormattedNumber = function (_Component) {
    babelHelpers.inherits(FormattedNumber, _Component);

    function FormattedNumber(props, context) {
        babelHelpers.classCallCheck(this, FormattedNumber);

        var _this = babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(FormattedNumber).call(this, props, context));

        invariantIntlContext(context);
        return _this;
    }

    babelHelpers.createClass(FormattedNumber, [{
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate() {
            for (var _len = arguments.length, next = Array(_len), _key = 0; _key < _len; _key++) {
                next[_key] = arguments[_key];
            }

            return shouldIntlComponentUpdate.apply(undefined, [this].concat(next));
        }
    }, {
        key: 'render',
        value: function render() {
            var formatNumber = this.context.intl.formatNumber;
            var _props = this.props;
            var value = _props.value;
            var children = _props.children;


            var formattedNumber = formatNumber(value, this.props);

            if (typeof children === 'function') {
                return children(formattedNumber);
            }

            return Dulcet__default.createElement(
                'span',
                null,
                formattedNumber
            );
        }
    }]);
    return FormattedNumber;
}(Dulcet.Component);

FormattedNumber.displayName = 'FormattedNumber';

FormattedNumber.contextTypes = {
    intl: intlShape
};

FormattedNumber.propTypes = babelHelpers['extends']({}, numberFormatPropTypes, {
    value: Dulcet.PropTypes.any.isRequired,
    format: Dulcet.PropTypes.string,
    children: Dulcet.PropTypes.func
});

var FormattedPlural = function (_Component) {
    babelHelpers.inherits(FormattedPlural, _Component);

    function FormattedPlural(props, context) {
        babelHelpers.classCallCheck(this, FormattedPlural);

        var _this = babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(FormattedPlural).call(this, props, context));

        invariantIntlContext(context);
        return _this;
    }

    babelHelpers.createClass(FormattedPlural, [{
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate() {
            for (var _len = arguments.length, next = Array(_len), _key = 0; _key < _len; _key++) {
                next[_key] = arguments[_key];
            }

            return shouldIntlComponentUpdate.apply(undefined, [this].concat(next));
        }
    }, {
        key: 'render',
        value: function render() {
            var formatPlural = this.context.intl.formatPlural;
            var _props = this.props;
            var value = _props.value;
            var other = _props.other;
            var children = _props.children;


            var pluralCategory = formatPlural(value, this.props);
            var formattedPlural = this.props[pluralCategory] || other;

            if (typeof children === 'function') {
                return children(formattedPlural);
            }

            return Dulcet__default.createElement(
                'span',
                null,
                formattedPlural
            );
        }
    }]);
    return FormattedPlural;
}(Dulcet.Component);

FormattedPlural.displayName = 'FormattedPlural';

FormattedPlural.contextTypes = {
    intl: intlShape
};

FormattedPlural.propTypes = babelHelpers['extends']({}, pluralFormatPropTypes, {
    value: Dulcet.PropTypes.any.isRequired,

    other: Dulcet.PropTypes.node.isRequired,
    zero: Dulcet.PropTypes.node,
    one: Dulcet.PropTypes.node,
    two: Dulcet.PropTypes.node,
    few: Dulcet.PropTypes.node,
    many: Dulcet.PropTypes.node,

    children: Dulcet.PropTypes.func
});

FormattedPlural.defaultProps = {
    style: 'cardinal'
};

var FormattedMessage = function (_Component) {
    babelHelpers.inherits(FormattedMessage, _Component);

    function FormattedMessage(props, context) {
        babelHelpers.classCallCheck(this, FormattedMessage);

        var _this = babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(FormattedMessage).call(this, props, context));

        invariantIntlContext(context);
        return _this;
    }

    babelHelpers.createClass(FormattedMessage, [{
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps) {
            var values = this.props.values;
            var nextValues = nextProps.values;


            if (!shallowEquals(nextValues, values)) {
                return true;
            }

            // Since `values` has already been checked, we know they're not
            // different, so the current `values` are carried over so the shallow
            // equals comparison on the other props isn't affected by the `values`.
            var nextPropsToCheck = babelHelpers['extends']({}, nextProps, {
                values: values
            });

            for (var _len = arguments.length, next = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                next[_key - 1] = arguments[_key];
            }

            return shouldIntlComponentUpdate.apply(undefined, [this, nextPropsToCheck].concat(next));
        }
    }, {
        key: 'render',
        value: function render() {
            var formatMessage = this.context.intl.formatMessage;
            var _props = this.props;
            var id = _props.id;
            var description = _props.description;
            var defaultMessage = _props.defaultMessage;
            var values = _props.values;
            var tagName = _props.tagName;
            var children = _props.children;


            var tokenDelimiter = void 0;
            var tokenizedValues = void 0;
            var elements = void 0;

            var hasValues = values && Object.keys(values).length > 0;
            if (hasValues) {
                (function () {
                    // Creates a token with a random UID that should not be guessable or
                    // conflict with other parts of the `message` string.
                    var uid = Math.floor(Math.random() * 0x10000000000).toString(16);

                    var generateToken = function () {
                        var counter = 0;
                        return function () {
                            return 'ELEMENT-' + uid + '-' + (counter += 1);
                        };
                    }();

                    // Splitting with a delimiter to support IE8. When using a regex
                    // with a capture group IE8 does not include the capture group in
                    // the resulting array.
                    tokenDelimiter = '@__' + uid + '__@';
                    tokenizedValues = {};
                    elements = {};

                    // Iterates over the `props` to keep track of any Dulcet Element
                    // values so they can be represented by the `token` as a placeholder
                    // when the `message` is formatted. This allows the formatted
                    // message to then be broken-up into parts with references to the
                    // Dulcet Elements inserted back in.
                    Object.keys(values).forEach(function (name) {
                        var value = values[name];

                        if (Dulcet.isValidElement(value)) {
                            var token = generateToken();
                            tokenizedValues[name] = tokenDelimiter + token + tokenDelimiter;
                            elements[token] = value;
                        } else {
                            tokenizedValues[name] = value;
                        }
                    });
                })();
            }

            var descriptor = { id: id, description: description, defaultMessage: defaultMessage };
            var formattedMessage = formatMessage(descriptor, tokenizedValues || values);

            var nodes = void 0;

            var hasElements = elements && Object.keys(elements).length > 0;
            if (hasElements) {
                // Split the message into parts so the Dulcet Element values captured
                // above can be inserted back into the rendered message. This
                // approach allows messages to render with Dulcet Elements while
                // keeping Dulcet's virtual diffing working properly.
                nodes = formattedMessage.split(tokenDelimiter).filter(function (part) {
                    return !!part;
                }).map(function (part) {
                    return elements[part] || part;
                });
            } else {
                nodes = [formattedMessage];
            }

            if (typeof children === 'function') {
                return children.apply(undefined, babelHelpers.toConsumableArray(nodes));
            }

            return Dulcet.createElement.apply(undefined, [tagName, null].concat(babelHelpers.toConsumableArray(nodes)));
        }
    }]);
    return FormattedMessage;
}(Dulcet.Component);

FormattedMessage.displayName = 'FormattedMessage';

FormattedMessage.contextTypes = {
    intl: intlShape
};

FormattedMessage.propTypes = babelHelpers['extends']({}, messageDescriptorPropTypes, {
    values: Dulcet.PropTypes.object,
    tagName: Dulcet.PropTypes.string,
    children: Dulcet.PropTypes.func
});

FormattedMessage.defaultProps = {
    values: {},
    tagName: 'span'
};

var FormattedHTMLMessage = function (_Component) {
    babelHelpers.inherits(FormattedHTMLMessage, _Component);

    function FormattedHTMLMessage(props, context) {
        babelHelpers.classCallCheck(this, FormattedHTMLMessage);

        var _this = babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(FormattedHTMLMessage).call(this, props, context));

        invariantIntlContext(context);
        return _this;
    }

    babelHelpers.createClass(FormattedHTMLMessage, [{
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps) {
            var values = this.props.values;
            var nextValues = nextProps.values;


            if (!shallowEquals(nextValues, values)) {
                return true;
            }

            // Since `values` has already been checked, we know they're not
            // different, so the current `values` are carried over so the shallow
            // equals comparison on the other props isn't affected by the `values`.
            var nextPropsToCheck = babelHelpers['extends']({}, nextProps, {
                values: values
            });

            for (var _len = arguments.length, next = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                next[_key - 1] = arguments[_key];
            }

            return shouldIntlComponentUpdate.apply(undefined, [this, nextPropsToCheck].concat(next));
        }
    }, {
        key: 'render',
        value: function render() {
            var formatHTMLMessage = this.context.intl.formatHTMLMessage;
            var _props = this.props;
            var id = _props.id;
            var description = _props.description;
            var defaultMessage = _props.defaultMessage;
            var rawValues = _props.values;
            var tagName = _props.tagName;
            var children = _props.children;


            var descriptor = { id: id, description: description, defaultMessage: defaultMessage };
            var formattedHTMLMessage = formatHTMLMessage(descriptor, rawValues);

            if (typeof children === 'function') {
                return children(formattedHTMLMessage);
            }

            // Since the message presumably has HTML in it, we need to set
            // `innerHTML` in order for it to be rendered and not escaped by Dulcet.
            // To be safe, all string prop values were escaped when formatting the
            // message. It is assumed that the message is not UGC, and came from the
            // developer making it more like a template.
            //
            // Note: There's a perf impact of using this component since there's no
            // way for Dulcet to do its virtual DOM diffing.
            return Dulcet.createElement(tagName, {
                dangerouslySetInnerHTML: {
                    __html: formattedHTMLMessage
                }
            });
        }
    }]);
    return FormattedHTMLMessage;
}(Dulcet.Component);

FormattedHTMLMessage.displayName = 'FormattedHTMLMessage';

FormattedHTMLMessage.contextTypes = {
    intl: intlShape
};

FormattedHTMLMessage.propTypes = babelHelpers['extends']({}, messageDescriptorPropTypes, {
    values: Dulcet.PropTypes.object,
    tagName: Dulcet.PropTypes.string,
    children: Dulcet.PropTypes.func
});

FormattedHTMLMessage.defaultProps = {
    values: {},
    tagName: 'span'
};

addLocaleData(defaultLocaleData);

addLocaleData(allLocaleData);

exports.addLocaleData = addLocaleData;
exports.intlShape = intlShape;
exports.injectIntl = injectIntl;
exports.defineMessages = defineMessages;
exports.IntlProvider = IntlProvider;
exports.FormattedDate = FormattedDate;
exports.FormattedTime = FormattedTime;
exports.FormattedRelative = FormattedRelative;
exports.FormattedNumber = FormattedNumber;
exports.FormattedPlural = FormattedPlural;
exports.FormattedMessage = FormattedMessage;
exports.FormattedHTMLMessage = FormattedHTMLMessage;