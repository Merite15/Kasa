import { useState } from "react";

import  "./style.scss";

export const Collapse = ({ title, content, open = false, list }) => {

    const [isOpen, Switch] = useState(open);

    return (
        <div className="collapse">
            <div className="collapse__head" onClick={() => Switch(!isOpen)}>
                <div className="collapse__title">
                    {title}
                </div>

                <div>
                    {isOpen ? <i className="fa-solid fa-chevron-down fa-2x"></i> :
                        <i className="fa-solid fa-chevron-up fa-2x"></i>}

                </div>
            </div>
            {isOpen &&
                <div className="collapse__content">
                    {content}
                    {list && <ul>

                        {list?.map((element, i) => {
                            return (<li className="list-none" key={i}>{element}</li>)
                        })}
                    </ul>}
                </div>}
        </div>
    );
}