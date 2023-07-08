import { useEffect, useRef, useState } from 'react';
import userDataJson from '../../mockdata/users.json';
import './style.scss';
const UserTable = ({ group_id, openModal, user }) => {

    const [userData, setUserData] = useState(userDataJson)
    const prevUserData = useRef(userData)

    const handlerOnclickUser = (item) => {
        openModal(item)
    }

    useEffect(() => {
        let data = prevUserData.current.map((item) => {
            if (item.id === user.id) {
                item = user
            }
            return item
        })
        prevUserData.current = data
        setUserData(data)
    }, [user])
    return (
        <table className='inner-table'>
            <thead>
                <tr>
                    <th>id</th>
                    <th>first_name</th>
                    <th>last_name</th>
                    <th>birthday</th>
                    <th>gender</th>
                    <th>user_name</th>
                    <th>password</th>
                    <th>group_id</th>
                </tr>
            </thead>
            <tbody>
                {userData.map(item => {
                    return item.group_id === group_id &&
                        <>
                            <tr onClick={() => handlerOnclickUser(item)}>
                                <td>{item.id}</td>
                                <td>{item.first_name}</td>
                                <td>{item.last_name}</td>
                                <td>{item.birthday}</td>
                                <td>{item.gender}</td>
                                <td>{item.user_name}</td>
                                <td>{item.password}</td>
                                <td>{item.group_id}</td>
                            </tr>
                        </>
                }

                )}


            </tbody>

        </table>
    )
}

export default UserTable