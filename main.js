import { LinkedList } from "./linkedList.js";

const list = new LinkedList();
list.append("cat");


console.log(list.toString());  // Output: ( dog ) -> ( cat ) -> ( parrot ) -> ( hamster ) -> ( snake ) -> ( turtle ) -> null
