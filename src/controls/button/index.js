/**
 * button控件相关
 */
import ButtonProp from './prop';
export default {
    Prop: ButtonProp,
    generalComponent:function(createElement, data){
        return [createElement(data.type,{
            props: data.props
        },data.props.text)];
    }
}