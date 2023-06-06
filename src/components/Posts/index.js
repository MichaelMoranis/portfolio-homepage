import posts from "json/post.json"
import { Link } from "react-router-dom";

function Posts() {
 return (
   <div>
    {posts.map((item) => (
     <div key={item.id}>
      <Link>
        <div>
         div da imagem
        </div>
        <div>
         div do texto
        </div>
      </Link>
     </div>
    ))}
   </div>
 )
}

export default Posts;