import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import App from './App.jsx';

// 서버에서 전달된 초기 데이터 가져오기
const initialData = window.__INITIAL_DATA__ || [];

hydrateRoot(
  document.getElementsByClassName('thumbnail-list')[0],
  <App movieList={initialData.length > 0 ? initialData : []} />
);
