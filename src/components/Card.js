import React, {Fragment} from "react";

const Card = ({id, email, name}) => {
    return (
        <Fragment>
            <div className={'tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'}>
                <img src={`https://robohash.org/${id}?200x200`} width={200} height={200} alt="robots"/>
                <div>
                    <h2>{name}</h2>
                    <p>{email}</p>
                </div>
            </div>
        </Fragment>
    );
};

export default Card;
