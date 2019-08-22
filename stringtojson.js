var string = 'hello my name is helo';
function stringtojson(input) {
	var array = string.join(' ');
	var json = `
	{
		string1: "`array[0]`",
		string2: "`array[1]`",
		string3: "`array[2]`",
		string4: "`array[3]`",
		string5: "`array[4]`"
	}
	`;
	console.log(json);
}
