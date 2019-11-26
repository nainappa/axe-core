import xmlLangMismatchMatches from './xml-lang-mismatch-matches';

const htmlXmlLangMismatchMetadata = {
	id: 'html-xml-lang-mismatch',
	selector: 'html[lang][xml\\:lang]',
	matches: xmlLangMismatchMatches,
	tags: ['cat.language', 'wcag2a', 'wcag311'],
	metadata: {
		description: 'Ensure that HTML elements with both valid lang and xml:lang attributes agree on the base language of the page',
		help: 'HTML elements with lang and xml:lang must have the same base language'
	},
	all: ['xml-lang-mismatch'],
	any: [],
	none: []
};

export default htmlXmlLangMismatchMetadata;