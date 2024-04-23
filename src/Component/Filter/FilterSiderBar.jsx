import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

export const FilterSiderBar = () => {
    return (
        <div className="bg-black">
            <h1 className="text-white p-3 text-xl">Lọc sản phẩm</h1>
            <Accordion className=" bg-black text-white ">
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <p>Thương hiệu</p>

                </AccordionSummary>
                <AccordionDetails>
                    <div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                Apple
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" defaultValue id="flexCheckChecked" />
                            <label className="form-check-label" htmlFor="flexCheckChecked">
                                SamSung
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" defaultValue id="flexCheckChecked" />
                            <label className="form-check-label" htmlFor="flexCheckChecked">
                                Xiaomi
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                Apple
                            </label>
                        </div>
                    </div>

                </AccordionDetails>
            </Accordion>
            <Accordion className=" bg-black text-white " >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    Loại sản phẩm
                </AccordionSummary>
                <AccordionDetails>
                    <div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                Điện thoại
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" defaultValue id="flexCheckChecked"  />
                            <label className="form-check-label" htmlFor="flexCheckChecked">
                                iPad
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                Mac
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                               Laptop & PC
                            </label>
                        </div>
                    </div>
                </AccordionDetails>
            </Accordion>

        </div>


    );
}
