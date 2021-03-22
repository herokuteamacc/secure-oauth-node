const getDashboard = (token) => {
    return function (dispatch) {
        dispatch({ type: 'LOADING', response: true });
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                'token': token
            })
        };

        fetch('https://lwc-lwc-recipes-oss.herokuapp.com/', requestOptions)
            .then(response => response.json())
            .then(data => {
                dispatch({ type: 'LOADING', response: false });
                dispatch({ type: 'GET_DASHBOARD', response: data })
            })
            .catch(err => {
                dispatch({ type: 'LOADING', response: false });
                dispatch({ type: 'GET_DASHBOARD', response: {} })
            });
    };
};

export default getDashboard;