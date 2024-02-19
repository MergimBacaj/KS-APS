import { useParams } from "react-router-dom";
import { HandleRequestState } from "../components/HandleRequestState";
import Loading from "../components/Loading";
import Error from "../components/Error";
import useGetPost from "../utils/useGetPost";
import classes from "../styles/Post.module.css";

const Post = () => {
  const { userId } = useParams();
  const { loading, post, error } = useGetPost(Number(userId));
  if (!userId) {
    return <Error />;
  }
  return (
    <div className={classes.postContainer}>
      <HandleRequestState state={loading} placeholder={<Loading />}>
        <HandleRequestState state={error} placeholder={<Error />}>
          <h1 className={classes.postTitle}>{post?.title}</h1>
          <p className={classes.postBody}>
            {post?.body ? post.body : " No Posts for this user"}
          </p>
          <ul className={classes.postTags}>
            {post?.tags.map((tag, index) => (
              <li key={index}>{tag}</li>
            ))}
          </ul>
        </HandleRequestState>
      </HandleRequestState>
    </div>
  );
};

export default Post;
