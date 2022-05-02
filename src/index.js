/*
 * Copyright 2022, NKDuy
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */

import allLocaleData from '../locale-data/index';
import {addLocaleData} from './dulcet-intl';

export * from './dulcet-intl';

addLocaleData(allLocaleData);
