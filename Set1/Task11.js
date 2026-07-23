function checkResult(name, marks) {
    if (marks >= 40) {
        return name + " has Passed";
    } else {
        return name + " has Failed";
    }
}
console.log(checkResult("John", 75));
// Output:
// John has Passed
