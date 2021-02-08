import {useState} from 'react';
import {useUpdate} from './useUpdate';
import {RecordItem} from '../views/helper';

const defaultRecords = [
  {
    'tagsName': [
      '衣'
    ],
    'note': '优衣库短袖T恤',
    'category': '-',
    'output': 79,
    'createdAt': '2021-02-01T13:52:26.038Z'
  },
  {
    'tagsName': [
      '还款'
    ],
    'note': '花呗',
    'category': '-',
    'output': 816,
    'createdAt': '2021-02-09T13:52:26.038Z'
  },
  {
    'tagsName': [
      '行'
    ],
    'note': '手机公交卡充值',
    'category': '-',
    'output': 100,
    'createdAt': '2021-02-01T11:52:26.038Z'
  },
  {
    'tagsName': [
      '行'
    ],
    'note': '打车去蹦迪',
    'category': '-',
    'output': 35.9,
    'createdAt': '2021-02-02T11:52:38.770Z'
  },
  {
    'tagsName': [
      '行'
    ],
    'note': '周末崇礼滑雪',
    'category': '-',
    'output': 980,
    'createdAt': '2021-02-07T13:52:38.770Z'
  },
  {
    'tagsName': [
      '工资'
    ],
    'note': '1月工资到账啦',
    'category': '+',
    'output': 22000,
    'createdAt': '2021-01-31T13:52:57.279Z'
  },
  {
    'tagsName': [
      '加班费'
    ],
    'note': '加班写代码',
    'category': '+',
    'output': 200,
    'createdAt': '2021-02-07T12:52:57.279Z'
  },
  {
    'tagsName': [
      '内推奖励'
    ],
    'note': 'Y-y_x同学成功入职',
    'category': '+',
    'output': 5000,
    'createdAt': '2021-02-07T13:52:57.279Z'
  },
  {
    'tagsName': [
      '基金'
    ],
    'note': '卖出10%仓位富国天惠',
    'category': '+',
    'output': 3300,
    'createdAt': '2021-02-06T13:52:57.279Z'
  },
  {
    'tagsName': [
      '股票'
    ],
    'note': '宁德时代做T',
    'category': '+',
    'output': 8100,
    'createdAt': '2021-02-08T13:52:57.279Z'
  },
  {
    'tagsName': [
      '外快'
    ],
    'note': '周五下班开滴滴',
    'category': '+',
    'output': 200,
    'createdAt': '2021-02-05T13:53:25.407Z'
  },
  {
    'tagsName': [
      '外快'
    ],
    'note': '周末教编程',
    'category': '+',
    'output': 400,
    'createdAt': '2021-02-06T13:53:25.407Z'
  },
  {
    'tagsName': [
      '衣'
    ],
    'note': '本命年红内裤',
    'category': '-',
    'output': 19.9,
    'createdAt': '2021-02-08T12:52:26.038Z'
  },
  {
    'tagsName': [
      '外卖'
    ],
    'note': '特价烤鱼真香',
    'category': '-',
    'output': 99,
    'createdAt': '2021-02-02T13:52:26.038Z'
  },
  {
    'tagsName': [
      '买菜'
    ],
    'note': '西兰花鸡胸做健身餐',
    'category': '-',
    'output': 26.9,
    'createdAt': '2021-02-05T13:52:26.038Z'
  },
  {
    'tagsName': [
      '食'
    ],
    'note': '食堂两菜一汤',
    'category': '-',
    'output': 25,
    'createdAt': '2021-02-03T13:52:26.038Z'
  },
  {
    'tagsName': [
      '给自己充电'
    ],
    'note': '报名英语演讲课程',
    'category': '-',
    'output': 3000,
    'createdAt': '2021-02-03T12:52:26.038Z'
  }
];
export const useRecords = () => {
  const initRecordsString = window.localStorage.getItem('records');
  let initRecords = initRecordsString ? JSON.parse(initRecordsString) : defaultRecords;
  const [records, setRecords] = useState<RecordItem[]>(initRecords);
  const addRecords = (record: RecordItem) => {
    const newRecords = [...records, record];
    setRecords(newRecords);
  };
  useUpdate(() => {
    window.localStorage.setItem('records', JSON.stringify(records));
  }, records);
  return {records, addRecords};
};