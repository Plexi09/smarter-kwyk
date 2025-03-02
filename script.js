function parseMathMLtoText(node) {
  if (!node) return '';

  if (node.nodeType === Node.TEXT_NODE) {
    return node.textContent;
  }

  const tag = node.nodeName.toLowerCase();

  switch (tag) {
    case 'math':
    case 'mstyle':
    case 'mrow':
    case 'mphantom':
    case 'semantics':
      return Array.from(node.childNodes).map(parseMathMLtoText).join('');
    case 'mn':
    case 'mi':
    case 'mo':
      return node.textContent;
    case 'msup': {
      const base = parseMathMLtoText(node.childNodes[0]);
      const sup = parseMathMLtoText(node.childNodes[1]);
      return `(${base})^(${sup})`;
    }
    case 'msub': {
      const base = parseMathMLtoText(node.childNodes[0]);
      const sub = parseMathMLtoText(node.childNodes[1]);
      return `(${base})_(${sub})`;
    }
    case 'mfrac': {
      const num = parseMathMLtoText(node.childNodes[0]);
      const den = parseMathMLtoText(node.childNodes[1]);
      return `(${num})/(${den})`;
    }
    case 'msqrt': {
      const inside = parseMathMLtoText(node.childNodes[0]);
      return `sqrt(${inside})`;
    }
    case 'mroot': {
      const inside = parseMathMLtoText(node.childNodes[0]);
      const index = parseMathMLtoText(node.childNodes[1]);
      return `root(${inside}, ${index})`;
    }
    case 'mtable':
    case 'mtr':
    case 'mtd':
      return Array.from(node.childNodes).map(parseMathMLtoText).join(' ');

    default:
      return Array.from(node.childNodes).map(parseMathMLtoText).join('');
  }
}

function cleanQuestion(questionElem) {
  const clone = questionElem.cloneNode(true);

  const mjxContainers = clone.querySelectorAll('mjx-container');
  mjxContainers.forEach(mjx => {
    const assistiveMath = mjx.querySelector('mjx-assistive-mml > math');
    let mathText = '';
    if (assistiveMath) {
      mathText = parseMathMLtoText(assistiveMath);
    }
    const textNode = document.createTextNode(mathText);
    mjx.parentNode.replaceChild(textNode, mjx);
  });

  const questionText = clone.textContent.trim();
  
  let choicesText = "";
  
  const form = questionElem.closest('.core')?.querySelector('.exercise_form');
  if (form) {
    const radioOptions = form.querySelectorAll('input[type="radio"], input[type="checkbox"]');
    if (radioOptions.length > 0) {
      choicesText = "\n\nOptions:";
      radioOptions.forEach(option => {
        const label = option.closest('label') || form.querySelector(`label[for="${option.id}"]`);
        if (label) {
          const labelText = label.textContent.trim();
          choicesText += `\n- ${labelText}`;
        }
      });
    }
  }
  
  return questionText + choicesText;
}

function extractAllQuestions() {
  const questions = document.querySelectorAll('.exercise_question');
  const results = [];
  questions.forEach(q => {
    const cleanedText = cleanQuestion(q);
    results.push(cleanedText);
  });
  return results;
}
const allQuestions = extractAllQuestions();
console.log(allQuestions);
alert(allQuestions.join('\n\n'));
