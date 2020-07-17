export interface BasicProps {
	className?: string;
}

let REACT_KEYCAP = 'keycap-';

// 初始化组件className
export function genClassName(component: string, className: string) {
	let name = REACT_KEYCAP.concat(component).concat(' ');
	return className == null ? name : name.concat(className);
}

export function genThemeColor() {

	return '#9c64a7';
}
