import React from 'react'
import arrow from '../assets/arrow.svg'
import flag from '../assets/flag.svg'

export default function Fifpl() {

    const learnyLib = () => {
        window.open('https://www.learnylib.com/formations/dentaire/', '_blank');
    }

    return (
        <>
            <div className="block-cards block-cards-responsive flex column center-content">

                <h2 className="text-center bold">FIF-PL</h2>

                <div className='center-content'>
                    <div className="price flex row">
                        <img className="w30" src={flag} alt="" />
                        <p>Jusqu’à 750€/an de prise en charge</p>
                    </div>
                </div>

                <div className="main flex column h150 center-content">
                    <div className="flex row top">
                        <img className="pdg-t10 w20 mrg-r5 " src={arrow} alt="" />
                        <p>Remboursement a postériori après dépôt de votre demande de prise en charge sur votre compte FIFPL</p>
                    </div>
                </div>


                    <button className="center-content" onClick={learnyLib}>Choisir ma formation</button>
                
            </div>
        </>
    )
}
