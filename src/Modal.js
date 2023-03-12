import { useState } from 'react';
import './Modal.css'
const Modal = ({ cancel, user }) => {
    console.log("check user", user);
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [birthday, setBirthday] = useState('')
    const [gender, setGender] = useState('')
    return (
        <>
            <div class="modal">
                <div class="modal__overlay"></div>
                <div class="modal__body">
                    <div class="edit_user">
                        <div class="edit_user__container">
                            <div class="edit_user__header">
                                <h3 class="edit_user__heading">{user.user_name}</h3>
                            </div>
                            <div class="edit_user__form">
                                <div class="edit_user__group">
                                    <label htmlFor="">First Name</label>
                                    <input type="text" class="edit_user__input" value={user.first_name} onChange={() => handleOnchangeInput()} />
                                </div>
                                <div class="edit_user__group">
                                    <label htmlFor="">Last Name</label>
                                    <input type="text" class="edit_user__input" value={user.last_name} />
                                </div>
                                <div class="edit_user__group">
                                    <label htmlFor="">Birthday</label>
                                    <input type="text" class="edit_user__input" value={user.birthday} />
                                </div>
                                <div class="edit_user__group">
                                    <label htmlFor="">Gender</label>
                                    <input type="text" class="edit_user__input" value={user.gender} />
                                </div>
                            </div>

                            <div class="edit_user__controls">
                                <button class="btn edit_user__controls-back btn__normal" onClick={() => cancel()}>cancel</button>
                                <button class="btn  btn--primary ">Save</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal