// 新增節點
export function insert(root, value) {
    if (root.value == undefined) { // 如果root節點值不存在則存在root
        root.value = value;
    } else insertNode(root, value); // 如果root節點已存在則將root和新節點值放入insertNode()
}

export function insertNode(current, value) {
    if (value < current.value) {
        if (current.left == undefined) {
            current.left = {}
            current.left.value = value
        } else insertNode(current.left, value)
    } else
    if (current.right == undefined) {
        current.right = {}
        current.right.value = value
    } else
        insertNode(current.right, value)
}

// 搜尋某節點是否存在，是則回傳true，否則false
export function searchNode(root, value) {
    if (root == {}) {
        return false //console.log("No tree")
    } else if (root.value == value) {
        return true
    } else if (value < root.value) {
        return searchNode(root.left, value)
    } else {
        if (!root.right) {
            return false
        } else return searchNode(root.right, value)
    }
}

// 搜尋某節點，回傳此節點及其子樹
export function searchSubtree(root, value) {
    if (root == {}) {
        return false //console.log("No tree")
    } else if (root.value == value) {
        return root // console.log(JSON.stringify(root))
    } else if (value < root.value) {
        return searchSubtree(root.left, value)
    } else {
        if (!root.right) {
            return false //console.log("no such node")
        } else return searchSubtree(root.right, value)
    }
}

// 搜尋某節點，回傳此parent子樹
export function searchParent(root, value) {
    if (value == root.value) {
        return false //console.log("No parent")
    } else if (value < root.value) {
        if (root.left.value == undefined) {
            return null //console.log("no such node")
        } else if (root.left.value == value) {
            return root //console.log("parent and its children=", root)
        } else
            return searchParent(root.left, value)
    } else {
        if (root.right == undefined) {
            return null //console.log("no such node")
        } else if (root.right.value == value) {
            return root //console.log("parent and its children=", root)
        } else
            return searchParent(root.right, value)
    }
}



// 刪除某節點，其下節點會遞補
export function remove(root, value) {

    // 搜尋此節點是否存在這棵樹中
    var nodeToRemove = searchNode(root, value)
    if (nodeToRemove == false) {
        return null //console.log("No such node")
    }

    if (value < root.value) {
        root.left = remove(root.left, value);
        return root;
    } else if (value > root.value) {
        root.right = remove(root.right, value);
        return root;
    } else {
        // No children
        if ((!root.left) && (!root.right)) {
            delete root.value;
            return root;
        }
        // Single Child cases
        if (!root.left) return root.right;
        if (!root.right) return root.left;

        // Both children, so need to find successor
        let currNode = root.right;
        while (currNode.left) {
            currNode = currNode.left;
        }
        root.value = currNode.value;
        // Delete the value from right subtree.
        root.right = remove(root.right, currNode.value);
        return root;
    }
}