import { action, computed, observable, runInAction } from "mobx";
import { loginSuccessFull } from "../../application/actions/appAction";
import store from '../../AppStore';
import history from "../../history";
import agent from "../api/agent";
import { IUser, IUserFormValues } from "../models/user";
import { RootStore } from "./rootStore";
import { toast } from "react-toastify";
export default class UserStore {
  rootStore: RootStore;
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }
  @observable user: IUser | null = null;

  @computed get isLoggedIn() {
    return !!this.user;
  }

  @action login = async (values: IUserFormValues) => {
    try {
      const user = await agent.User.login(values);
      runInAction(() => {
        this.user = user;
      });
      if (user) {
        console.log(user)
        toast.success('Đăng nhập thành công');
        this.rootStore.commonStore.setToken(user.token);
        this.rootStore.modalStore.closeModal();
        store.dispatch(loginSuccessFull(user));
      }
      setTimeout(() => {
        history.push("/#/dashboard");
        window.location.reload();
      }, 1000)

    } catch (error) {
      throw error;
    }
  };

  @action register = async (values: IUserFormValues) => {
    try {
      const user = await agent.User.register(values);
      this.rootStore.commonStore.setToken(user.token);
      this.rootStore.modalStore.closeModal();
      history.push("/activities");
    } catch (error) {
      throw error;
    }
  };

  @action getUser = async () => {
    try {
      const user = await agent.User.current();
      runInAction(() => {
        this.user = user;
      });
    } catch (error) {
      console.log(error);
    }
  };

  @action logout = () => {
    this.rootStore.commonStore.setToken(null);
    this.user = null;
    history.push("/");
  };
}
