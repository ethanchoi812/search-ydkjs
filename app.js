const endpoint = 'https://gist.githubusercontent.com/ethanchoi812/7e618735993356b05cb5c9118d176215/raw/cb4bef42a61c628cb06281c1942a6616463a6040/ydkjs-async-ch1.json';
const sections = [];

fetch(endpoint)
.then(blob =>blob.json())
.then(data => sections.push(...data));

function findMatches(wordsToMatch, sections){
	return sections.filter(section => {

		const regex = new RegExp(wordsToMatch, 'gi');
		return section.title.match(regex);
	});
}

function displayMatches(){
	const matchArray = findMatches(this.value, sections);
	const html = matchArray.map(section => {
		return `
			<li>
				<a href="${section.url}" target="_blank"><span class="title">${section.title}</span></a>
			</li>
		`
	}).join('');

	suggestions.innerHTML = html;
}

const searchInput = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");

searchInput.addEventListener("change", displayMatches);
searchInput.addEventListener("keyup", displayMatches);