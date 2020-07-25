const logout = (history) => {
    return function (dispatch) {
            dispatch({ type: 'LOADING', response: true });
            localStorage.removeItem('usertoken');
            localStorage.removeItem('state');
            dispatch({ type: 'LOGOUT_USER', response: null });
            history.push('/');
            dispatch({ type: 'LOADING', response: false });   
    }
}

export default logout;