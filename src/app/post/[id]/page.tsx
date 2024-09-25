// 동적 라우팅
type Props = {
  params: {
    // 폴더명의 대괄호 (segment) 에 넣어준 값 그대로 이 Props에 params안에 들어가게 됨
    id: number;
  };
};

const PostDetailPage = ({ params }: Props) => {
  return <>ID: {params.id} Page</>;
};

export default PostDetailPage;
