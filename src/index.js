const sheet = document.head.appendChild(
	document.createElement('style')
).sheet;


function css(selector, styleString) {
  const rule = `${selector} { ${styleString} }`;
  const index = sheet.cssRules.length; // insert at the end
  sheet.insertRule(rule, index);
}