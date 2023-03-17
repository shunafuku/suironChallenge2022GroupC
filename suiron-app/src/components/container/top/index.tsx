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
      "factor": "rug47",
      "reason": "転倒の危険がある",
      "solution": "移動させる"
  },
  {
      "factor": "clothespile108",
      "reason": "転倒の危険がある",
      "solution": "移動させる"
  },
  {
      "factor": "floor60",
      "reason": "転倒の危険がある",
      "solution": "掃除する"
  },
  {
      "factor": "floor204",
      "reason": "転倒の危険がある",
      "solution": "掃除する"
  },
  {
      "factor": "floor208",
      "reason": "転倒の危険がある",
      "solution": "掃除する"
  },
  {
      "factor": "floor308",
      "reason": "転倒の危険がある",
      "solution": "掃除する"
  },
  {
      "factor": "floor207",
      "reason": "転倒の危険がある",
      "solution": "掃除する"
  },
  {
      "factor": "floor57",
      "reason": "転倒の危険がある",
      "solution": "掃除する"
  },
  {
      "factor": "floor21",
      "reason": "転倒の危険がある",
      "solution": "掃除する"
  },
  {
      "factor": "floor203",
      "reason": "転倒の危険がある",
      "solution": "掃除する"
  },
  {
      "factor": "floor305",
      "reason": "転倒の危険がある",
      "solution": "掃除する"
  },
  {
      "factor": "floor22",
      "reason": "転倒の危険がある",
      "solution": "掃除する"
  },
  {
      "factor": "bed321",
      "reason": "転落の危険がある",
      "solution": "転落時の衝撃を緩和するため、低床のベッドにする"
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