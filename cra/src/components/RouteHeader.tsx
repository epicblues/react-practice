import React, { FunctionComponent } from "react";

const RouteHeader: FunctionComponent<any> = () => {
  return (
    <div>
      <h1>Route Header</h1>
      <p>이 영역은 공통 영역이므로 라우트 되지 않습니다</p>
    </div>
  );
};

export default RouteHeader;
