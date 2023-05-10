import React from 'react'
import user1 from "../media/user1.png"
import user2 from "../media/user2.png"
import user3 from "../media/user3.png"
import user4 from "../media/user4.png"

function Index() {
  return (
    <>
        <div className='indexMain'>
            <div className='container'>
                <h1>
                    Kim izliyor?
                </h1>
                <ul>
                    <li>
                        <a href="">
                            <img src={user1} alt="" />
                            <div>USER</div>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img src={user2} alt="" />
                            <div>USER</div>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img src={user3} alt="" />
                            <div>USER</div>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img src={user4} alt="" />
                            <div>USER</div>
                        </a>
                    </li>
                </ul>
                <span>
                    <a href="">
                        Profil Yönetimi
                    </a>
                </span>
            </div>   
        </div>
    </>
  )
}

export default Index