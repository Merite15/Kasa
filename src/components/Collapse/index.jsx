import { useState } from "react";

import "./style.scss";

export const Collapse = ({ title, content, open = false, list }) => {

    const [collapseStatus, setCollapseStatus] = useState(open);

    return (
        <div className="collapse">
            <div className="collapse__head" onClick={() => setCollapseStatus(!collapseStatus)}>
                <p className="collapse__title">
                    {title}
                </p>

                <p>
                    {collapseStatus ? <i className="fa-solid fa-chevron-down fa-2x"></i> :
                        <i className="fa-solid fa-chevron-up fa-2x"></i>}

                </p>
            </div>
            {collapseStatus &&
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