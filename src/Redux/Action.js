import axios from "axios"
import { FAIL_REQUEST, GET_USER_LIST, GET_USER_OBJ, MAKE_REQUEST } from "./ActionType"

export const makeRequest=()=>{
    return{
        type:MAKE_REQUEST
    }
}
export const failRequest=(err)=>{
    return{
        type:FAIL_REQUEST,
        payload:err
    }
}
export const geUserList=(data)=>{
    return{
        type:GET_USER_LIST,
        payload:data
    }
}
export const geUserListFilter=(data)=>{
    return{
        type:GET_USER_LIST,
        payload:data
    }
}
export const getUserObj=(data)=>{
    return{
        type:GET_USER_OBJ,
        payload:data
    }
}



export const FetchUserList=()=>{
    return (dispatch)=>{
      dispatch(makeRequest());
        axios.get(`https://jsonplaceholder.typicode.com/users`).then(res=>{
            const userlist=res.data;
            dispatch(geUserList(userlist));
          }).catch(err=>{
            dispatch(failRequest(err.message))
          })
    }
}

export const FetchUserListFilter=(name)=>{
    return (dispatch)=>{
      dispatch(makeRequest());
        axios.get(`https://jsonplaceholder.typicode.com/users?id=`+name).then(res=>{
            const userlist=res.data;
            dispatch(geUserListFilter(userlist));
          }).catch(err=>{
            dispatch(failRequest(err.message))
          })
    }
}

export const FetchUserObj=(code)=>{
    return (dispatch)=>{
      dispatch(makeRequest());
        axios.get('https://jsonplaceholder.typicode.com/users/'+code).then(res=>{
            const userlist=res.data;
            dispatch(getUserObj(userlist));
          }).catch(err=>{
            dispatch(failRequest(err.message))
          })
     
    }
}
