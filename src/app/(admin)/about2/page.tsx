// 특정 폴더를 segment로 사용하고 싶지 않을 때 소괄호로 감싸주면 됨.
// 레이아웃이나 로딩스크롤 처럼 특별한 파일들을 그룹화해서 해당 스코프(서브Tree) 안에서만 적용되는 특수파일들을 적용시키기 위해 나눠주는 의미가 큼

import Link from "next/link";

// 동적인 메타데이터
type Props = {
  params: {
    id: string;
  };
};

export const generateMetadata = ({ params }: Props) => {
  return {
    title: "안녕하세요 About2 Page 입니다",
    description: "Generated by create next app",
  };
};

const AboutPage2 = () => {
  return (
    <div>
      <Link href={"/about"}> about으로 이동</Link>
    </div>
  );
};

export default AboutPage2;
