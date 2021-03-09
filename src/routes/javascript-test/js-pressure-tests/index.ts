// Tests
import Addition from './addition';
import Multiplication from './multiplication';

interface ITest {
	id: string,
	template: string,
	order: number,
	tests: ((value: string) => boolean)[]
}

export function compute (value: string, test: ITest) {
	return test?.tests?.every(t => t(value)) || false;
}

const JAVASCRIPT_TESTS: ITest[] = [
	Addition,
	Multiplication
].sort((a, b) => a.order - b.order);

export default JAVASCRIPT_TESTS;
