import React, { useContext } from 'react';
import {LoadingContext} from '../store/Store';
import TopBarProgress from "react-topbar-progress-indicator";
 
TopBarProgress.config({
  barColors: {
    "0": "#ffd200",
    "1.0": "#ec4561"
  },
  shadowBlur: 5
});
function Loading () {
    const [loading] = useContext(LoadingContext);
    if(loading === true){
        return(<>
            {loading && <TopBarProgress />}
            </>
        );
    } else{
        return(<div></div>)
    }
    
  };

export default Loading
