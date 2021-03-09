const MULT = 'mult';

export default {
	id: 'multiplication',
	order: 1,
	template: `
function ${MULT} (a, b) {

	// Multiplicate the parameters

	return ;

}
	`,
	tests: [
		(value: string) => {

			const result = 2;

			return result === eval(
				`${value}
				${MULT}(1, 2);`
			);
		},
		(value: string) => {

			const result = 4;

			return result === eval(
				`${value}
				${MULT}(2, 2);`
			);
		}
	]
};
