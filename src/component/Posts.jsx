import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Posts() {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get('https://dummyjson.com/posts?limit=5')
            .then((response) => {
                setPosts(response.data.posts);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error('Ошибка:', error);
                setIsLoading(false);
            });
    }, []);

    if (isLoading) return <h2>Загрузка постов...</h2>;

    return (
        <div>
            <h1>Список постов</h1>
            <div className="posts-list">
                {posts.map((post) => (
                    <div key={post.id} className="post-card">
                        <h3>{post.title}</h3>
                         <Link to={`/posts/${post.id}`} className="read-more">
                            Читать пост
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}