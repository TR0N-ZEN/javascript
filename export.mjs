function foo() {
    console.log("Hello i am an ex/imported function");
}

export { foo };

// export { name1, name2, …, nameN };
// export { variable1 as name1, variable2 as name2, …, nameN };
// export let name1, name2, …, nameN; // oder: var
// export let name1 = …, name2 = …, …, nameN; // oder: var, const

// export default expression;
// export default function (…) { … } // oder: class, function*
// export default function name1(…) { … } // oder: class, function*
// export { name1 as default, … };

// export * from …;
// export { name1, name2, …, nameN } from …;
// export { import1 as name1, import2 as name2, …, nameN } from …;

//https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Statements/export