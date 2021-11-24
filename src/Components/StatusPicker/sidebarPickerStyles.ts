import {ITheme} from "../../UI/types";

export const getStyles = (theme: ITheme) => ({
    control: () => ({
        backgroundColor: theme.primary,
        display: 'flex',
        alignItems: 'center',
        fontSize: 12,
        padding: 0,
        paddingLeft: 30,
        height: 30,
        borderRadius: 15,
        cursor: 'pointer'
    }),
    singleValue: () => ({
        gridArea: '1/1/2/3',
        color: theme.pickerText
    }),
    indicatorSeparator: () => ({}),
    dropdownIndicator: () => ({
        display: 'flex',
        marginRight: 7,
        color: theme.pickerText
    }),
    option: () => ({
        padding: '5px 10px',
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'center',
        transition: 'all ease 0.3s',
        backgroundColor: theme.primaryMessageBg,
        color: theme.primaryMessageText,
        '&:hover': {
            backgroundColor: theme.secondaryBg,
            color: theme.primaryText,
        }
    }),
    menuList: () => ({
        borderRadius: '15px',
        boxShadow: theme.shadow,

    })
})