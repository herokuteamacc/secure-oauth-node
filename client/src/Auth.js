import locationHelperBuilder from 'redux-auth-wrapper/history4/locationHelper';
import { connectedRouterRedirect } from 'redux-auth-wrapper/history4/redirect';
import connectedAuthWrapper from 'redux-auth-wrapper/connectedAuthWrapper';
import Loader from './components/Loader/Loader';


const locationHelper = locationHelperBuilder({})


const userIsAuthenticatedDefaults = {
    authenticatedSelector: state => (state.login && state.login.login !== null && state.login.login !== ''),
    authenticatingSelector: state => state.loading,
    wrapperDisplayName: 'UserIsAuthenticated'
}

export const userIsAuthenticated = connectedAuthWrapper(userIsAuthenticatedDefaults)

export const userIsAuthenticatedRedir = connectedRouterRedirect({
    ...userIsAuthenticatedDefaults,
    AuthenticatingComponent: Loader,
    redirectPath: '/'
})

export const userIsAdminRedir = connectedRouterRedirect({
    redirectPath: '/',
    allowRedirectBack: false,
    authenticatedSelector: state => state.login.role !== null && state.login.role==='admin',
    predicate: user => user.isAdmin,
    wrapperDisplayName: 'UserIsAdmin'
})


export const userIsLicensedRedir = connectedRouterRedirect({
    redirectPath: '/',
    allowRedirectBack: false,
    authenticatedSelector: state => state.login.role !== null && state.login.role==='licensed',
    predicate: user => user.isLicensed,
    wrapperDisplayName: 'UserIsLicensed'
})

const userIsNotAuthenticatedDefaults = {
    // Want to redirect the user when they are done loading and authenticated
    authenticatedSelector: state => (state.login.login === null || state.login ) && state.loading === false,
    wrapperDisplayName: 'UserIsNotAuthenticated'
}
  
export const userIsNotAuthenticated = connectedAuthWrapper(userIsNotAuthenticatedDefaults)


export const userIsNotAuthenticatedRedir = connectedRouterRedirect({
    ...userIsNotAuthenticatedDefaults,
    redirectPath: (state, ownProps) => locationHelper.getRedirectQueryParam(ownProps) || '/login',
    allowRedirectBack: false
})

