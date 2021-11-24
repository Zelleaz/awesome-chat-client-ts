export interface StorageItem {
    key: string
    value: string
}

class LocalStorageHelper {
    public set(item: StorageItem) {
        localStorage.setItem(item.key, item.value)
    }

    public get(key: string) {
        return localStorage.getItem(key)
    }

    public setMany(items: StorageItem[]) {
        items.forEach(item => {
            this.set(item)
        })
    }

    public getMany(keys: string[]) {
        const result: string[] = []

        keys.forEach(key => {
            const item = this.get(key)
            item && result.push(item)
        })

        return result
    }
}

export default new LocalStorageHelper()