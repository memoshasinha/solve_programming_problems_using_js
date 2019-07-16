const Trie = require('./trie');
var trie = new Trie();

test('count number of words in trie', () => {
    expect(trie.countWords()).toStrictEqual(0);
});
test('Add element to trie and count number of words added', () => {
    trie.add('one');
    trie.add('two');
    trie.add('fifth');
    trie.add('fifty');
    expect(trie.countWords()).toStrictEqual(4);
});

test('print elements', () => {
    expect(trie.print()).toStrictEqual("| o t f | n w i | e o f | t | h y");
});
test('get added elements', () => {
    expect(trie.getWords()).toStrictEqual([ 'one', 'two', 'fifth', 'fifty' ]);
});
test('print level wise elements', () => {
    expect(trie.printByLevel()).toStrictEqual("o t f \nn w i \ne o f \nt \nh y");
});

test('check if the word is present in trie', () => {
    expect(trie.contains("one")).toStrictEqual(true);
});

test('remove word', () => {
    trie.remove("one");
    expect(trie.countWords()).toStrictEqual(3);
});
test('check if the word is present in trie', () => {
    expect(trie.contains("one")).toStrictEqual(false);
});
test('remove all words and check if empty word is present in trie', () => {
    trie.remove("two");
    trie.remove("fifth");
    trie.remove("fifty");
    expect(trie.contains()).toStrictEqual(false);
});

test('remove word', () => {
    trie.root = null;
    expect(trie.add()).toStrictEqual(null);
    expect(trie.contains()).toStrictEqual(false);
});