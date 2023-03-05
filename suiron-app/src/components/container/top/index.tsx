import React, { useState } from "react";
import Presentation from './Presentation'

type table = {
  situation: string;
  resolution: string;
};

type TableList = Array<table>;

const allTableList = [
  {
    situation: "太郎",
    resolution: "Japan",
  },
  {
    situation: "花子",
    resolution: "Japan",
  },
  {
    situation: "リチャード",
    resolution: "Canada",
  },
  {
    situation: "マイケル",
    resolution: "USA",
  }
];

const TopContainer = () => {
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
    <Presentation inputValue={inputValue} handleChange={handleChange} tableList={tableList}/>
  )
}

export default TopContainer