
class ListNode {

    value: number;
    next: ListNode | null

    constructor( val: number ){
        this.value = val;
        this.next = null
    }

}

class LinkedList {

    head: ListNode | null;

    constructor( head: ListNode | null ){
        this.head = head
    }
}

function generateLinkedList(n: number): LinkedList {

    let head = new ListNode(1); // Creating the head node
    let current = head;

    // Loop to create subsequent nodes and link them
    for (let i = 2; i <= n; i++) {
        console.log(i)
        let newNode = new ListNode(i);
        current.next = newNode;
        current = newNode;
    }

    return new LinkedList(head);
}

const list = generateLinkedList(10);

function findMiddleNode( list: LinkedList ){

    let firstPointer = list.head;
    let secondPointer = list.head;

    while( firstPointer?.next !== null && secondPointer?.next?.next !== null ){

        firstPointer = firstPointer?.next as ListNode;

        secondPointer = secondPointer?.next?.next as ListNode;

    }

    return firstPointer

}

console.log(findMiddleNode(list))