import Layout from '../Components/Layout';
import React, {useState} from 'react';
import {CategorySection} from './Money/CategorySection';
import {useRecords} from '../hooks/useRecords';
import {Category, RecordItem} from './helper';
import styled from 'styled-components';
import day from 'dayjs';

const CategorySectionWrapper = styled.div`
background: white;
`;

const RecordsWrapper = styled.div`
> ul{
  > li{
  display: flex;
  background: white;
  justify-content: space-between;
  font-size: 16px;
  line-height: 20px;
  padding:10px 16px;
   .category{ 
    }
   .note{ 
   color: #999;
   text-align: left;
   margin-right: auto;
   margin-left: 16px;
    }
    .output{
    }
  }
}
`;
const Header = styled.h3`
font-size: 18px ;
line-height: 20px;
padding: 10px 16px;
`

function Statistics() {
  const format = "YYYY年MM月DD日"
  const {records} = useRecords();
  const [category, setCategory] = useState<Category>('-');
  const onChange = (category: Category) => {
    setCategory(category);
  };
  const selectedRecords = records.filter((record) => record.category === category);
  const recordHash: { [K: string]: RecordItem[] } = {};
  selectedRecords.forEach((record) => {
    let key = day(record.createdAt).format(format);
    if (!(key in recordHash)) {
      recordHash[key] = [];
    }
    recordHash[key].push(record);
  });
  //对象变为数组并排序
  const recordHashArray = Object.entries(recordHash).sort((a, b) => {
    if (a[0] < b[0]) return 1;
    else if (a[0] > b[0]) return -1;
    else return 0;
  });
    const now = new Date().toISOString()
  return (
    <Layout>
      <CategorySectionWrapper>
        <CategorySection value={category} onChange={category => onChange(category)}/>
      </CategorySectionWrapper>
      {recordHashArray.map(([_date, dateRecords]) => {
        let date= _date
        if(date===day(now).format(format)){
          date = "今天"
        }else if(date===day(now).subtract(1,"day").format(format)){
          date = "昨天"
        }else if(date===day(now).subtract(2,"day").format(format)){
          date = "前天"
        }
        return (
          <RecordsWrapper key={date}>
            <Header>{date}</Header>
            <ul>
              {dateRecords.filter((record) => record.category === category).map((record) => {
                return <li key={record.createdAt}>
                  <div className="category oneLine">
                    {record.tagsName.join("，")}
                  </div>
                  <div className="note">
                    {record.note === '' ? <div/> : <div>{record.note}</div>}
                  </div>
                  <div className="output">
                    ¥{record.output}
                  </div>
                </li>;
              })}
            </ul>
          </RecordsWrapper>
        );
      })}
    </Layout>
  );
}

export default Statistics;