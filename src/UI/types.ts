export interface ITheme {
    primary: string
    primaryTransparent: string
    contactInfoPrimary: string
    primaryMessageBg: string
    primaryMessageText: string

    mainBg: string
    secondaryBg: string
    chatHoverBg: string

    pickerText: string

    primaryText: string
    secondaryText: string

    keyboardBorder: string

    newMessageBg: string
    newMessageColor: string

    shadow: string

    settingsDots: string

    statuses: Statuses
}/* Rectangle 3 */



interface Statuses {
    0: string
    1: string
    2: string
    3: string
}

export const statuses: Statuses = {
    0: '#8E8E8E',
    1: '#46D362',
    2: '#FD2828',
    3: '#F3BA4A'
}