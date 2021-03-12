export const addAnswerToArray = (shots, shot) => {
	if (shot !== undefined) {
		return [...shots, shot];
	}
	return [...shots];
};
