import React, {useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

const CompanyInput = ({onSubmit}) => {

    const [formKRS, setFormKRS] = useState({ numberKRS: "", register: "" });
    const [message, setMessage] = useState("");


    // const handleSaveKRS = () => {
    //     if(formKRS.numberKRS || formKRS.register) {
    //         setMessage("Szukaj")
    //     }
    // }
    //
    const handleChangeInput = (event) => {
        // if(event.target.value.length === 10 || typeof event.target.value === "number") {
        //     setMessage("")
            setFormKRS({ ...formKRS, numberKRS: event.target.value});
        // } else if (event.target.value.length <= 9) {
        //     setMessage("Wprowadzono mniej niż 10 znaków, sprawdź numer KRS")
        // } else if (event.target.value.length > 10) {
        //     setMessage("Wprowadzono więcej niż 10 znaków, sprawdź numer KRS")
        // }
        // handleSaveKRS()

    }


    const handleChangeSelect = (event) => {
        if(event.target.value.length > 0 ) {
            setMessage("")
            setFormKRS({ ...formKRS, register: event.target.value});
        } else {
            setMessage("Wybierz Rejestr")
        }
        // handleSaveKRS()

    }


    const handleSubmit = (e) => {
        e.preventDefault();
        if(formKRS.numberKRS.length < 3) {
            return
        }
        onSubmit(formKRS);

    };


    return (
        <div>
            <form className="container" style={{ width: "400px" }} onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="numberKRS" className="form-label">Wprowadż nr KRS</label>
                    <input type="number" className="form-control" id="numberKRS" onChange={handleChangeInput}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="register" className="form-label">Wybierz Rejestr</label>
                    <select id="register" className="form-select" onChange={handleChangeSelect}>
                        <option value="P">Przedsiębiorcy</option>
                        <option value="S">Stowarzyszenia i inne</option>
                    </select>
                </div>
                <div>
                    <button type="submit" className="btn btn-primary">Szukaj</button>
                    {/*{message ? <input className="btn btn-primary" type="submit" value={message} /> : null }*/}
                </div>
            </form>
            <h1>{formKRS.numberKRS}</h1>
            <h1>{formKRS.register}</h1>
        </div>
    );
};

export default CompanyInput;