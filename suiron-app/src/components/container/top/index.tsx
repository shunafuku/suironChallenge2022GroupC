import React, { useState } from "react";
import Presentation from './Presentation'

type table = {
  object: string;
  resolution: string;
  reason: string;
};

type TableList = Array<table>;

const allTableList = [
  {
    object: "オブジェクト1",
    resolution: "解決策1",
    reason: "理由1",
  },
  {
    object: "オブジェクト2",
    resolution: "解決策2",
    reason: "理由2",
  },
  {
    object: "オブジェクト3",
    resolution: "解決策3",
    reason: "理由3",
  },
  {
    object: "オブジェクト4",
    resolution: "解決策4",
    reason: "理由4",
  }
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
  
  const [inputValue, setInputValue] = useState("");
  const [tableList, setTableList] = useState<TableList>(allTableList);
  
  const search = (searchText: string) => {
    if (searchText !== "") {
      const filteredData = Object.entries(allTableList)
    .filter(([, value]) => value.object.includes(searchText))
    .map(([, value]) => value);
      setTableList(filteredData);
      return;
    }
  
    setTableList(allTableList);
    return;
  };
  
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