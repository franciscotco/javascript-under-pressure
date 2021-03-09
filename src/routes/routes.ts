// Configs
import HomeConfig from './home/config';
import JavascriptTestConfig from './javascript-test/config';

export interface IRoutes {
	id: string,
	name: string,
	path: string,
	exact: boolean,
	Component: any,
	isEnable: () => boolean,
	order: number
}

const ROUTES: IRoutes[] = [
	HomeConfig,
	JavascriptTestConfig
];

export function getRoutes (): IRoutes[] {
	return ROUTES
		.filter(({ isEnable }) => isEnable())
		.sort((a, b) => a.order - b.order);
}
