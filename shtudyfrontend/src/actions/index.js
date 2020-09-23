import shtudy from '../apis/shtudy';

export const createQuestion = (formValues) => async (dispatch) => {
	shtudy.post('/questions', formValues)
}

export const showQuestions = () => async (dispatch) => {
    const response = await shtudy.get('/questions');

    dispatch({
        type: 'SHOW_QUESTIONS',
        payload: response.data
    })
};

export const filterQuestions = (filterOption) => async (dispatch) => {
	const response = await shtudy.get('/questions');
	dispatch({
		type: 'FILTER_QUESTIONS',
		payload: response.data.filter(filterOption)
	})
};

export const readQuestion = (id) => async (dispatch) => {
    const response = await shtudy.get(`/questions/${id}`);

    dispatch({
        type: 'READ_QUESTION',
        payload: response.data
    })
}

export const updateQuestion = (formValues, id) => async (dispatch) => {
	shtudy.put(`/user/${id}`, formValues)
}

export const deleteQuestion = (id) => async (dispatch) => {
	shtudy.delete(`/${id}`)
}


export const authCheck = () => async (dispatch) => {
	const response = await shtudy.get('/login/success')
		.then(res => {
			if (res.status === 200) {
				console.log('authChecked success');
				return res.data
			}
			throw new Error("failed to authenticate user");
		})

	dispatch({
		type: 'AUTHENTICATE_CHECK',
		payload: response
	})
}

export const authLogin = (formValues) => async (dispatch) => {
	await shtudy.post('/login', formValues);
}

export const createUser = (formValues) => async (dispatch) => {
	shtudy.post('/user', formValues)
}

export const readUser = (id) => async (dispatch) => {
	const response = await shtudy.get(`/user/${id}`)
		.then(res => {
			if (res.status === 200) return res.data;
			throw new Error("failed to find user");
		})
	
	dispatch({
		type: 'READ_USER',
		payload: response
	})
}

export const updateUser = (formValues, id) => async (dispatch) => {
	shtudy.put(`/user/${id}`, formValues)
}

export const deleteUser = (id) => async (dispatch) => {
	shtudy.delete(`/${id}`)
}

export const addQuestionCart = (question_id) => async (dispatch) => {
    const response = await shtudy.get(`/questions/${question_id}`);

    dispatch({
        type: 'ADD_QUESTION_CART',
        payload: response.data
    })
}

export const removeQuestionCart = (question_id) => async (dispatch) => {
    const response = await shtudy.get(`/questions/${question_id}`);

    dispatch({
        type: 'REMOVE_QUESTION_CART',
        payload: response.data
    })
}














