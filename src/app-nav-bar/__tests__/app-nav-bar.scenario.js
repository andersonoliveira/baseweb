/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow

import * as React from 'react';
import ChevronDownSmallFilled from '../../icon/chevron-down.js';
import Delete from '../../icon/delete.js';
import Icon from '../../icon/upload.js';
import UserIcon from '../../icon/overflow.js';
import {Unstable_AppNavBar as AppNavBar} from '../index.js';

const MAIN_NAV = [
  {icon: Icon, label: 'Primary alpha1'},
  {icon: Icon, label: 'Primary alpha2'},
  {
    icon: ChevronDownSmallFilled,
    label: 'Primary alpha3',
    nav: [
      {icon: Icon, label: 'Secondary menu1'},
      {icon: Icon, label: 'Secondary menu2'},
    ],
    subnavExitIcon: Delete,
  },
  {
    active: true,
    icon: ChevronDownSmallFilled,
    label: 'Primary alpha4',
    nav: [
      {
        icon: ChevronDownSmallFilled,
        label: 'Secondary menu1',
        nav: [
          {icon: Icon, label: 'Tertiary menu1'},
          {icon: Icon, label: 'Tertiary menu2'},
        ],
      },
      {icon: Icon, label: 'Secondary menu2'},
    ],
    subnavExitIcon: Delete,
  },
];

const USER_NAV = [
  {icon: UserIcon, label: 'Account item1'},
  {icon: UserIcon, label: 'Account item2'},
  {icon: UserIcon, label: 'Account item3'},
  {icon: UserIcon, label: 'Account item4'},
];

export default function Scenario() {
  return (
    <AppNavBar
      appDisplayName="Uber Something"
      mainNav={MAIN_NAV}
      onNavItemSelect={({item}) => {
        console.log(item);
      }}
      userNav={USER_NAV}
      username="Umka Marshmallow"
      usernameSubtitle="5.0"
      userImgUrl=""
    />
  );
}
