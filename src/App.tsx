import UseCallbackBadApproch from "./memoComponent/useCallback/badApproch";
import UseCallbackGoodApproch from "./memoComponent/useCallback/goodApproch";
import UseMemoBadApproch from "./memoComponent/useMemo/badApproch";
import UseMemoGoodApproch from "./memoComponent/useMemo/goodApproch";
import { ActiveUsersList } from "./singleResponsibility/finish";
import UserList from "./singleResponsibility/start";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      {/* <h2>Single responsibility - start</h2>
      <UserList />
      <h2>Single responsibility - finish</h2>
      <ActiveUsersList /> */}
        {/* <UseCallbackBadApproch />
      <br/>
      <UseCallbackGoodApproch /> */}
      <UseMemoBadApproch />
      <br/>
      <UseMemoGoodApproch />
    </div>
  );
}
