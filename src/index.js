import configureStore from "./store/configureStore";
import { loadBugs, resolveBug, assignBugToUser } from "./store/bugs";

const store = configureStore();

store.dispatch(loadBugs());
setTimeout(() => store.dispatch(assignBugToUser(4, 2), 2000));
setTimeout(() => {
  console.log(store.getState().entities.bugs.list);
}, 4000);
