import { useParams } from 'react-router-dom';
import PostEditor from '@/components/admin/PostEditor';

const CreatePost = () => {
  const { id } = useParams();
  const mode = id ? 'edit' : 'create';

  return <PostEditor postId={id} mode={mode} />;
};

export default CreatePost;