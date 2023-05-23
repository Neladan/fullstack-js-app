import axios from "axios";
import { useEffect, useState } from "react";
import Post from "./Post";


// eslint-disable-next-line react/prop-types
const Thread = ({ userId }) => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3000/post/").then((res => setPosts(res.data)))
    }, [])

    return (
        <div className="thread-container">
            {posts
            // .sort((a, b) => b.createdAt.localecompare(a.createdAt))
            .map((post) => (
               <Post key={post._id} post={post} userId={userId}/>
            ))}
        </div>
    );
};

export default Thread;