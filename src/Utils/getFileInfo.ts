type FileName = string
type FileExtension = string

export const getFileInfo = (path: string): [FileName, FileExtension] => {
    const filename = path

    const split = filename.split('.')
    const length = split.length
    let name

    const ext = split[length - 1] ?? ''

    if (length > 2) {
        const parts = split.splice(0, length - 1)
        name = parts.join('.')
    } else {
        name = split[0]
    }

    return [name, ext]
}