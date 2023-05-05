import "./modal.scss";
import { ReactComponent as ModalSvg } from "../../assets/img/modal-sprite.svg";

const Modal = ({ isModalOpen, setIsModalOpen }) => {
    return (
        <div className={` ${isModalOpen ? "modal__show" : "modal"}`}>
            <div className="modal__window">
                <button
                    className="modal__close-btn  modal__close"
                    onClick={() => setIsModalOpen(false)}
                >
                    <svg width="25" height="25">
                        <use href="#icon-cross" xlinkHref="#icon-cross" />
                        <ModalSvg />
                    </svg>
                </button>
                <h4>Contact me</h4>
                <form className="modal__form">
                    <label className="modal__form-field">
                        <input
                            className="modal__input"
                            type="text"
                            name="name"
                            placeholder="Name"
                            autoComplete="off"
                        />
                        <svg
                            className="modal__form-icon"
                            width="18"
                            height="18"
                        >
                            <use href="#icon-user" xlinkHref="#icon-user" />
                            <ModalSvg />
                        </svg>
                    </label>
                    <label className="modal__form-field">
                        <input
                            className="modal__input"
                            type="email"
                            name="mail"
                            placeholder="E-mail"
                            autoComplete="off"
                        />
                        <svg
                            className="modal__form-icon"
                            width="18"
                            height="18"
                        >
                            <use href="#icon-mail4" xlinkHref="#icon-mail4" />
                            <ModalSvg />
                        </svg>
                    </label>
                    <label className="modal__form-field">
                        <input
                            className="modal__input"
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            autoComplete="off"
                        />
                        <svg
                            className="modal__form-icon"
                            width="18"
                            height="18"
                        >
                            <use
                                href="#icon-file-text2"
                                xlinkHref="#icon-file-text2"
                            />
                        </svg>
                    </label>
                    <label className="modal__form-field">
                        <textarea
                            className="modal__textarea"
                            name="message"
                            cols="30"
                            rows="10"
                            placeholder="Message"
                        ></textarea>
                    </label>

                    <button className="modal__form-btn" type="submit">
                        Send
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Modal;
