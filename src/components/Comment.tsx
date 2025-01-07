'use client'
import React, {useState, useEffect} from "react"

const CommentSection = () =>{
    const [comment, setComment] = useState("")
    const [comments,setComments] = useState<string[]>([]);

    useEffect(() => {
        const storedComments = localStorage.getItem('comments');
        if (storedComments){
            try{
                const parsedComments = JSON.parse(storedComments)
                setComments(parsedComments);
            } catch(error){
                console.error('Error parsing comments from local storage:', error);
            }
        }
    },[]);

    useEffect(()=>{
        localStorage.setItem('comments',JSON.stringify(comments));
    },[comments]);

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();

        if (comment.trim()){
            setComments([comment, ...comments]);
            setComment("");
        }
    } 
    return(
        <>
        <div>
            <h2>Comment Section</h2>
            <form onSubmit={handleSubmit}>
                <textarea 
                name="comment" 
                id="comment"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Leave a comment..."
                className=""
                >
                </textarea>
            </form>

            <div>
                <h3>Comments</h3>
                <div>
                    {comments.length > 0 ?(
                         comments.map((comment,index) => (
                            <div key={index}>
                                <p>{comment}</p>
                            </div>
                        ))
                    ):(
                        <p>No comments yet.</p>
                    )}
                </div>
            </div>
        </div>
        </>
    )
}
export default CommentSection()