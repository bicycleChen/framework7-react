﻿import * as React from 'react';
import * as classNames from 'classnames';

import {IFramework7AppContext} from '../Framework7App';
import {VueToolbar} from '../../../framework7-vue/framework7-vue';
import {reactifyF7Vue} from '../../utils/ReactifyF7Vue';

import '../../less/toolbars.less';

export interface IToolbarProps extends React.Props<any> {
    className?: string;
    bottom?: boolean;
    tabbar?: boolean;
    labels?: boolean;
    scrollable?: boolean;
    beforeInnerSlot?: React.ReactElement<any>;
    afterInnerSlot?: React.ReactElement<any>;
}

export const Toolbar = reactifyF7Vue<IToolbarProps>({
    component: VueToolbar,
    slots: [
        'before-inner',
        'after-inner'
    ]
});