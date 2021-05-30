import './message.css'

export default function Message({own}) {
    return (
        <div className={own? "message own" : "message"}>
            <div className="messageTop">
                <img className="messageImg" src="https://static.cpcache.com/homePage/homepage-may2021/fathers-day-hats-trucker-custom-gift.jpg" alt="" />
                <p className="messageText">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="messageBottom">1 hour ago</div>
        </div>
    )
}
