import React from 'react';
import constants from '../../../GP4You/constants';
import RefreshButton from './RefreshButton.tsx';

export default {
    title: `${constants.menuPath}/Button/RefreshButton`,
    component: RefreshButton,
    argTypes : {
      left : {
        table : {disable : true}
      },
      right : {
        table : {disable : true}
      },
      light : {
          table : {disable : true}
      }
    }
};

export const _RefreshButton_ = (args) => <RefreshButton {...args} />;

_RefreshButton_.bind({});
_RefreshButton_.args = {}