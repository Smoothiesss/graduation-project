//constants
export const TOGGLE_SIDER = 'root.toggleMenu';
export const LOG_IN_SUCCESSFUL = 'root.LOG_IN_SUCCESSFUL';
export const GET_MENU_HEADER = 'root.GET_MENU_HEADER';


//func
export function onToggleSider() {
    return {
        type: TOGGLE_SIDER,
    };
}


export const loginSuccessFull = (authData) => {
    return {
        type: LOG_IN_SUCCESSFUL,
        payload: {authData}
    };
};

export const getMenuHeader = (menu) => {
    return {
        type: GET_MENU_HEADER,
        payload: menu
    };
};