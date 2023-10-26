/* import PostCard from "../../components/postsCard"; */
import PostCard from "@/components/postsCard";
import "./Posts.css";

export const metadata = {
   title: "Posts - PruebaWeb",
};

//React Server Component Back-end
const loadPosts = async () => {
   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
   const data = await res.json();

   await new Promise((resolve) => setTimeout(resolve, 1500));
   return data;
};

const PostsPage = async () => {
   const posts = await loadPosts();

   return (
      <div className="grid">
         {posts.map((post) => (
            <PostCard post={post} key={post.id} />
         ))}
      </div>
   );
};

export default PostsPage;
