import React from 'react';
import { useParams } from 'react-router-dom';

export default function Test2() {
  const { id } = useParams();
  return <div>Test2 {id}</div>;
}
