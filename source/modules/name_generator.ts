'use strict';

const fileStream = require('fs');
import generateNumber from './number_generator.js';

const nameList = JSON.parse(fileStream.readFileSync('build/configuration/name_list.json'));

function generateName(currentName: String): string {
	let uppercaseName = currentName.toUpperCase();
	let availableNames: string[] = [];

	for (const name of nameList.placeholders) {
		let generatedName = name.replace('%s', uppercaseName);

		if (generatedName.length <= 32)
			availableNames.push(generatedName);
	}

	if (availableNames.length == 0)
		return uppercaseName;

	return availableNames[generateNumber(availableNames.length)];
}

export default generateName;