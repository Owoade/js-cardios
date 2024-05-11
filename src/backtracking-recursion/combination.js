// setTimeout(()=> {throw new Error("break")}, 3000)
let count = 0;
function dfs(parent, child, temp, result, tree, depth_level) {
    // if( count > 20 ) throw new Error("Loop");
    // count += 1;
  console.log(parent, child, temp, result, depth_level, JSON.stringify(tree));

  // console.log("Recursion function called");
  //
  // 1st recursive case
  if (parent?.length === 0) {
    const new_tree = JSON.parse(JSON.stringify(tree));
    const top_parent = new_tree[depth_level - 2];
    if (!top_parent) return result;

    top_parent.shift();
    temp.pop(),
    console.log(top_parent)
      dfs(
        top_parent,
        tree[depth_level - 1],
        temp,
        result,
        tree,
        depth_level - 1
      );
  }

  // 2nd recursive case
  if (temp.length === tree.length) {
    const value = temp.join(" ")
    if(!result.includes(value))result.push(value);
    const _child = JSON.parse(JSON.stringify(child));
    const _parent = JSON.parse(JSON.stringify(parent));
    _parent.shift();
    temp.pop();

    dfs(_parent, _child, temp, result, tree, depth_level);
  }

  // 3rd recursive case
  if (parent?.[0]) {
    temp.push(parent[0]);

    if (depth_level === tree.length)
      dfs(parent, parent, temp, result, tree, depth_level);

    if (depth_level < tree.length)
      dfs(child, tree[depth_level + 1], temp, result, tree, depth_level + 1);
  }

  // base case
  // return result;
}

let tree = [[1, 3], [2], [3,2,1]];

let result = [];

console.log(tree.sort((a,b)=> a.length - b.length ));


dfs(tree[0], tree[1], [], result, tree, 1);

console.log(result)

