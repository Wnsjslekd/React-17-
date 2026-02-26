import {lazy, Suspense} from "react";
import "./App.css";

const LazyComponent = lazy(() => import("./TestComponent"))

function App() {
  return (
    <div className="App">
      <h1>
        lazy와 Suspense
        <br /> 사용해보기
      </h1>
      <Suspense fallback={<h2>로딩중</h2>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
}

export default App;
