const maxSumBetweenTwoNegatives = (a) => {
    let arr = []
    for (let i = 0; i < a.length; i++) {
        if (a[i] < 0) {
            arr.push(i)
        }
    }
    if (arr.length < 2) {
        return -1
    }
    let maxNum = 0
    for (let i = 0; i < arr.length -1; i++) {
        let first = arr[i] + 1
        let last = arr[i + 1] - 1
        let total = 0
        for (let k = first; k <= last; k++) {
            if (a[k] >= 0) {
                total += a[k]
            }
        }
        if (total > maxNum) {
            maxNum = total
        }
    }
    return maxNum
}

console.log(maxSumBetweenTwoNegatives([4, -1, 6, -2, 3, 5, -7, 7])) // 8
console.log(maxSumBetweenTwoNegatives([4, -1, -2])) // 0
console.log(maxSumBetweenTwoNegatives([1,-2])) // -1
console.log(maxSumBetweenTwoNegatives([1,-2, 1, 2, -1])) // 3
console.log(maxSumBetweenTwoNegatives([-1, 3, -2])) // 3
