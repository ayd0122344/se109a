// insert()用於新增節點
export function insert(root, value) {
    if (root.value == undefined) { // 如果root節點值不存在則存放在root
        root.value = value;
    } else insertNode(root, value); // 如果root節點已存在，則呼叫insertNode()處理
}
// insertNode()用於在root已存在的情況下新增節點
export function insertNode(current, value) {
    if (value < current.value) { // 如果欲新增的值"小於"當前root的值
        if (current.left == undefined) { // 且當前root的左節點閒置，則放入左節點
            current.left = {}
            current.left.value = value
        } else insertNode(current.left, value) // 否則使用遞迴去當前root的左子樹尋找合適的新增位置
    } else // 如果欲新增的值"大於"當前root的值
        if (current.right == undefined) { // 且當前root的右節點閒置，則放入右節點
            current.right = {}
            current.right.value = value
        } else insertNode(current.right, value) // 否則使用遞迴去當前root的右子樹尋找合適的新增位置
}

// searchNode()用於搜尋某值是否存在，是則回傳true，若當前root為空樹則回傳false、找不到值會回傳null
export function searchNode(root, value) {
    if (!root.value) { // 當前root為空樹 => 回傳false
        return false
    } else if (root.value == value) { // 找到!回傳true
        return true
    } else if (value < root.value) { // 若某值"小於"root值
        return searchNode(root.left, value) // 往root左子樹尋找
    } else { // 若某值"大於"root值
        if (!root.right) { // 如果root右子樹為空樹
            return null // 表示此值並未存在於此樹
        } else return searchNode(root.right, value) // 如果root右子樹不是空樹 => 繼續向root右子樹搜索
    }
}

// searchSubtree()用於搜尋某搜尋某節點，搜到會回傳此節點及其子樹，若當前root為空樹則回傳false、找不到值會回傳null
// searchSubtree()跟searchNode()很像，但如果找到是會回傳當前root內容
export function searchSubtree(root, value) {
    if (!root.value) {
        return false // console.log("No tree")
    } else if (root.value == value) {
        // 回傳當前root內容
        return root // console.log(JSON.stringify(root))
    } else if (value < root.value) {
        return searchSubtree(root.left, value)
    } else {
        if (!root.right) {
            return null // console.log("no such node")
        } else return searchSubtree(root.right, value)
    }
}

// searchParent()用於搜尋某搜尋某節點，搜到會回傳此節點及其parent內容，若當前root為空樹則回傳false、找不到值會回傳null
export function searchParent(root, value) {
    if (value == root.value) { // 如果要找的值等於root的值，代表目前為空數，回傳false
        return false // console.log("No parent")
    } else if (value < root.value) { // 如果要找的值"小於"root的值
        if (root.left.value == undefined) { // 如果左子樹為空樹
            return null //console.log("no such node") // 代表此值不存在於此樹
        } else if (root.left.value == value) { // 否則如果此值等於當前root左子樹
            return root //console.log("parent and its children=", root) // 找到parent!回傳當前root內容
        } else
            return searchParent(root.left, value) // 以上條件都不符合的話就繼續往root左子樹搜索
    } else { // 如果要找的值"大於"root的值
        if (root.right == undefined) { //如果右子樹為空樹
            return null // console.log("no such node")// 代表此值不存在於此樹
        } else if (root.right.value == value) { // 否則如果此值等於當前root右子樹
            return root // console.log("parent and its children=", root) // 找到parent!回傳當前root內容
        } else
            return searchParent(root.right, value) // 以上條件都不符合的話就繼續往root右子樹搜索
    }
}


// remove()刪除某節點，其下節點會遞補空缺，若當前root為空樹則回傳false、找不到值會回傳null
export function remove(root, value) {

    // 搜尋欲刪除之節點是否存在這棵樹中
    var nodeToRemove = searchNode(root, value)
    if (nodeToRemove == null) {
        return null // console.log("No such node") // 找不到!回傳null
    }

    // 如果欲刪除之節點"小於"root的值
    if (value < root.value) {
        root.left = remove(root.left, value); // 使用遞迴往當前root的左子樹去找!
        return root; // 傳回存放此節點的root
    } else if (value > root.value) { // 如果要找的值"大於"root的值
        root.right = remove(root.right, value); // 使用遞迴往當前root的右子樹去找!
        return root; // 傳回存放此節點的root
    } else { // 如果要找的值"等於"root的值 (可能是透過前兩個if去遞迴翻找找到的)

        // 第一種情況:欲刪除之節點沒有child
        if ((!root.left) && (!root.right)) {
            delete root.value; // 直接把此節點清空!
            return root;
        }
        // 第二種情況:欲刪除之節點只有一個child
        if (!root.left) return root.right; // child在右子樹，child取代欲刪除之節點位置
        if (!root.right) return root.left; // child在右子樹，child取代欲刪除之節點位置

        // 第三種情況:欲刪除之節點有兩個以上的child
        // 1.先將root右子樹存放在變樹currNode
        let currNode = root.right;
        // 2.尋找右子樹的最小節點，也就是最左邊的節點，並存放在currNode
        while (currNode.left) {
            currNode = currNode.left;
        }
        // 3.用這個右子樹的最小節點去取代當前root的value值，也就是欲刪除之節點
        root.value = currNode.value;
        // 4.因為右子樹的最左子節點已經升遷了，所以要刪除原本在右子樹下的位子
        root.right = remove(root.right, currNode.value);
        return root;
        // 這樣的刪除方式是為了刪除完某節點後整棵樹還是能符合BST的規則
    }
}