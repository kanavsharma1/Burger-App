import React from 'react';
import Aux from '../hoc/auxilary';

const layout = (props) => {
    return (
        <Aux>
            <div>

            </div>
            <main>
                {props.children}
            </main>
        </Aux>

    );
}
export default layout;