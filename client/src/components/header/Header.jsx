import "./header.css"

export default function Header() {
    return (
        <div className='header'>
            <div className="headerTitles">
                <span className="headerTitleSm">Welcome To</span>
           <span className="headerTitleLg">BlogApp</span>
            </div>
            <img className="headerImg" src="https://images.pexels.com/photos/1643402/pexels-photo-1643402.jpeg?cs=srgb&dl=pexels-visually-us-1643402.jpg&fm=jpg" alt="" />
        </div>
    )
}

