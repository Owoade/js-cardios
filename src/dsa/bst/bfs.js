class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    // Insert a new node into the tree
    insert(value) {
        const newNode = new TreeNode(value);

        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    // Recursive method to find the correct place to insert a node
    insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    // In-order traversal of the tree (Left, Root, Right)
    inOrder(node = this.root, result = []) {
        if (node !== null) {
            this.inOrder(node.left, result);
            result.push(node.value);
            this.inOrder(node.right, result);
        }
        return result;
    }

    // Pre-order traversal of the tree (Root, Left, Right)
    preOrder(node = this.root, result = []) {
        if (node !== null) {
            result.push(node.value);
            this.preOrder(node.left, result);
            this.preOrder(node.right, result);
        }
        return result;
    }

    // Post-order traversal of the tree (Left, Right, Root)
    postOrder(node = this.root, result = []) {
        if (node !== null) {
            this.postOrder(node.left, result);
            this.postOrder(node.right, result);
            result.push(node.value);
        }
        return result;
    }
}

const tree = new BinaryTree();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(3);
tree.insert(7);
tree.insert(12);
tree.insert(17);

function bfs_find( root, needle ){

    const nodes = [root];

    while( nodes.length ){

        const node = nodes.shift();

        if( !node ) continue;

        if(node.value === needle) return true;

        else {
            nodes.push(node.left);
            nodes.push(node.right)
        }

    }

    return false;

}

console.log(bfs_find(tree.root, 120))

function bfs_traversal( root ){

    const nodes = [root];

    const results = []

    while( nodes.length ){

        const node = nodes.shift();

        if( !node ) continue;

        results.push(node.value);

        nodes.push(node.left, node.right);

    }

    return results;

}


console.log(bfs_traversal(tree.root))
