import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';
import "./css/ModalArmes.css"
const ModalArmes = (props) => {

    useEffect(() => {
        gsap.to(".animate", { opacity: 1, duration: 0.5, stagger: 0.3 })

    }, [])
    const closeModal = () => {
        gsap.to(".Modal", { opacity: 0, duration: 0.3, y: 200, x: 200, scale: 0.6 }).then(() => {
            props.close()
        })
        gsap.to(".BackgroundModal", { opacity: 0, duration: 0.3 })


    }
    return (
        <>
            <div onClick={closeModal} className='BackgroundModal'>

            </div>
            <div className='Modal'>
                <h1 className='animate'>{props.armeInfo.pseudo}</h1>
                <img className='animate' src={props.armeInfo.imageLink} />
                <div className='paragrapheRef animate'>
                    <h3>Fire Rate : <span>{props.armeInfo.armeState.fireRate}</span></h3>
                    <h3>Time Reload : <span>{props.armeInfo.armeState.reloadTimeSeconds}s</span></h3>
                    <h3>Time for equip : <span>{props.armeInfo.armeState.equipTimeSeconds}</span></h3>

                </div>
                <div className="ModalCloseButton animate" onClick={closeModal}>
                    <button className="btn btn--light">
                        <span className="btn__inner">
                            <span className="btn__slide"></span>
                            <span className="btn__content">Fermer</span>
                        </span>
                    </button>
                </div>
            </div>
        </>
    );
};

export default ModalArmes;