class TreeNode {
    constructor( val ){
        this.value = val;
        this.left = null;
        this.right = null;
    }
}

const a = new TreeNode("a");
const b = new TreeNode("b");
const c = new TreeNode("c");
const d = new TreeNode("d");
const e = new TreeNode("e");
const f = new TreeNode("f");
const g = new TreeNode("g");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;
c.right = g;

function iterative_dfs( root ){

    let result = [];

    let arr = [ root ];

    while( arr.length > 0 ){

        const current = arr.pop();

        result.push(current.value);

        if( current.left ) arr.push( current.left );

        if( current.right ) arr.push( current.right );

    }

    return result;
}

// console.log(iterative_dfs(a));

function recursive_dfs( root ){

    console.log("dfs called with", root?.value )

    

    // base case;
    if(!root?.value) return[];

    const left_val = recursive_dfs( root.left);

    const right_val = recursive_dfs( root.right);

    console.log( left_val, "left subtree")

    return [ root.value, ...left_val, ...right_val ];
    
}

console.log( recursive_dfs(a) )