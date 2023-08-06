import React, {useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

const CompanyInput = ({onSubmit}) => {

    const [formKRS, setFormKRS] = useState({ numberKRS: "", register: "P"});
    const [message, setMessage] = useState("");
    const handleChangeInput = (event) => {
        setFormKRS({ ...formKRS, numberKRS: event.target.value});
    }

    const handleChangeSelect = (event) => {
        setFormKRS({ ...formKRS, register: event.target.value});
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        if(formKRS.numberKRS.length <= 9) {
            setMessage("Wprowadzono mniej niż 10 znaków, sprawdź numer KRS")
            return
        } else if(formKRS.numberKRS.length > 10) {
            setMessage("Wprowadzono więcej niż 10 znaków, sprawdź numer KRS")
            return
        }
        setMessage("")
        onSubmit(formKRS);
    };

    return (
        <>
            <form className="form" onSubmit={handleSubmit}>
                <select className="form__item form__item--small" onChange={handleChangeSelect}>
                    <option value="P">Przedsiębiorcy</option>
                    <option value="S">Stowarzyszenia i inne</option>
                </select>
                <input type="number" placeholder="Numer KRS" className="form__item form__item--number" onChange={handleChangeInput}/>
                
                <button type="submit" className="button button--main">Szukaj</button>
                {message ? <p className='text__title text--color--red'>{message}</p> : null }
            </form>
        </>

    );
};

export default CompanyInput;