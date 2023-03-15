import React, { useState, useEffect } from "react";
import Presentation from './Presentation'
import Query from './query.js'

type table = {
  factor: string;
  reason: string;
  solution: string;
};

type TableList = Array<table>;

let allTableList = [
  {
    factor: "太郎",
    reason: "Japan",
    solution: "焼肉"
  },
];


const TopContainer = () => {
  const openBalloon = (index: string) => {
    const target = document.getElementById(String(index));
    if(target == null) {
      return;
    } 
    else {
      target.style.visibility = "visible";
    }
  }

  const closeBalloon = (index: string) => {
    const target = document.getElementById(String(index));
    if(target == null) {
      return;
    } 
    else {
      target.style.visibility = "hidden";
    }
  }

  const [list, setList] = useState<TableList>(allTableList);
  const [tableList, setTableList] = useState<TableList>(list);

  useEffect(()=> {
    Query().then((result) => {setList(result), setTableList(result)});
  }, []);
  
  const search = (searchText: string) => {
    if (searchText !== "") {
      const filteredData = Object.entries(tableList)
      .filter(([, value]) => value.factor.includes(searchText))
      .map(([, value]) => value);
      setTableList(filteredData);
      return;
    }
    
    setTableList(list);
    return;
  };
  
  const [inputValue, setInputValue] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    search(e.target.value);
  };


  return (
    <Presentation
      inputValue={inputValue} 
      handleChange={handleChange} 
      tableList={tableList}
      openBalloon={openBalloon}
      closeBalloon={closeBalloon}
    />
  )
}

export default TopContainer