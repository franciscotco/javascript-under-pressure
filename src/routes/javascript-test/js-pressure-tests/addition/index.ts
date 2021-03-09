const ADD = 'add';

export default {
	id: 'addition',
	order: 0,
	template: `
function ${ADD} (a, b) {

	// Addition the parameters

	return ;

}
	`,
	tests: [
		(value: string): boolean => {

			const result = 3;

			return result === eval(
				`${value}
				${ADD}(1, 2);`
			);
		},
		(value: string): boolean => {

			const result = 4;

			return result === eval(
				`${value}
				${ADD}(2, 2);`
			);
		}
	]
};
