"use client"; // 클라이언트 로직을 사용할거라는 뜻

import Link from "next/link";
import { useRouter } from "next/navigation"; // 반드시 next/navigation으로 불러오기 (next/router => 오류남)

export default function Home() {
  const router = useRouter();

  const handleButtonClick = () => {
    // 라우터는 로직이 있어서 로직 이후에 실행되야 할 때 써야함.
    setTimeout(() => {
      // 1초 뒤 비동기로 실행되는 로직
      router.push("/test");
    }, 1000);
  };

  const handleButtonClick2 = () => {
    // 라우터는 로직이 있어서 로직 이후에 실행되야 할 때 써야함.
    setTimeout(() => {
      // 1초 뒤 비동기로 실행되는 로직
      router.replace("/test");
    }, 1000);
  };

  return (
    <div>
      안녕하세요. Next.js 입니다!
      {/* a태그 */}
      <div>
        <a href={"/test"}>a로 Test페이지로 이동하기</a>
      </div>
      {/* Link 태그 */}
      <div>
        <Link href={"/test"}>Link로 Test페이지로 이동하기</Link>
      </div>
      {/* router.push */}
      <div>
        <button onClick={handleButtonClick}>클릭!</button>
      </div>
      {/* router.replace */}
      <div>
        <button onClick={handleButtonClick2}>클릭!</button>
      </div>
    </div>
  );
}
