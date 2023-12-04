import React, { useEffect, useState } from "react";

const User = {
    email: "test@example.com",
    pw: "test2323@@@"
}

export default function Login () {
    const [email, setEmail] = useState('');
    const [pw, setPw] = useState('');

    const [emailVaild, setEmailValid] = useState(false);
    const [pwlVaild, setPwlValid] = useState(false);
    const [notAllow, setNotAllow] = useState(true);


    const handleEmail = (e) => {
        setEmail(e.target.value);
        //정규표현식: 이메일형식에 맞게 입력을 하게 되면 errormessage 뜨지 않음
        const regex =  /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
        if (regex.test(email)) {
            setEmailValid(true);
        } else {
            setEmailValid(false);
        }
    }

    const handlePassword = (e) => {
        setPw(e.target.value);
        const regex =
        /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
      if (regex.test(e.target.value)) {
        setPwlValid(true);
      } else {
        setPwlValid(false);
      }
    }

    const onClickComfirmButton = () => {
        if(email === User.email && pw === User.pw) {
            alert ('로그인에 성공했습니다.');
        }   else {
            alert ('등록되지 않은 회원입니다.');
        }
    }

    useEffect (() =>{
        if(emailVaild && pwlVaild) {
            setNotAllow(false);
            return;
        }
             setNotAllow(true);
    },[emailVaild,pwlVaild]);

    return (
        <div className="page">
            <div className="titleWrap">
            DASOM
            </div>

            <div className="contentWrap">
                <div className="inputTitle">이메일 주소</div>
                <div className="inputWrap">
                    <input
                    type="text"
                      className="input"
                      placeholder="@example.com"
                      value={email}
                      onChange={handleEmail}/> 
                </div>
                <div className="errorMessageWrap"> 
                {
                    ! emailVaild && email.length > 0 && (
                        <div> 올바른 이메일을 입력하세요. </div>
                        )}
                </div>

                <div style={{marginTop: "26px"}} className="inputTitle">비밀번호</div>
                <div className="inputWrap">
                    <input 
                    type="password"
                    className="input"
                    placeholder="영문, 숫자, 특수문자 포함 8자 이상 입력해주세요."
                    value={pw}
                    onChange={handlePassword}/>
                </div>
                <div className="errorMessageWrap"> 
                {
                    ! pwlVaild && pw.length > 0 && (
                        <div>영문, 숫자, 특수문자 포함 8자 이상 입력하세요.</div>
                         )}
                </div>
            </div>
            <div>
                <button onClick = {onClickComfirmButton}
                disabled={notAllow}className="bottomButton">
                    확인
                </button>
            </div>
        </div>
    );
}