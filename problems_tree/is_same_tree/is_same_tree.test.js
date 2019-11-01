const is_same_tree = require('./is_same_tree');
function TreeNode(val) {
     this.val = val;
     this.left = this.right = null;
}
test('null tree',()=>{
    expect(is_same_tree(null,null)).toStrictEqual(true);
});

test('null and non null tree',()=>{
    let root = new TreeNode(1);
    let right = new TreeNode(2);
    let left = new TreeNode(3);
    root.right = right;
    root.left = left;
    expect(is_same_tree(null,root)).toStrictEqual(false);
});

test('same tree ',()=>{
    let root1 = new TreeNode(1);
    let right1 = new TreeNode(2);
    let left1 = new TreeNode(3);
    root1.right = right1;
    root1.left = left1;

    let root2 = new TreeNode(1);
    let right2 = new TreeNode(2);
    let left2 = new TreeNode(3);
    root2.right = right2;
    root2.left = left2;
    expect(is_same_tree(root1,root2)).toStrictEqual(true);
});

test('same tree ',()=>{
    let root1 = new TreeNode(1);
    let right1 = new TreeNode(2);
    let left1 = new TreeNode(3);
    root1.right = right1;
    root1.left = left1;

    let root2 = new TreeNode(1);
    let right2 = new TreeNode(3);
    let left2 = new TreeNode(4);
    root2.right = right2;
    root2.left = left2;
    expect(is_same_tree(root1,root2)).toStrictEqual(false);
});
