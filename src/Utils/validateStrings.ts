export const validateStrings = (strs: string[]) => {
    let res = true

    strs.forEach(str => {
        if (str.trim().length === 0) {
            res = false
        }
    })

    return res
}