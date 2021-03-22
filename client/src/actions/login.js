import jwtDecode from 'jwt-decode';

const login = (values, history) => {
    return function (dispatch) {
        dispatch({ type: 'LOADING', response: true });
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(values)
        };
        fetch('/api/login', requestOptions)
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    let token = data.data.token;
                    if (token) {
                        dispatch({ type: 'LOADING', response: false });
                        localStorage.setItem('usertoken', data.data.token);
                        const token = jwtDecode(data.data.token);

                     //   if(token.role){
                          console.log((token));
                         //   if(token.role.indexOf('admin')>-1){
                       //         dispatch({ type: 'LOGIN_SUCCESS', response: {token:data.data.token,role:'admin' }});
                         //   }
                           // else if(token.role.indexOf('licensed')>-1){
                             //   dispatch({ type: 'LOGIN_SUCCESS', response: {token:data.data.token,role:'licensed' }});
                            //}else{
                              //  dispatch({ type: 'LOGIN_SUCCESS', response: {token:data.data.token,role:'standard' }});
                           // }
                       // }

                        history.location.pathname = "https://lwc-lwc-recipes-oss.herokuapp.com/";
                    }
                } else {
                    let error = data.message;
                    dispatch({ type: 'LOADING', response: false });
                    dispatch({ type: 'LOGIN_FAILURE', response: error });
                    history.push('/');
                }
            })
            .catch(err => {
                dispatch({ type: 'LOADING', response: false });
                dispatch({ type: 'LOGIN_FAILURE', response: err })
            });
    }
}

export default login;