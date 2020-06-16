//constants
export const TOGGLE_SIDER = 'menu.toggleMenu';
export const LOG_IN_SUCCESSFUL = 'root.LOG_IN_SUCCESSFUL';


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

