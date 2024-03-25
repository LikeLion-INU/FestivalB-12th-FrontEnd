import React from 'react';
import './style.css';

function Mainpage() {
    return (
        <section className="login-form">
            <img src="LIONMEETING.png" alt="logo design" />
            <form action="">
                <div className="int-area">
                    <label htmlFor="id">인스타그램 아이디를 입력하세요</label>
                    <br/><br/>
                    <input type="text" name="id" id="id" 
                    placeholder="ex) @ lion1234"
                    autoComplete="off" required />
                </div>
                
                <div className="btn-area-2">
                    <button type="submit">확인</button>
                </div>
            </form>
        </section>
    );
}

export default Mainpage;
