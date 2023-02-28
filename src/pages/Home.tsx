import Insta from '../images/instagram.png'
import Search from '../icons/search.png'
import HomeActive from '../icons/home-active.png'
import MSG from '../icons/msg.png'
import Add from '../icons/add.png'
import Trends from '../icons/trends.png'
import Likes from '../icons/likes.png'
import { useAppDispatch, useAppSelector } from '../hooks/hook'
import { useEffect } from 'react'
import { getPosts } from '../reducers/user/posts/postsAction'
import Options from '../icons/options.png'
import Comments from '../icons/comments.png'
import Share from '../icons/share.png'
import Save from '../icons/save.png'
import dayjs from 'dayjs'
import Emoji from '../icons/emojis.png'
import Emojii from '../icons/emojiis.png'
import ReadMoreReadLess from '../components/ReadMoreReadLess'

const Home: React.FC = () => {
    const dispatch = useAppDispatch()

    const {posts} = useAppSelector(state => state.posts)
    
    console.log(posts);
    
    useEffect(() => {
        dispatch(getPosts())
    }, [dispatch])
     
    return (
        <div className="home-wrapper">
            <header className="home-header">
                <div>
                    <img src={Insta} alt="error" />
                </div>
                <div className="search">
                    <div><img src={Search} alt="error" /></div>
                    <p>Search</p>
                </div>
                <div className='icons'>
                    <div><img src={HomeActive} alt="error" /></div>
                    <div><img src={MSG} alt="error" /></div>
                    <div><img src={Add} alt="error" /></div>
                    <div><img src={Trends} alt="error" /></div>
                    <div><img src={Likes} alt="error" /></div>
                    <div className="profile"></div>
                </div>
            </header>
            <div className='posts-items'>
                <div className="posts">
                    {posts.map(i => (
                        <div key={i._id}>
                            <div className="posts-header">
                                <div className="left-items">
                                    <div className='avatar-block'>
                                        <img className='avatar' src={i.user.avatar} alt="" />
                                    </div>
                                    <div className="profile">
                                        <p>{i.user.username}</p>
                                    </div>
                                </div>
                            </div>
                            <div key={i._id}>
                            <div className="map-block">
                                <img src={i.image} alt="error" />
                            </div>
                            <div className="post-icons">
                                <div className="left-icons">
                                    <img src={Likes} alt="error" />
                                    <img src={Comments} alt="error" />
                                    <img src={Share} alt="error" />
                                </div>
                                <div className="right-icon">
                                    <img src={Save} alt="error" />
                                </div>
                            </div>
                            <div className="post-footer">
                                <p className='likes'>9.999 likes</p>
                                <span>{i.user.username}</span>
                                <ReadMoreReadLess limit={5}>{i.description}</ReadMoreReadLess>
                                <p className='comments'>See 99 comments</p>
                                <p className='created'>9 HOURS AGO</p>
                                <div className="add-comment">
                                    <div>
                                        <img src={Emoji} alt="error" />
                                        <img className='pos-absolute' src={Emojii} alt="error" />
                                    </div>
                                    <p>Add a comment...</p>
                                </div>
                            </div>
                        </div>
                        </div>
                    ))}
                </div>
                <div className="profil-info">
                    <div className="profil-header">
                        <div className="left-items">
                            <div className="krug"></div>
                            <div>
                                <p className='first-p'>johndoe</p>
                                <p className='second-p'>John Doe</p>
                            </div>
                        </div>
                        <div className="right-item">
                            Change
                        </div>
                    </div>
                    <div className='sug'>
                        <p>Suggestions for you</p>
                        <p className='second-p'>See all</p>
                    </div>
                    {posts.map(i => (
                         <div className="follow" key={i._id}>
                           <div className="left-items">
                                <div><img src={i.user.avatar} alt="error" /></div>
                                <div className='text'>
                                    <p className='username'>{i.user.username}</p>
                                    <p className="sug">Suggestions for you</p>
                                </div>
                           </div>
                           <div className="right-item">
                                Follow
                           </div>
                        </div>
                    ))}
                    <div className="follow-footer">
                        <div className='first-text'>
                            Information · Help · Prisoner · API · Job · Privacity · Conditions · Locations · Trending accounts · Hashtags · Language
                        </div>
                        <div className="second-text">© 2022 INSTAGRAM FROM SIMMXS</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home