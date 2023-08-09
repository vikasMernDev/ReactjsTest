import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FetchUserList, FetchUserListFilter } from "../../Redux/Action";
import Filter from "../Filters/Filter";
import styled from 'styled-components';

const FilterStyle = styled.div`
    display:flex;
    justify-content: space-evenly;
`;
const TableTdStyle = styled.td`
   width: 90px
`;
const TableMainStyle = styled.div`
    display:flex;
    justify-content: center;
    margin-top: 35px;
`;
const TableHeadStyle = styled.thead`
    background: #f34a4a;
    width: 62px;
    height: 39px;
    color: #ffffff;
`;
const TableBodyStyle = styled.tbody`
    background: #faebd7
`;

export default function Dashboard (props) {
    const dispatch = useDispatch();
    const userobj = useSelector((state)=>state.user.userlist)

    
    useEffect(() => {
        dispatch(FetchUserList())
        },[dispatch])

    const onNameChange = (e) => {
        const nameFilter = e?.target?.value;
        dispatch(FetchUserListFilter(nameFilter))
      };
    const onEmailChange = (e) => {
        const nameFilter = e?.target?.value;
        dispatch(FetchUserListFilter(nameFilter))
      };

    return (
            <div>
                <FilterStyle>
                    <Filter
                        heading='Name'
                        onChange={onNameChange}
                        user={userobj.map(item => ({
                            label: item.name,
                            value: item.id,
                        }))}
                    />
                    <Filter
                        heading='Email'
                        onChange={onEmailChange}
                        user={userobj.map(item => ({
                            label: item.email,
                            value: item.id,
                        }))}
                    />
                </FilterStyle>
                    <TableMainStyle >
                        <div >
                            <table>
                                <TableHeadStyle >
                                    <tr>
                                        <TableTdStyle>Id</TableTdStyle>
                                        <td>Name</td>
                                        <td>Email</td>
                                        <td>Website</td>
                                        <td>UserName</td>
                                        <TableTdStyle>Action</TableTdStyle>
                                    </tr>
                                </TableHeadStyle>
                                <TableBodyStyle>
                                    {
                                        userobj && userobj.map(item =>
                                            <tr key={item.id}>
                                                <td>{item.id}</td>
                                                <td>{item.name}</td>
                                                <td>{item.email}</td>
                                                <td>{item.website}</td>
                                                <td>{item.username}</td>
                                                <td>
                                                    <Link to={'/user/edit/' + item.id}>Edit</Link>
                                                </td>
                                            </tr>
                                        )
                                    }
                                </TableBodyStyle>
                            </table>
                        </div>
                    </TableMainStyle>
                </div>
    );
}

