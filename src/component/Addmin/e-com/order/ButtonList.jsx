import StatusButton from "../../../../component/Addmin/e-com/order/StatusButton";
import { useSearchParams } from "react-router-dom";




export default function ButtonList() {

    return (
        <div >
            {
                StatusButton.map((statusbutton, index) => (
                    <div className="relative" >
                        <StatusButton name={statusbutton.name} number={statusbutton.number} setParams={setParams} params={statusbutton.params} />
                        
                        {console.log(params, params === statusbutton.params )}
                    </div>
                ))
            }
        </div>
    )
}