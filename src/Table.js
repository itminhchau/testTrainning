
import Modal from './Modal';
import './Table.css'
import userData from './users.json'
const Table = ({ group_id, openModal }) => {


    const handlerOnclickUser = (item) => {
        openModal(item)
    }
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
                {userData.map((item, index) => {
                    if (item.group_id === group_id) {
                        return (
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

                        )
                    }

                })}


            </tbody>

        </table>
    )
}

export default Table