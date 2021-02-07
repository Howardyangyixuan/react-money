import {useState} from 'react';
import {useUpdate} from './useUpdate';
import {RecordItem} from '../views/helper';

export const useRecords = () => {
  const initRecordsString = window.localStorage.getItem('records');
  let initRecords = initRecordsString ? JSON.parse(initRecordsString) : [];
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