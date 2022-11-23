import styled from "styled-components";
import { useRecoilState } from "recoil";
import { searchQuery } from "@recoil/searchQuery";
import React, { useEffect, useState } from "react";
import LectureList from "./list";

interface SearchProps {
  results?: any;
}

interface ContainerProps {
  isExpand: boolean;
}

const Search = ({ results }: SearchProps) => {
  const [isExpand, setIsExpand] = useState(false);
  const [sQuery, setSQuery] = useRecoilState(searchQuery);
  useEffect(() => {
    sQuery.length < 1 && setIsExpand(false);
    results.count >= 0 && setIsExpand(true);
  });
  return (
    <Container>
      <InputBoxContainer isExpand={!isExpand}>
        <InputBox
          autoFocus
          autoComplete="off"
          placeholder="강의 키워드를 입력해 주세요!"
          onKeyUp={(e: any) => setSQuery(e.target.value)}
        />
        {!isExpand && <LectureList></LectureList>}
        {results.count >= 0 && <span>검색 결과가 없습니다.</span>}
      </InputBoxContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  min-height: 50px;
  height: auto;
  display: flex;
  justify-content: center;
`;

const InputBoxContainer = styled.div<ContainerProps>`
  width: min(500px, 100%);
  min-height: 50px;
  height: auto;
  box-shadow: 0px 4px 8px 1px rgba(0, 0, 0, 0.1);
  border-radius: 30px;
  background-color: white;
  ${({ isExpand }) =>
    isExpand &&
    `
    min-height: 100px;
  `};
`;

const InputBox = styled.input`
  width: min(500px, 100%);
  height: 50px;
  padding: 0 20px;
  font-size: ${({ theme }) => theme["16px"]};
  color: gray;
  background-color: transparent;
  border-radius: 30px;
  outline: none;
  border: none;
`;

export default Search;
