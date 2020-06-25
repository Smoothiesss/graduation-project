import * as _ from "lodash";
import { TOGGLE_SIDER, LOG_IN_SUCCESSFUL, GET_MENU_HEADER } from '../actions/appAction';
import { act } from "react-dom/test-utils";

const initialState = {
    siderCollapsed: localStorage.getItem('collapsedSideMenu') === "true" ? true : false,
    isAuthenticated: false,
    authData: {},
    headerMenu: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case LOG_IN_SUCCESSFUL:
            return {
                ...state,
                isAuthenticated: true,
                authData: action.payload
            };
        case TOGGLE_SIDER:
            return {
                ...state,
                siderCollapsed: !state.siderCollapsed
            };
        case GET_MENU_HEADER:
            return {
                ...state,
                headerMenu: action.payload
            };

        default:
            return state;
    }
};



