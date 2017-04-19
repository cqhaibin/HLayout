/**
 * Input控件相关内容
 */

import InputProp from './prop';

export default {
    Prop: InputProp,
    generalComponent: function(createElement, data){
       return [createElement(data.type,{
            props:data.props
        })];
    }
}