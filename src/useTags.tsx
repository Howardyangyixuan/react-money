import {useState} from 'react';
import {Tag} from './views/helper';
import {createId} from './lib/createId';

const defaultTags = [
  {id: createId(), name: '衣'},
  {id: createId(), name: '食'},
  {id: createId(), name: '住'},
  {id: createId(), name: '行'},
];
const useTags = () => {
  const [tags, setTags] = useState<Tag[]>(defaultTags);
  const findTag = (id: number) => {
    return tags.find(tag => tag.id === id);
  };
  const updateTag = (id: number, name: string) => {
    setTags(tags.map(tag => tag.id === id ? {id, name} : tag));
  };
  const addTag = (name: string) => {
    const newTags = [...tags, {id: createId(), name}];
    setTags(newTags);
  };
  const deleteTag = (id: number) => {
    setTags(tags.filter(tag => tag.id !== id));
  };
  return {
    tags,
    setTags,
    findTag,
    updateTag,
    addTag,
    deleteTag
  };
};

export {useTags};