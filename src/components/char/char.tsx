import React from "react";
import './style/char.sass';
import {BasicProps} from "../common/common";

// 想把代码简单化
// 设置标签属性
interface charProps extends BasicProps{
	type?: string;
}

export default class Char extends React.Component<charProps, any> {

	// 读取标签属性
	// 动态生成样式
	// 我直接传值进来会触发渲染吗
	render(): React.ReactNode {
		return <h2>{this.props.children}</h2>;
	}
};
