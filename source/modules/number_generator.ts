'use strict';

function numberGenerator(range: number): number {
	return Math.floor(Math.random() * range) + 1;
}

export default numberGenerator;