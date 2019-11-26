import ariaRequiredChildrenEvaluate from './aria-required-children-evaluate';

const ariaRequiredChildrenMetadata = {
	id: 'aria-required-children',
	evaluate: ariaRequiredChildrenEvaluate,
	options: {
		reviewEmpty: [
			'doc-bibliography',
			'doc-endnotes',
			'grid',
			'list',
			'listbox',
			'table',
			'tablist',
			'tree',
			'treegrid',
			'rowgroup'
		]
	},
	metadata: {
		impact: 'critical',
		messages: {
			pass: 'Required ARIA children are present',
			fail: 'Required ARIA {{=it.data && it.data.length > 1 ? "children" : "child"}} role not present:{{~it.data:value}} {{=value}}{{~}}',
			incomplete: 'Expecting ARIA {{=it.data && it.data.length > 1 ? "children" : "child"}} role to be added:{{~it.data:value}} {{=value}}{{~}}'
		}
	}
};

export default ariaRequiredChildrenMetadata;