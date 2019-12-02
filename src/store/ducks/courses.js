export const Types = {
  ADD: 'todos/ADD_COURSE'
};

const INITIAL_STATE_COURSES = {
  data: ['React Native', 'React JS', 'NodeJS']
};

export default function courses(state = INITIAL_STATE_COURSES, action) {
  switch (action.type) {
    case Types.ADD:
      return { ...state, data: [...state.data, action.payload.title] };
    default:
      return state;
  }
}

export const Creators = {
  addCourse: title => ({
    type: Types.ADD,
    payload: {
      title
    }
  })
};
