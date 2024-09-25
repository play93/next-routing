//정적 라우팅
import React from "react";

const TestPage = () => {
  return (
    <div>
      <h1>Test Page</h1>
      <p>Hello Next</p>
    </div>
  );
};

export default TestPage;
// 반드시 default를 사용해야 함.
// export default를 해야 page.tsx에 default로 export되어 있는 컴포넌트를 Next.js가 풀러가서 렌더링 해줌.
