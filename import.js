import { foo } from "./export.mjs";

foo();


// import name from "module-name";
// import * as name from "module-name";
// import { member } from "module-name";
// import { member as alias } from "module-name";
// import { member1 , member2 } from "module-name";
// import { member1 , member2 as alias2 , [...] } from "module-name";
// import defaultMember, { member [ , [...] ] } from "module-name";
// import defaultMember, * as alias from "module-name";
// import defaultMember from "module-name";
// import "module-name";

//https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Statements/import

//with node on version 14.x the code above wont work but maybe in higher