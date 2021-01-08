var v = [55,24,89,72,53,69,11],root = {};
for (let i of v){
    insert(i);
}
console.log(root)
function insert(value) {
    if (root.value == undefined) {
        root.value = value;
    } else insertNode(root, value);
}

function insertNode(current, value) {
    if (value < current.value) {
        if (current.left == undefined) {
            current.left={}
            current.left.value = value
        }
        else insertNode(current.left, value)
    } else
        if (current.right == undefined) {
            current.right={}
            current.right.value = value
        }
        else
            insertNode(current.right, value)
}