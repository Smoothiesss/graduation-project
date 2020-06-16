import { useContext } from "react";
import { RootStoreContext } from "../../stores/rootStore";
// import { observer } from "mobx-react-lite";
import history from '../../../history';

export function Logout() {
    const rootStore = useContext(RootStoreContext);
    const { token } = rootStore.commonStore;
    const { logout } = rootStore.userStore;
    if (token) {
        logout()
        setTimeout(() => {
            history.push("/#/login");
            window.location.reload();
        }, 1000)
    }
    return true;
}
// export default observer(Logout);
