var globalVar = 'I am a global variable';
function scopeExample() {
    // Using var
    var localVar = 'I am a local variable';
    console.log(globalVar)//// Accessible
    {
        // Using let
        let blockScopedVar = 'I am a block-scoped variable';
        // Using const
        const constantVar = 'I am a constant variable';
        console.log(localVar); // Accessible
        console.log(blockScopedVar); // Accessible
        console.log(constantVar); // Accessible
        console.log(globalVar)//// Accessible
    }
    console.log(localVar); // Accessible
    // console.log(blockScopedVar); // Not accessible, blockScopedVar is not defined here
    // console.log(constantVar); // Not accessible, constantVar is not defined here
    console.log(globalVar)//// Accessible
}

scopeExample();
console.log(globalVar)//// Accessible
// console.log(localVar); // Not accessible, localVar is not defined here
// console.log(blockScopedVar); // Not accessible, blockScopedVar is not defined here
// console.log(constantVar); // Not accessible, constantVar is not defined here