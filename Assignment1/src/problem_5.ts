function checkString(param: unknown): void {
    if (typeof param === 'string') {
        console.log(param)
    } else {
        console.log("Param not string")
    }
}
// checkString('next level web development')
// checkString(2.0)