import {useEffect, useState} from 'react';
import {Tag} from './views/helper';
import {createId} from './lib/createId';

const defaultTags = [
  {id: 0, name: '衣'},
  {id: 1, name: '食'},
  {id: 2, name: '住'},
  {id: 3, name: '行'},
];

const useTags = () => {
  const stringTag = window.localStorage.getItem('tags');
  const localTags = stringTag ? JSON.parse(stringTag) : defaultTags;
  const [tags, setTags] = useState<Tag[]>(localTags);
  useEffect(() => {
    window.localStorage.setItem('tags', JSON.stringify(tags));
  }, [tags]);
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