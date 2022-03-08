import React, { useMemo } from 'react';

const getYearFnc = (year) => {
    console.log('year');
    switch( year ){
        case '2019' :
            return '입사년도';
        case '2020' :
            return '승진년도';
        case '2021' :
            return '부서변경';
        case '2022' :
            return '퇴사년도';    
        default :
            return '연도별 변동사항'
}
}

const getSubjectFnc = (subject) => {
    console.log('subject');
    switch( subject ){
        case '회의1' :
            return '상반기 운영 계획';
        case '회의2' :
            return '신입사원 교육';
        case '회의3' :
            return '공채 일자 결정';
        default :
            return '회의 일정과 내용'
}
    }   



const Sub = ( { subject,  year } ) => {

    const yearFnc = useMemo(() => { getYearFnc( year ) }, [ year ] );
    const subjectFnc = useMemo(() => { getSubjectFnc( subject ) }, [ subject ]);

    // const yearFnc = getYearFnc( year );
    // const subjectFnc = getSubjectFnc( subject );
    return(
        <div>
            <h2>오늘의 회의내용은 { subjectFnc } 입니다.</h2>
            <h2>해당년도에 변경된 사항은 { yearFnc } 입니다.</h2>
        </div>
    )
}

export default Sub;