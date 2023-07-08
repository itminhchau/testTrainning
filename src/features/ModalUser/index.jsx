import { useState } from 'react';
import './style.scss';
const ModalUser = ({ cancel, user, onReceiveDataFromModal }) => {
    const [input, setInput] = useState(user)
    const handleOnchangeInput = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleSave = () => {
        if (onReceiveDataFromModal) {
            onReceiveDataFromModal(input)
        }
    }
    return (
        <>
            <div class="modal">
                <div class="modal__overlay"></div>
                <div class="modal__body">
                    <div class="edit_user">
                        <div class="edit_user__header">
                            <h3 class="edit_user__heading">{input.user_name}</h3>
                        </div>
                        <div class="edit_user__form">
                            <div class="edit_user__group">
                                <span >First Name</span>
                                <input type="text" name='first_name' class="edit_user__input" value={input.first_name} onChange={handleOnchangeInput} />
                            </div>
                            <div class="edit_user__group">
                                <span >Last Name</span>
                                <input type="text" name='last_name' class="edit_user__input" value={input.last_name} onChange={handleOnchangeInput} />
                            </div>
                            <div class="edit_user__group">
                                <span >Birthday</span>
                                <input type="text" name='birthday' class="edit_user__input" value={input.birthday} onChange={handleOnchangeInput} />
                            </div>
                            <div class="edit_user__group">
                                <span >Gender</span>
                                <input type="text" name='gender' class="edit_user__input" value={input.gender} onChange={handleOnchangeInput} />
                            </div>
                        </div>

                        <div class="edit_user__controls">
                            <button class="btn  btn__normal cancel" onClick={() => cancel()}>cancel</button>
                            <button class="btn  btn--primary " onClick={handleSave}>Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModalUser