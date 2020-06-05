import * as _ from "lodash";
import { TOGGLE_SIDER } from '../actions/appAction';

const initialState = {
    siderCollapsed: false   
};

export default (state = initialState, action) => {
    switch (action.type) {
       
        case TOGGLE_SIDER:
            return {
                ...state,
                siderCollapsed: !state.siderCollapsed
            };
       
        default:
            return state;
    }
};



