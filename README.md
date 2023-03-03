## How to solve this challenge?

1. Read the "Challenge description" below.
2. Make changes to the [challenge.js](./challenge.js) file.
3. Commit your changes.
4. Wait for the result of the "GitHub Classroom Workflow" action. If it is green - congratulations, you solved this challenge! If not - try again!
5. *You can watch an example of how to solve a challenge in the video linked in the theoretical lesson preceding this challenge.*

## Challenge description

### Lists  

Create your own LinkedList  class for storing integers which should include two methods:  
add(number) - Add a new Node to the end of the list with a value of number. Nothing needs to be returned. 
get(index) - Return the value of the Node at position `index` in the List.   

Example  

```

This is an example of a test case:  

const list = new LinkedList()

list.add(3)
list.add(5)
console.log(list.get(1))
// => 5
```


The 2 add operations create the list: [3, 5]. 
The get operation, gets the number located at position 1. 


### Solution explanation

The given code defines a Node class and a LinkedList class in JavaScript. The Node class has two properties: value to store the value of the node, and next_node to store a reference to the next node in the linked list.

The LinkedList class is set up with head and tail properties that are not defined in the given code snippet. The add method is also not implemented, but it takes a number as input and should add a new node with that value to the end of the linked list.

The get method also is not implemented, but it takes an index as input and should return the value of the node at that index in the linked list.

The given code creates a new instance of the LinkedList class, adds two nodes with values 3 and 5 to the linked list, and then prints the value of the node at index 1 (which should be 5).

To complete the add method, you would need to check whether the linked list is empty (i.e., if head is null). If it is, you would set both head and tail to the new node. Otherwise, you would traverse the linked list until you reach the last node (i.e., the node where next_node is null) and set its next_node property to the new node. You can use a while loop for this.

Here's an implementation of the add method:

add(number) {
  const new_node = new Node(number);
  if (!this.head) {
    this.head = new_node;
    this.tail = new_node;
  } else {
    let current_node = this.head;
    while (current_node.next_node) {
      current_node = current_node.next_node;
    }
    current_node.next_node = new_node;
    this.tail = new_node;
  }
}

To implement the get method, you would also need to traverse the linked list. You would start at the head node and move index nodes forward by following the next_node reference until you reach the node at the given index. Then you would return the value property of that node. If the index is out of bounds (i.e., less than 0 or greater than or equal to the length of the linked list), you should return null.

Here's an implementation of the get method:

get(index) {
  if (index < 0) {
    return null;
  }
  let current_node = this.head;
  for (let i = 0; i < index && current_node; i++) {
    current_node = current_node.next_node;
  }
  return current_node ? current_node.value : null;
}

With these methods implemented, the LinkedList class should now be functional.

### Troubleshooting

If you cannot see any auto-grading workflows on the [Actions](../../actions) page, learn how to fix it in [this repo](https://github.com/microverse-students/autograding-troubles-js/blob/main/README.md).
