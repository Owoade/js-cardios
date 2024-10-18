/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let pointer_one = list1;
    let pointer_two = list2;
    let current_node = null;
    let m_list;
 
 //    case where one is empty
 
     if( !pointer_one ) return pointer_two;
     if( !pointer_two ) return pointer_one;
 
    while( pointer_one && pointer_two ){
     const val_1 = pointer_one.val;
     const val_2 = pointer_two.val;
     if( !pointer_one.next ){
         if(!mlist){
             if(pointer_two.next){
                 const next_node = pointrer_two.next;
                 if( next_node.val < val_1 ){
                     m_list = new ListNode(val_2, new ListNode(next_node.val, null));
                     current_node = m_list.next;
                     pointer_two = pointer_two.next
                 }else{
                     if(val_1 > val_2 )m_list = new ListNode(val_2, new ListNode(val_1, new ListNode(next_node.val, null)));
                     else m_list = new ListNode(val_1, new ListNode(val_2, new ListNode(next_node.val, null)));
                     current_node = m_list.next.next;
                     pointer_one = pointer_one.next;
                     pointer_two = pointer_two.next
                 }
             }
         }else{
 
         }
     }
 
     if(!pointer_two.next ){
         if(!mlist){
             if(pointer_one.next){
                 const next_node = pointer_one.next;
                 if(next_node?.val < val_2){
                     m_list = new ListNode(val_1, new ListNode(next_node.val, null));
                     current_node = m_list.next;
                     pointer_one = pointer_one.next
                 }else {
                     if(val_2 > val_1) m_list = new ListNode(val_1, new ListNode(val_2, new ListNode(next_node.val, null)));
                     else m_list = new ListNode(val_2, new ListNode(val_1, new ListNode(next_node.val, null)));
                     current_node = m_list.next.next;
                     pointer_one = pointer_one.next;
                     pointer_two = pointer_two.next
                 }
             }
 
         }else{
             if(pointer_one.next){
                 const next_node = pointer_one.next;
                 if(next_node?.val < val_2){
                     current_node.next = new ListNode(val_1, new ListNode(next_node.val, null));
                     current_node = current_node.next.next;
                     pointer_one = pointer_one.next
                 }else {
                     current_node.next = new ListNode(val_1, new ListNode(val_2, new ListNode(next_node.val, null)));
                     current_node = current_node.next.next.next;
                     pointer_one = pointer_one.next;
                     pointer_two = pointer_two.next
                 }
             }
 
         }
     }
     if( pointer_one.next && pointer_two.next ){
         const next_node_1 = pointer_one.next;
         const next_node_2 = pointer_two.next;
         if( !m_list ){
         if(val_1 === val_2 ){
             m_list = new ListNode(val_1, new ListNode(val_2, null));
             current_node = m_list.next;
         }
 
         if( val_1 < val_2  ){
             if( pointer_one.next ){
                 const next_node = pointer_one.next;
                 if( next_node?.val > val_2 ){
                     m_list = new ListNode(val_1, new ListNode(val_2));
                     m_list.next.next = next_node;
                     current_node = next_node;
                 }
             }else{
                 m_list = new ListNode(val_1, new ListNode(val_2, null));
                 current_node = m_list.next;
             }
         }
 
         if( val_1 > val_2 ){
             
         }
     }
     }
     
    }
 };