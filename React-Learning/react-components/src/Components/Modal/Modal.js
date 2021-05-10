import React, {useState} from 'react'
import "./Modal.css"

export default function Modal() {
    
    const [modal, setModal] = useState(false)

    const toggleModal = () => {
        setModal(!modal)
    }
    
    return (
        <>
            <button 
                onClick={toggleModal}
                className="btn-modal">OPEN
            </button>

            {modal && 
                <div className="overlay">
                    <div className="modal">
                        <div className="modal-content">
                            <h2>Hello Modal</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima cupiditate nostrum enim ipsum ut adipisci, voluptas ipsam vel quisquam a dolore magnam ullam doloribus. Odio vel maxime consectetur atque, iure corrupti voluptas veritatis similique labore, sapiente repellat consequuntur maiores perferendis est iste velit, modi reprehenderit rerum eveniet commodi omnis repudiandae!</p>
                            <button
                                onClick={toggleModal} 
                                className="close-modal">CLOSE
                            </button>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}
