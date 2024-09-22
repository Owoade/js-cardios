class ListNode {
    value;
    next;
    constructor( val ){
        this.value = val;
    }
}

let head = new ListNode(3);
head.next = new ListNode(5)
head.next.next = new ListNode(4);
head.next.next.next = new ListNode(6);
head.next.next.next.next = new ListNode(2);

// traversal
function traverse_list( head ){
    
    console.log(head.value);

    let next_node = head.next;

    while ( next_node ){

        console.log(next_node.value);

        next_node = next_node.next;

    }

}

traverse_list( head );

console.log(">>>>>>>>>>>>>>>>>>>>>>> Append opereration <<<<<<<<<<<<<<<<<<<<")

function append( head, value ){

    if( !head ) return head = new ListNode( value );

    let last_node = head;

    while( last_node.next ){

        last_node = last_node.next;

    }

    last_node.next = new ListNode( value );

}

append(head, 22);

traverse_list(head);

console.log(">>>>>>>>>>>>>>>>>>>>>>> Prepend opereration <<<<<<<<<<<<<<<<<<<<")

function prepend( head, value ){

    if( !head ) return head = new ListNode( value );

    let new_node = new ListNode( value );

    new_node.next = head;

    head = new_node;

    return head;

}

let new_head = prepend(head, 34)
traverse_list(new_head)

console.log(">>>>>>>>>>>>>>>>>>>>>>> Search <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<");

function search( head, value ){

    if( head.value === value ) return head.value;

    let next_node = head.next;

    while( next_node ){

        if( next_node.value === value ) return next_node.value;

        next_node = next_node.next;

    }

    return null;

}

console.log( search(new_head, 34) )

console.log(">>>>>>>>>>>>>>>>>>>>>>> Insert operation <<<<<<<<<<<<<<<<<<<<<<<<");

function append_after( head, value, node_value ){

    if( !head ) return false;

    let next_node = head.next;

    while( next_node ){

        if( next_node.value === node_value ){

            console.log({found_value: next_node.value})

            const next_node_after_current_node = next_node.next;
            
            next_node.next = new ListNode(value);

            next_node.next.next = next_node_after_current_node;

            return true;

        }

        next_node = next_node.next;

    }

    return false;


}

console.log( append_after(head, 32, 6));

traverse_list(head)


console.log(">>>>>>>>>>>>>>>>>>>>>>> Insert operation <<<<<<<<<<<<<<<<<<<<<<<<");

function delete_node( head, value ){

    if( !head ) return false;

    let next_node = head.next;

    while( next_node ){

        if( next_node.next?.value === value ){

            console.log({found_value: next_node.value})

            const two_nodes_after_current_node = next_node.next.next;
            
            next_node.next = two_nodes_after_current_node

            return true;

        }

        next_node = next_node.next;

    }

    return false;

}

console.log(delete_node(head, 4));
traverse_list(head)


