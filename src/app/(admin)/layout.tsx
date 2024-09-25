"use client";

import React, { useEffect } from "react";

const AdminLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  useEffect(() => {
    console.log("렌더링 시 실행됩니다.");
  }, []); // 불필요한 재 렌더링을 하지 않음을 확인

  return (
    <>
      <h1>admin Page 입니다!</h1>
      {children}
    </>
  );
};

export default AdminLayout;
