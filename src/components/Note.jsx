import { Modal } from "react-bootstrap";
import { useState } from "react";
import Picker from 'emoji-picker-react';

const Note = ({ data, fetchData }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const [chosenEmoji, setChosenEmoji] = useState(null);

  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
  };


  return (
    <>
      <div className="col-md-9">
        <div className="cardStyle">
          <div className="row">
            <div className="col-12">
              <h5 className="fw-bold">Joke</h5>
              <p className="leads">
                {data.length <= 25
                  ? data
                  : `${data.slice(0, 25)}...`}
              </p>
              <div className="d-flex justify-content-between align-items-center my-2">
                <button
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={() => handleShow()}
                >
                  View details
                </button>
                <button
                  className="btn btn-primary"
                  onClick={() => fetchData()}
                >
                  Get another joke
                </button>
              </div>
              {chosenEmoji ? (
                <span>You chose: <h1>{chosenEmoji.emoji}</h1></span>
              ) : (
                <span>No emoji Chosen</span>
              )}
              <div className="row">
                <div className="col-12">
                  <Picker onEmojiClick={onEmojiClick} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      

      <Modal dialogClassName="modal-40w" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Joke</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="leads">{data}</p>
          <button
            className="btn btn-primary"
            onClick={(e) => {
              handleClose();
            }}
          >
            Close
          </button>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Note;
