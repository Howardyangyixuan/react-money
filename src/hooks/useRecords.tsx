import {useState} from 'react';
import {useUpdate} from './useUpdate';

type RecordItem = {
  tagsName: string[],
  note: string,
  category: '+' | '-',
  output: number
}
export const useRecords = () => {
  const initRecordsString = window.localStorage.getItem('records');
  const initRecords = initRecordsString ? JSON.parse(initRecordsString) : [];
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