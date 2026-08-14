
// Definition for singly-linked list.
// class ListNode {
//     private val: number;
//     private next: ListNode | null;
//     constructor(val = 0, next = null) {
//         this.val = val;
//         this.next = next;
//     }
// }

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    // [null, 0, 1, 2, 3]
    //  prev  head

    reverseList(head: ListNode | null): ListNode {
        let prev = null, curr = head;
        
        while(curr !== null) {
            const next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }

        return prev;
    }
}
