import React from 'react';
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
    }
];

function MyKeyWordPage() {
  return (
    <div class="container">
        <button type="button" class="btn-prev"><Icon /></button>
        <div class="title"> 
            <p>{choices[0].questionMain}</p>
            <p><span>{choices[0].emphaticWord}</span>{choices[0].questionSub}</p>
        </div>
        <div class="blank"></div>
        <div class="question-container">
            {choices[0].options.map(option => (
                <button key={option.value}>{option.value}</button>
            ))}
        </div>
        <button class="btn-next"><p>다음</p></button>
    </div>
  );
}

export default MyKeyWordPage;