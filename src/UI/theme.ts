import {ColorTheme} from "../Store/reducers/userReducer/types";
import {ITheme, statuses} from "./types";

export const getTheme = (theme: ColorTheme) => {
    const dark: ITheme = {
        primary: '#864879',
        primaryTransparent: 'rgba(134,72,121, 0.5)',
        contactInfoPrimary: '#eee',
        primaryMessageBg: '#864879',
        primaryMessageText: '#eee',

        newMessageBg: '#864879',
        newMessageColor: '#eee',



        pickerText: '#eee',

        primaryText: '#eee',
        secondaryText: '#eee',

        mainBg: '#1F1D36',
        secondaryBg: '#3F3351',
        chatHoverBg: 'rgba(31,29,54,0.3)',

        keyboardBorder: '1px solid #864679',
        settingsDots: '#eee',

        shadow: '0px 8px 40px rgba(173, 43, 146, 0.3)',

        statuses
    }
    // linear-gradient(135deg, rgba(255,255,255,1) 0%, rgba(242,246,247,1) 100%)

    const light: ITheme = {
        primary: '#6588DE',
        primaryTransparent: 'rgba(101, 136, 222, 0.5)',
        contactInfoPrimary: '#6588DE',
        primaryMessageBg: '#F3BA4A',
        primaryMessageText: '#FDFDFE',

        newMessageColor: '#eee',
        newMessageBg: '#6588DE',

        pickerText: '#eee',

        mainBg: 'rgba(242,246,247,1)',
        secondaryBg: '#E3F6FC',
        chatHoverBg: 'rgba(101, 136, 222, 0.1)',


        primaryText: '#52585D',
        secondaryText: '#96A9BA',

        settingsDots: '#6588DE',
        keyboardBorder: '1px solid rgba(150, 169, 186, 0.7)',

        shadow: '0px 8px 40px rgba(0, 72, 251, 0.3)',

        statuses
    }


    if (theme === 'dark') {
        return dark
    }

    return light
}