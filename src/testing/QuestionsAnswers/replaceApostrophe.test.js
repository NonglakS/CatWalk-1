import replaceApostrophe from './replaceApostrophe.js'

test(replaceApostrophe('I don&#x27;t know about running big or small but it sure runs fast!'), () => {
  expect('don&#x27;t').not.toMatch(/don&#x27;t/);
});
