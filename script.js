import { ClassList } from "./nodeList.js";

const list = new ClassList();
list.append("fun");
list.append("cool");
list.append("rad");
list.append("another");
list.prepend("first");
list.pop();
list.size();
list.nodeHead();
list.nodeTail();
list.nodeIndex(3);
list.contain("fun");
list.find("fun");
list.toString();
list.insertAt("groovy", 3);
list.remove(5);
console.log(list);
