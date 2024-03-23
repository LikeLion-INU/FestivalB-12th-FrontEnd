import React, {useState} from 'react';
import '../../App.css';
import { LeftOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

const Icon = styled(LeftOutlined)`
    color: #FF7CA3;
    font-size: 25px;
`;

const choices = [
    {
        questionMain: "질문 1",
        questionSub: "를 선택해주세요",
        emphaticWord: "키",
        options: [
            { value: "165 이하"},
            { value: "165 이상"},
            { value: "175 이하"},
            { value: "175 이상"},
        ]
    },
    {
        questionMain: "질문 2",
        questionSub: "를 선택해주세요",
        emphaticWord: "나이",
        options: [
            { value: "연상"},
            { value: "연하"},
            { value: "동갑"},
        ]
    },
];

function MyKeyWordPage() {
    const [questionIndex, setQuestionIndex] = useState(0);
    
    const handleNextButtonClick = () => {
        // 다음 질문의 인덱스로 상태를 업데이트
        setQuestionIndex(prevIndex => prevIndex + 1);
    };

    const handlePrevButtonClick = () => {
        // 이전 질문의 인덱스로 상태를 업데이트
        setQuestionIndex(prevIndex => prevIndex - 1);
    };

  return (
    <div className="container">
        <button type="button" className="btn-prev" onClick={handlePrevButtonClick}><Icon /></button>
        <div className="title"> 
            <p>{choices[questionIndex].questionMain}</p>
            <p><span>{choices[questionIndex].emphaticWord}</span>{choices[questionIndex].questionSub}</p>
        </div>
        <div className="blank"></div>
        <div className="question-container">
            {choices[questionIndex].options.map(option => (
                <button key={option.value}>{option.value}</button>
            ))}
        </div>
        <button className="btn-next" onClick={handleNextButtonClick}><p>다음</p></button>
    </div>
  );
}

export default MyKeyWordPage;