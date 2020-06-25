import * as _ from "lodash";
import { TOGGLE_SIDER, LOG_IN_SUCCESSFUL } from '../actions/appAction';

const initialState = {
    siderCollapsed: false,
    isAuthenticated: false,
    authData:{}
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

        default:
            return state;
    }
};



