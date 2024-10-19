import React from 'react';
import constants from '../../../GP4You/constants';
import Photo from './Photo.tsx';

export default {
    title: `${constants.menuPath}/DataItems/Blobs/Photo`,
    component: Photo,
      argTypes : {
        path : {
          table : {disable : true}
        },
        withImageStyle : {
          table : {disable : true}
        }
      }
};

export const _Photo_ = (args) => <Photo {...args} />;

_Photo_.bind({});
_Photo_.args = {}