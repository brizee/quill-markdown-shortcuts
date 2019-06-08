if(!Quill){
	var Quill = window.Quill
}
let BlockEmbed = Quill.import('blots/block/embed');

class HorizontalRule extends BlockEmbed {}
HorizontalRule.blotName = 'hr';
HorizontalRule.tagName = 'hr';

export default HorizontalRule;