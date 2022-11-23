import { Lectures } from "@/mock/lectures";
import { searchQuery } from "@recoil/searchQuery";
import Search from "@components/main/search";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { getSearchResult } from "@apis/search";
import { ILectures } from "@/types/lecture";
import axios from "axios";

interface HomePropsType {
  results: ILectures;
}

const Index = () => {
  const sQuery = useRecoilValue(searchQuery);
  const [results, setResults] = useState({});
  return <Search results={Lectures} />;
};

export default Index;
