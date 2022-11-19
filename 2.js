// source https://github.com/oscarbyte10/codember-22/blob/main/challenge02/index.ts

const mapData = (value) => value.split(" ");
const encrypted = '116561181061045651505752561029911097108'

let phrase = ""

const dataMapped = mapData(encrypted);
dataMapped.map((e) => {
	const characters = e.split("");
	for (let i = 0; i < characters.length; i++) {
		if (characters[i] === "1") {
			const charCode = characters[i] + characters[i + 1] + characters[i + 2];
			const char = String.fromCharCode(parseInt(charCode));
			phrase += char;
			i += 2;
		} else {
			const charCode = characters[i] + characters[i + 1];
			const char = String.fromCharCode(parseInt(charCode));
			phrase += char;
			i++;
		}
		if (i === characters.length - 1) phrase += " ";
	}
});
console.log(phrase); //t8vjh832948fcnal