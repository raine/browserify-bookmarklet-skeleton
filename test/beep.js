var test = require('tape')
  , beep = require('../lib/beep')
;

test('beep-boop', function(t) {
  t.plan(1);
  t.equal(beep(), 'beep boop!');
});
