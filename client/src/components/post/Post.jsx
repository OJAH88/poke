import "./post.css"
import { MoreVert } from "@material-ui/icons"

export default function Post() {
    return(
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className="postProfileImg" src="/assets/person/pic1.jpg" />
                        <span className="postUsername">Jui</span>
                        <span className="postDate">5 minutes ago</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">The best Japanese garlic fried rice. Poke it now!</span>
                    <img className="postImg" src="/assets/post/post1.jpg" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className="pokeIcon" src="/assets/post/poke1.png" />
                        <span className="pokeCounter">2,054,968 people poked it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">1,225,398 comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
