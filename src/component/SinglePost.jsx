import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

export default function SinglePost() {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        axios.get(`https://dummyjson.com/posts/${id}`)
            .then((response) => {
                setPost(response.data);
                setIsLoading(false);
            })
            .catch((err) => {
                console.error('Ошибка:', err);
                setError(true);
                setIsLoading(false);
            });
    }, [id]);

    if (isLoading) return <h2>Загрузка...</h2>;

     if (error || !post) return <h2>Пост не найден</h2>;

    return (
        <div className="single-post">
            <h1>{post.title}</h1>
            <p>{post.body}</p>

            <br />
            <Link to="/posts" className="back-link">
                ← Назад к списку
            </Link>
        </div>
    );
}