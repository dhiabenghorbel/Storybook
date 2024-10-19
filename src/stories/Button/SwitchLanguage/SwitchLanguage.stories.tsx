import React from 'react';
import constants from '../../../GP4You/constants';
import SwitchLanguage from './SwitchLanguage.tsx';

export default {
  title: `${constants.menuPath}/Button/SwitchLanguage`,
  component: SwitchLanguage,
  argTypes : {
    options : {
      type : 'object',
      defaultValue : [{key : "fr", value : "Frensh"},{key : "eng", value : "English"},{key : "sp", value : "Spanish"}]
    },
    light : {
        table : {disable : true}
    }
  }
};

export const _SwitchLanguage_ = (args) => <SwitchLanguage {...args} />;

_SwitchLanguage_.bind({});
_SwitchLanguage_.args = {}