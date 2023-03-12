import logo from './logo.svg';
import './App.css';
import Table from './Table';
import { useState } from 'react'
import dataGroup from './groups.json'
import Modal from './Modal';


function App() {
  const [show, setShow] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [user, setUser] = useState('')
  const hanldeOnclick = (item, index) => {
    console.log(item, index);
    setShow(!show)
  }

  const openModal = (user) => {
    setShowModal(!showModal)
    setUser(user)
  }
  const cancel = () => {
    setShowModal(!showModal)
  }
  return (
    <div className="App">
      {
        showModal && <Modal cancel={cancel} user={user} />
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
          {dataGroup.map((item, index) => {

            return (
              <>
                <tr onClick={() => hanldeOnclick(item.id, index)}>
                  <td>{item.id}</td>
                  <td>{item.group_name}</td>
                  <td>{item.requirements}</td>
                  <td>{item.work_start_time}</td>
                  <td>{item.work_end_time}</td>
                </tr>

                {show &&
                  <tr >
                    <td colSpan="5" style={{ padding: "8px" }}><Table group_id={item.id} openModal={openModal} /></td>
                  </tr>
                }

              </>
            )
          })}

          {/* <tr>
            <td>Eve</td>
            <td>Jackson</td>
            <td>94</td>
          </tr>
          <tr>
            <td>John</td>
            <td>Doe</td>
            <td>80</td>
          </tr> */}
        </tbody>

      </table>
    </div >
  );
}

export default App;
