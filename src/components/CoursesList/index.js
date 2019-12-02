import React, { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default props => {
  const courses = useSelector(state => state.data);
  const dispatch = useDispatch();

  const refInput = useRef();
  const [courseName, setCourseName] = useState('');

  return (
    <>
      <ul>
        {courses.map((c, i) => (
          <li key={i}>{c}</li>
        ))}
      </ul>
      <input
        type="text"
        value={courseName || ''}
        onChange={e => setCourseName(e.target.value)}
      />
      <input
        type="button"
        value="cadastrar"
        onClick={() => {
          dispatch({ type: 'ADD_COURSE', title: courseName });
          setCourseName();
        }}
      />
    </>
  );
};
