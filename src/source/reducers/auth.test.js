import reducer from './auth';
import * as actionTypes from '../actions/actionTypes';

describe('auth reducer', () =>{
    it('should return the initial state', ()=>{
        expect(reducer(undefined,{})).toEqual({
            token:null,
            userId:null,
            error:null,
            loading:false,
            authRedirectPath:'/'
        })
    })

    it('should store token upon login', ()=>{
        expect(reducer({
            token:null,
            userId:null,
            error:null,
            loading:false,
            authRedirectPath:'/'
        },{
            type:actionTypes.AUTH_SUCCESS,
            idToken:'sdfa',
            userId: 'adasf'    
        })).toEqual({
            token:'sdfa',
            userId:'adasf',
            error:null,
            loading:false,
            authRedirectPath:'/'
        })
    })
})