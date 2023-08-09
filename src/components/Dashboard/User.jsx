import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { FetchUserObj } from '../../Redux/Action';
import styled from 'styled-components';

const MainDivStyle = styled.div`
    border: 2px solid;
    width: 50%;
    align-items: center;
    text-align: center;
    display: inline-block;
    margin-top: 155px;
`;
const UserObjStyle = styled.p`
    display: flex;
    align-items: center;
    margin-left: 15px;
`;
const UserObjectsStyle = styled.div`
    display: flex;
    justify-content: center;
`;

export default function User() {
    const { code } = useParams();
    const dispatch = useDispatch();
    const userobj=useSelector((state)=>state.user.userobj)

    useEffect(() => {
        dispatch(FetchUserObj(code));
    }, [dispatch,code])
    
  return (
    <MainDivStyle>
        <UserObjectsStyle><h3>Name: - </h3><UserObjStyle>{userobj.name}</UserObjStyle></UserObjectsStyle>
        <UserObjectsStyle><h3>Email: - </h3><UserObjStyle>{userobj.email}</UserObjStyle></UserObjectsStyle>
        <UserObjectsStyle><h3>Website: - </h3><UserObjStyle>{userobj.website}</UserObjStyle></UserObjectsStyle>
        <UserObjectsStyle><h3>UserName: - </h3><UserObjStyle>{userobj.username}</UserObjStyle></UserObjectsStyle>
    </MainDivStyle>
  )
}
