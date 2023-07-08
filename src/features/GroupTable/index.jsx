import { useEffect, useState } from 'react';
import dataGroup from '../../mockdata/groups.json';
import ModalUser from '../ModalUser';
import UserTable from '../UserTable';
import formatDate from '../../components/common/formatDate';
import './style.scss'
GroupTable.propTypes = {

};

function GroupTable(props) {
    const [showModal, setShowModal] = useState(false)
    const [user, setUser] = useState('')
    const [checked, setChecked] = useState()
    const [hide, setHide] = useState(true)
    const [dataGroupConvert, setDataGroupConvert] = useState([])
    const [dataFromModal, setDataFromModal] = useState({})

    const hanldeOnclick = (id) => {
        if (checked === id) {
            setHide(false)
            setChecked(" ")
        } else {
            setChecked(id)
            setHide(true)
        }
    }


    const openModal = (user) => {
        setShowModal(!showModal)
        setUser(user)
    }
    const cancel = () => {
        setShowModal(!showModal)
    }

    const handleReceiveDataFromModal = (user) => {
        setDataFromModal(user)
        cancel()
    }

    useEffect(() => {

        let data = dataGroup.map((item) => {
            item.work_start_time = formatDate(item.work_start_time)
            item.work_end_time = formatDate(item.work_end_time)
            return item
        })

        setDataGroupConvert(data)
    }, [])

    return (
        <div className='container'>
            {
                showModal && <ModalUser cancel={cancel} user={user} onReceiveDataFromModal={handleReceiveDataFromModal} />
            }

            <table className='outner-table'>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>group_name</th>
                        <th>requirements</th>
                        <th>work_start_time</th>
                        <th>work_end_time</th>
                    </tr>
                </thead>
                <tbody>
                    {dataGroupConvert && dataGroupConvert.map((item, index) => {

                        return (
                            <>
                                <tr onClick={() => hanldeOnclick(item.id, index)}>
                                    <td>{item.id}</td>
                                    <td>{item.group_name}</td>
                                    <td>{item.requirements}</td>
                                    <td>{item.work_start_time}</td>
                                    <td>{item.work_end_time}</td>
                                </tr>

                                {checked === item.id && hide &&
                                    <tr >
                                        <td colSpan="5" style={{ padding: "8px" }}><UserTable group_id={item.id} openModal={openModal} user={dataFromModal} /></td>
                                    </tr>
                                }

                            </>
                        )
                    })}
                </tbody>

            </table>
        </div>
    );
}

export default GroupTable;