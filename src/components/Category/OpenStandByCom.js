import '../../css/CategoryPages/OpenStandBy.css';
import { BsBellFill } from "react-icons/bs";
import Datas from '../../particularpage/data/Datas';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


function OpenStandByCom(props){

    let [alCnt,setAlCnt] = useState(0);

    const Navigate = useNavigate();

    return(<div className="OBSCardSlot">
        <div className="OBSCardImgBox" onClick={()=>alert('상품 준비중 입니다.')}> <img className="OBSCardImg" src={props.OpenComponent[props.index].OBSImage}/> </div>
        <div className="OBSCardDetailCon"  onClick={()=>alert('상품 준비중 입니다.')}>
            <div className="OBSCardDetailCompany">{props.OpenComponent[props.index].OBSCompany}</div>
            <div className="OBSCardDetailTitle">{props.OpenComponent[props.index].OBSTitle}</div>
            <div className="OBSCardDetailDetail">{props.OpenComponent[props.index].OBSDetail}</div>
            <div className='OBSEmptyBox'></div>
        </div>
        <div className="OBSAlram">
            <div className="OBSAlraming">{alCnt}명 알림신청 중</div>
            <div className="OBSAlramBell" onClick={()=>{
                alert('알림 신청 되었습니다');
                {setAlCnt(alCnt+1)};
                }}> <BsBellFill /> 알림신청</div>
        </div>
    </div>

    );
}

export default OpenStandByCom;