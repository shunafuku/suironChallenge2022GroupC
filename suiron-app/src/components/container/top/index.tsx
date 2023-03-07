import React, { useState, useEffect } from "react";
import Presentation from './Presentation'

type table = {
  situation: string;
  resolution: string;
};

type TableList = Array<table>;

const allTableList = [
  {
    situation: "状況1",
    resolution: "解決策1",
    reason: "理由1",
  },
  {
    situation: "状況2",
    resolution: "解決策2",
    reason: "理由2",
  },
  {
    situation: "状況3",
    resolution: "解決策3",
    reason: "理由3",
  },
  {
    situation: "状況4",
    resolution: "解決策4",
    reason: "理由4",
  }
];

const TopContainer = () => {
  const [isBalloon, setIsBalloon] = useState(false);
  const openBalloon = () => {
    setIsBalloon(true);
  }
  const closeBalloon = () => {
    setIsBalloon(false);
  }
  
  const [inputValue, setInputValue] = useState("");
  const [tableList, setTableList] = useState<TableList>(allTableList);
  
  const search = (value: string) => {
    if (value !== "") {
      const filteredList = allTableList.filter((table: table) =>
        Object.values(table).some(
          (item: string) =>
            item?.toUpperCase().indexOf(value.trim().toUpperCase()) !== -1
        )
      );
      setTableList(filteredList);
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
      isBalloon={isBalloon}
      openBalloon={openBalloon}
      closeBalloon={closeBalloon}
    />
  )
}

export default TopContainer